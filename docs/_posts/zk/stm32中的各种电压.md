---
title: stm32中的各种电压
date: 2024-02-22 11:03:54
permalink: /pages/fde882/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-01-26 16:02  
Status: #idea  
Tags: [[嵌入式]] [[stm32]] 

---

# stm32中的各种电压
附带记录VDD、VDDA，VBAT，VREF的区别
MCU 的参考手册都会有一章节单独介绍 MCU 的电源管理，针对不同的 MCU（封装不同等）其外部电源如何连接也是有要求的，我们在 MCU 上一般都会发现如下引脚（注意不同 MCU 是有区别的）：

VDD / VSS: VDD is the external power supply for the I/Os, the internal regulator and the system analog such as reset, power management and internal clocks. It is provided externally through VDD pins.

VDDA / VSSA: VDDA 是A/D转换器，D/A 转换器，参考电压缓冲器，运算放大器和比较器的外部模拟电源。 VDDA 电压电平与 VDD 电压无关。 不使用这些外设时，最好将 VDDA 连接到 VDD。

VBAT： 当不存在 VDD 时，VBAT 是 RTC，外部时钟 32kHz 振荡器和备用寄存器（通过电源开关）的电源。 对于没有专用引脚的小型封装，VBAT内部连接到了 VDD

VREF+ / VREF-： VREF+ 是 ADC 和 DAC 的输入参考电压。 使能后，它也是内部参考电压缓冲器的输出。当不使用 ADC 和 DAC 时，VREF+ 可以接地。VRE- 必须始终等于 VSSA。
VREF- 和 VREF+ 引脚并非在所有封装中都可用。 如果封装上未提供它们，则它们在 MCU 内部分别与 VSSA 和 VDDA 相连, 也有说是与vcc相连




## 【问题背景】  
在使用 [ADC](https://so.csdn.net/so/search?q=ADC&spm=1001.2101.3001.7020) 时，通常的用法是 Vref + 接电源 VDD3.3V，然后计算时直接用 3.3V 做参考电压，但是这种方法忽略了一些情况如供电电压有可能随外部一些其他用电器工作使用的大电流而导致电压不稳定，还有可能 MCU 供电 LDO 转换的精度个别偏差较大。这时候依然用 3.3V 的定值做参考电压计算显然得出的值就会出现与实际电压偏差较大的问题。

**附带记录 VDD、VDDA，VBAT，VREF 的区别**  
MCU 的参考手册都会有一章节单独介绍 MCU 的电源管理，针对不同的 MCU（封装不同等）其外部电源如何连接也是有要求的，我们在 MCU 上一般都会发现如下引脚（注意不同 MCU 是有区别的）：

VDD / VSS: VDD is the external power supply for the I/Os, the internal regulator and the system analog such as reset, power management and internal clocks. It is provided externally through VDD pins.

VDDA / VSSA: VDDA 是 A/D 转换器，D/A 转换器，参考电压缓冲器，运算放大器和比较器的外部模拟电源。 VDDA 电压电平与 VDD 电压无关。 不使用这些外设时，最好将 VDDA 连接到 VDD。

VBAT： 当不存在 VDD 时，VBAT 是 RTC，外部时钟 32kHz 振荡器和备用寄存器（通过电源开关）的电源。 对于没有专用引脚的小型封装，VBAT 内部连接到了 VDD

VREF+ / VREF-： VREF+ 是 ADC 和 DAC 的输入参考电压。 使能后，它也是内部参考电压缓冲器的输出。当不使用 ADC 和 DAC 时，VREF+ 可以接地。VRE- 必须始终等于 VSSA。  
VREF- 和 VREF+ 引脚并非在所有封装中都可用。 如果封装上未提供它们，则它们在 MCU 内部分别与 VSSA 和 VDDA 相连。

【解决方案】  
一般 100 脚以上的 STM32 MCU 都有 VREF 引脚。对于 100 脚以下的芯片，STM32 没有把 VREF 引脚引出来，而是直接在内部连接到了 VDDA 引脚。这样就导致了 ADC 的供电电源和参考电源实际是一个。通常项目中我们 VDDA 也是连接到了 VDD。  
如果有 VREF 引脚，可以在 VREF 上接一个稳定且精度高的电压作为参考电压。

还有一种方法是启用内部参考电压。  
根据 STM32f10xCDE 数据手册中的数据，这个参照电压的典型值是 1.20V，最小值是 1.16V，最大值是 1.24V（-40~85 度）。这个电压基本不随外部供电电压的变化而变化。  
![](https://img-blog.csdnimg.cn/20210604160449513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70)

不同的芯片这个参考电压的范围不一样，如下面这个（STM32L475 datasheet）：  
![](https://img-blog.csdnimg.cn/20210604160049842.png)  
很明显，如果以这个为参考电压，我们也得测量其值，因为它对于不同的芯片是一个范围，并不是确定值。 STM32 可以通过配置将 VREFINT 接入到 ADC 内部的通道 17，然后我们就可以像测试普通的通道一样测量 VREFINT 到底是多少。注意 MCU 不同 具体连接的 ADC 通道也是不同的。  
![](https://img-blog.csdnimg.cn/20210604163616104.png)

具体方法是在测量某个通道的电压值之前，先读出参照电压的 ADC 测量数值 (即从 ADC1_IN17 读出的值)，记为 ADrefint；再读出要测量通道的 ADC 转换数值，记为 ADchx；则要测量的电压为：

Vchx = Vrefint * (ADchx/ADrefint)

其中 Vrefint 为参照电压 = 1.20V（STM32F10x）。

推导过程：

Vchx = VREFINT* (（（ADchx*（VREF/4096））/（ADre*（VREF/4096））)

注：VREFINT=1.2V（这里取 1.20V 实际上会有误差），VREF 为参考电压值 = 3.3V  
此公式可以理解为：（ADchx*（VREF/4096）是正常计算的含误差电压值，VREFINT/（ADre*（VREF/4096）是修正参数，ADre*（VREF/4096）得到实际的参考电压值比较接近 VREFINT，VREFINT 是校准电压值，VREFINT/（ADre*（VREF/4096）是约等于 1 的一个修正值。 – **个人理解**

公式简化后：

Vchx = VREFINT*（ADchx/ADre）

该式计算得到的值是该通道的实际电压值。  
注意：上面的方法针对 F1 芯片只给了参考电压的范围，没有提供出厂校准值的情况，下面将介绍提供了校准值的情况。

![](https://img-blog.csdnimg.cn/2021060417150718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70)  
VREFINT_CAL 是芯片出厂时厂家测量出来的参考电压值固化在 flash 中，U16 两个字节，可以作为基准电压。使用时读出即可。该值不是所有系列芯片都有，F103 貌似都没有，下图是 L475 的（注意不同芯片该值保存的地址不一致）：  
![](https://img-blog.csdnimg.cn/2021060417173813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70)  
上图表示，厂家在 30 度左右环境温度下，VDDA 和参考电压等于 3.0V 的状态下，通过 ADC 通道读出的参考电压值，保存在 0x1FFF75AA 开始地址的 2 个字节中。如何读取示例：VREFINT_CAL = *(u16*)0x1FFF75AA，笔者手里的 L475 读出来是 0x067F，换算 3.0*(0x067F/4095)=1.218315，接近 1.20 了。

我们重点关注这个公式：  
![](https://img-blog.csdnimg.cn/20210604172600379.png)  
VREFINT_CAL：内部参考电压校准值，直接地址读取。比如该款芯片地址：0x1FFF75AA，那么我们可以这么做：  
VREFINT_CAL = *(__IO uint16_t *)(0x1FFF75AA);

FULL_SCALE：根据我们设置的 ADC 分辨率而定，12 位 ADC 分辨率值：2^12 - 1 = 4096 - 1

VREFINT_DATA：从 ADC_17 通道读出实际内部参考电压值

ADCx_DATA：需要测试的电压通道读值  
**注意：公式中的 3.0V 有时可能是 3.3V，取决于厂家给的校准值是在 3.0V 条件下测试还是 3.3V 或是其他。**

**推导过程**：  
第一个公式 VDDA = 3.0V x VREFINT_CAL / VREFINT_DATA 这个公式是怎么来的呢？  
ST 厂商 通过配置将 VREFINT 连接到 ADC 后，则有：VREFINT = 3.0V * (VREFINT_CAL / 4095); VREFINT_CAL 就是校准条件下的 ADC 采样值 (校准条件就是指 VDDA=Vref+=3.0V，环境温度 30 度)，采到的 VREFINT_CAL 值写入到 flash。  
我们自己通过配置将 VREFINT 连接到 ADC：VREFINT = VDDA * (VREFINT_DATA / 4095);  
因此，VDDA * (VREFINT_DATA / 4095) = 3.0 * (VREFINT_CAL / 4095);  
VDDA = 3.0V x VREFINT_CAL / VREFINT_DATA

**VDDA 是这个公式中的重点，我们常规的算法直接用 3.3V 作为 VDDA 计算才导致了误差，因为 VDDA 有误差不是刚好 3.3V。**

第二个公式 Vchannalx=VDDA*（ADCx_DATA/FULL_SCALE）  
这个公式很好理解，就是我们常用的计算电压方式，ADCx_DATA 是读出的采样值，如：3.3*(1650/4095)

上面两式联立就能得出最后的公式。

前面讲过的 Vchx = Vrefint * (ADchx/ADrefint)，Vrefint=1.20V  
实际上就是 Vchannelx = （3.0xVrefint/FULL_SCALE）*（ADCx_DATA/VREFINT_DATA），其中（3.0xVrefint/FULL_SCALE）=1.20V

下面是使用 stm32f103 标准库的内部参考电压示例代码：

```
static	u16 adcSampleValue[2];
void  Adc_Init(void)
{ 	
	GPIO_InitTypeDef GPIO_InitStructure;
	DMA_InitTypeDef DMA_InitStructure;	
    ADC_InitTypeDef ADC_InitStructure; 
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC |RCC_APB2Periph_ADC1, ENABLE );	  //使能ADC1通道时钟
 
	RCC_ADCCLKConfig(RCC_PCLK2_Div6);   //设置ADC分频因子6 72M/6=12,ADC最大时间不能超过14M

	//PC1 作为模拟通道输入引脚                         
	GPIO_InitStructure.GPIO_Pin = GPIO_Pin_1;
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AIN;		//模拟输入引脚
	GPIO_Init(GPIOC, &GPIO_InitStructure);	

	ADC_DeInit(ADC1);  //复位ADC1 

	ADC_Cmd(ADC1, DISABLE); 
	DMA_Cmd(DMA1_Channel1, DISABLE);
	ADC_DMACmd(ADC1, DISABLE);
	ADC_DeInit(ADC1);
	DMA_DeInit(DMA1_Channel1);
	
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1, ENABLE);	                   // 使能 ADC1  通道时钟.
	RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);
	RCC_ADCCLKConfig(RCC_PCLK2_Div8);                                          // 设置ADC分频因子6 72M/6=12,ADC最大时间不能超过14M.

	//* PC0 作为模拟通道输入引脚.

	DMA_InitStructure.DMA_PeripheralBaseAddr = (u32)&ADC1->DR;
	DMA_InitStructure.DMA_MemoryBaseAddr = (u32)&adcSampleValue;
	DMA_InitStructure.DMA_DIR = DMA_DIR_PeripheralSRC;
	DMA_InitStructure.DMA_BufferSize = 2;
	
	DMA_InitStructure.DMA_PeripheralInc = DMA_PeripheralInc_Disable;
	DMA_InitStructure.DMA_MemoryInc = DMA_MemoryInc_Enable;
	DMA_InitStructure.DMA_PeripheralDataSize = DMA_PeripheralDataSize_HalfWord;
	DMA_InitStructure.DMA_MemoryDataSize = DMA_MemoryDataSize_HalfWord;
	DMA_InitStructure.DMA_Mode = DMA_Mode_Circular;
	DMA_InitStructure.DMA_Priority = DMA_Priority_High;
	DMA_InitStructure.DMA_M2M = DMA_M2M_Disable;
	DMA_Init(DMA1_Channel1, &DMA_InitStructure);
	
	ADC_InitStructure.ADC_Mode = ADC_Mode_Independent;	                       // ADC工作模式:ADC1和ADC2工作在独立模式.
	ADC_InitStructure.ADC_ScanConvMode = ENABLE;	                           // 模数转换工作在单通道模式.
	ADC_InitStructure.ADC_ContinuousConvMode = ENABLE;	                       // 模数转换工作在单次转换模式.
	ADC_InitStructure.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;	       // 转换由软件而不是外部触发启动.
	ADC_InitStructure.ADC_DataAlign = ADC_DataAlign_Right;	                   // ADC数据右对齐.
	ADC_InitStructure.ADC_NbrOfChannel = 2;	                                   // 顺序进行规则转换的ADC通道的数目.
	ADC_Init(ADC1, &ADC_InitStructure);	                                       // 根据ADC_InitStruct中指定的参数初始化外设ADCx的寄存器.   

	ADC_RegularChannelConfig(ADC1, ADC_Channel_11, 1, ADC_SampleTime_55Cycles5);	//ADC1,ADC通道,采样时间为239.5周期	  			    
	ADC_RegularChannelConfig(ADC1, ADC_Channel_17, 2, ADC_SampleTime_55Cycles5);	//ADC1,ADC通道,采样时间为239.5周期	  			    
	ADC_DMACmd(ADC1, ENABLE);
	
	ADC_Cmd(ADC1, ENABLE);	                                                   // 使能指定的 ADC1.
	
	ADC_ResetCalibration(ADC1);	                                               // 使能复位校准 . 
	while (ADC_GetResetCalibrationStatus(ADC1));	                           // 等待复位校准结束.
	ADC_StartCalibration(ADC1);	                                               // 开启AD校准.
	while (ADC_GetCalibrationStatus(ADC1));	                                   // 等待校准结束.
	ADC_SoftwareStartConvCmd(ADC1, ENABLE);		//使能指定的ADC1的软件转换启动功能	
	DMA_Cmd(DMA1_Channel1, ENABLE);
	ADC_TempSensorVrefintCmd(ENABLE);//打开内部参照电压
}

int main(void)
{
	delay_init();
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
	uart_init(115200);
	Adc_Init();

	while(1)
	{
		printf("%fV\r\n",(float)1.20*((float)adcSampleValue[0]/adcSampleValue[1]));
		delay_ms(250);
	}
}

```

不同于普通 ADC DMA 采样例程的关键操作是 ADC_TempSensorVrefintCmd(ENABLE);// 打开内部参照电压

```
/**
  * @brief  Enables or disables the temperature sensor and Vrefint channel.
  * @param  NewState: new state of the temperature sensor.
  *   This parameter can be: ENABLE or DISABLE.
  * @retval None
  */
void ADC_TempSensorVrefintCmd(FunctionalState NewState)
{
  /* Check the parameters */
  assert_param(IS_FUNCTIONAL_STATE(NewState));
  if (NewState != DISABLE)
  {
    /* Enable the temperature sensor and Vrefint channel*/
    ADC1->CR2 |= CR2_TSVREFE_Set;
  }
  else
  {
    /* Disable the temperature sensor and Vrefint channel*/
    ADC1->CR2 &= CR2_TSVREFE_Reset;
  }
}


```

该函数操作的寄存器：  
![](https://img-blog.csdnimg.cn/20210607162107645.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70)

[stm32 精确电压测量法（内部参考电压）](https://blog.csdn.net/qq_34672688/article/details/91874371)

[STM32 之十 供电系统及内部参照电压（VREFINT）使用及改善 ADC 参考电压](https://itexp.blog.csdn.net/article/details/85158025)

[STM32 之 ADC(内部基准电压，参考电压）](https://www.cnblogs.com/jieruishu/p/9023811.html)

[https://www.pianshen.com/article/87041274716/](https://www.pianshen.com/article/87041274716/)

[https://www.stmcu.org.cn/module/forum/forum.php?mod=viewthread&tid=627904](https://www.stmcu.org.cn/module/forum/forum.php?mod=viewthread&tid=627904)

[https://www.amobbs.com/thread-5607464-1-1.html](https://www.amobbs.com/thread-5607464-1-1.html)

# references
https://blog.csdn.net/weixin_44788542/article/details/117560519
