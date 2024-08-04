(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{434:function(n,t,s){"use strict";s.r(t);var e=s(8),a=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("create date: 2024-01-26 16:02"),t("br"),n._v("\nStatus: #idea"),t("br"),n._v("\nTags: [[嵌入式]] [[stm32]]")]),n._v(" "),t("hr"),n._v(" "),t("h1",{attrs:{id:"stm32中的各种电压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stm32中的各种电压"}},[n._v("#")]),n._v(" stm32中的各种电压")]),n._v(" "),t("p",[n._v("附带记录VDD、VDDA，VBAT，VREF的区别\nMCU 的参考手册都会有一章节单独介绍 MCU 的电源管理，针对不同的 MCU（封装不同等）其外部电源如何连接也是有要求的，我们在 MCU 上一般都会发现如下引脚（注意不同 MCU 是有区别的）：")]),n._v(" "),t("p",[n._v("VDD / VSS: VDD is the external power supply for the I/Os, the internal regulator and the system analog such as reset, power management and internal clocks. It is provided externally through VDD pins.")]),n._v(" "),t("p",[n._v("VDDA / VSSA: VDDA 是A/D转换器，D/A 转换器，参考电压缓冲器，运算放大器和比较器的外部模拟电源。 VDDA 电压电平与 VDD 电压无关。 不使用这些外设时，最好将 VDDA 连接到 VDD。")]),n._v(" "),t("p",[n._v("VBAT： 当不存在 VDD 时，VBAT 是 RTC，外部时钟 32kHz 振荡器和备用寄存器（通过电源开关）的电源。 对于没有专用引脚的小型封装，VBAT内部连接到了 VDD")]),n._v(" "),t("p",[n._v("VREF+ / VREF-： VREF+ 是 ADC 和 DAC 的输入参考电压。 使能后，它也是内部参考电压缓冲器的输出。当不使用 ADC 和 DAC 时，VREF+ 可以接地。VRE- 必须始终等于 VSSA。\nVREF- 和 VREF+ 引脚并非在所有封装中都可用。 如果封装上未提供它们，则它们在 MCU 内部分别与 VSSA 和 VDDA 相连, 也有说是与vcc相连")]),n._v(" "),t("h2",{attrs:{id:"【问题背景】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【问题背景】"}},[n._v("#")]),n._v(" 【问题背景】")]),n._v(" "),t("p",[n._v("在使用 "),t("a",{attrs:{href:"https://so.csdn.net/so/search?q=ADC&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[n._v("ADC"),t("OutboundLink")],1),n._v(" 时，通常的用法是 Vref + 接电源 VDD3.3V，然后计算时直接用 3.3V 做参考电压，但是这种方法忽略了一些情况如供电电压有可能随外部一些其他用电器工作使用的大电流而导致电压不稳定，还有可能 MCU 供电 LDO 转换的精度个别偏差较大。这时候依然用 3.3V 的定值做参考电压计算显然得出的值就会出现与实际电压偏差较大的问题。")]),n._v(" "),t("p",[t("strong",[n._v("附带记录 VDD、VDDA，VBAT，VREF 的区别")]),t("br"),n._v("\nMCU 的参考手册都会有一章节单独介绍 MCU 的电源管理，针对不同的 MCU（封装不同等）其外部电源如何连接也是有要求的，我们在 MCU 上一般都会发现如下引脚（注意不同 MCU 是有区别的）：")]),n._v(" "),t("p",[n._v("VDD / VSS: VDD is the external power supply for the I/Os, the internal regulator and the system analog such as reset, power management and internal clocks. It is provided externally through VDD pins.")]),n._v(" "),t("p",[n._v("VDDA / VSSA: VDDA 是 A/D 转换器，D/A 转换器，参考电压缓冲器，运算放大器和比较器的外部模拟电源。 VDDA 电压电平与 VDD 电压无关。 不使用这些外设时，最好将 VDDA 连接到 VDD。")]),n._v(" "),t("p",[n._v("VBAT： 当不存在 VDD 时，VBAT 是 RTC，外部时钟 32kHz 振荡器和备用寄存器（通过电源开关）的电源。 对于没有专用引脚的小型封装，VBAT 内部连接到了 VDD")]),n._v(" "),t("p",[n._v("VREF+ / VREF-： VREF+ 是 ADC 和 DAC 的输入参考电压。 使能后，它也是内部参考电压缓冲器的输出。当不使用 ADC 和 DAC 时，VREF+ 可以接地。VRE- 必须始终等于 VSSA。"),t("br"),n._v("\nVREF- 和 VREF+ 引脚并非在所有封装中都可用。 如果封装上未提供它们，则它们在 MCU 内部分别与 VSSA 和 VDDA 相连。")]),n._v(" "),t("p",[n._v("【解决方案】"),t("br"),n._v("\n一般 100 脚以上的 STM32 MCU 都有 VREF 引脚。对于 100 脚以下的芯片，STM32 没有把 VREF 引脚引出来，而是直接在内部连接到了 VDDA 引脚。这样就导致了 ADC 的供电电源和参考电源实际是一个。通常项目中我们 VDDA 也是连接到了 VDD。"),t("br"),n._v("\n如果有 VREF 引脚，可以在 VREF 上接一个稳定且精度高的电压作为参考电压。")]),n._v(" "),t("p",[n._v("还有一种方法是启用内部参考电压。"),t("br"),n._v("\n根据 STM32f10xCDE 数据手册中的数据，这个参照电压的典型值是 1.20V，最小值是 1.16V，最大值是 1.24V（-40~85 度）。这个电压基本不随外部供电电压的变化而变化。"),t("br"),n._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210604160449513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70",alt:""}})]),n._v(" "),t("p",[n._v("不同的芯片这个参考电压的范围不一样，如下面这个（STM32L475 datasheet）："),t("br"),n._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210604160049842.png",alt:""}}),t("br"),n._v("\n很明显，如果以这个为参考电压，我们也得测量其值，因为它对于不同的芯片是一个范围，并不是确定值。 STM32 可以通过配置将 VREFINT 接入到 ADC 内部的通道 17，然后我们就可以像测试普通的通道一样测量 VREFINT 到底是多少。注意 MCU 不同 具体连接的 ADC 通道也是不同的。"),t("br"),n._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210604163616104.png",alt:""}})]),n._v(" "),t("p",[n._v("具体方法是在测量某个通道的电压值之前，先读出参照电压的 ADC 测量数值 (即从 ADC1_IN17 读出的值)，记为 ADrefint；再读出要测量通道的 ADC 转换数值，记为 ADchx；则要测量的电压为：")]),n._v(" "),t("p",[n._v("Vchx = Vrefint * (ADchx/ADrefint)")]),n._v(" "),t("p",[n._v("其中 Vrefint 为参照电压 = 1.20V（STM32F10x）。")]),n._v(" "),t("p",[n._v("推导过程：")]),n._v(" "),t("p",[n._v("Vchx = VREFINT* (（（ADchx*（VREF/4096））/（ADre*（VREF/4096））)")]),n._v(" "),t("p",[n._v("注：VREFINT=1.2V（这里取 1.20V 实际上会有误差），VREF 为参考电压值 = 3.3V"),t("br"),n._v("\n此公式可以理解为：（ADchx*（VREF/4096）是正常计算的含误差电压值，VREFINT/（ADre*（VREF/4096）是修正参数，ADre*（VREF/4096）得到实际的参考电压值比较接近 VREFINT，VREFINT 是校准电压值，VREFINT/（ADre*（VREF/4096）是约等于 1 的一个修正值。 – "),t("strong",[n._v("个人理解")])]),n._v(" "),t("p",[n._v("公式简化后：")]),n._v(" "),t("p",[n._v("Vchx = VREFINT*（ADchx/ADre）")]),n._v(" "),t("p",[n._v("该式计算得到的值是该通道的实际电压值。"),t("br"),n._v("\n注意：上面的方法针对 F1 芯片只给了参考电压的范围，没有提供出厂校准值的情况，下面将介绍提供了校准值的情况。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021060417150718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70",alt:""}}),t("br"),n._v("\nVREFINT_CAL 是芯片出厂时厂家测量出来的参考电压值固化在 flash 中，U16 两个字节，可以作为基准电压。使用时读出即可。该值不是所有系列芯片都有，F103 貌似都没有，下图是 L475 的（注意不同芯片该值保存的地址不一致）："),t("br"),n._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021060417173813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70",alt:""}}),t("br"),n._v("\n上图表示，厂家在 30 度左右环境温度下，VDDA 和参考电压等于 3.0V 的状态下，通过 ADC 通道读出的参考电压值，保存在 0x1FFF75AA 开始地址的 2 个字节中。如何读取示例：VREFINT_CAL = "),t("em",[n._v("(u16")]),n._v(")0x1FFF75AA，笔者手里的 L475 读出来是 0x067F，换算 3.0*(0x067F/4095)=1.218315，接近 1.20 了。")]),n._v(" "),t("p",[n._v("我们重点关注这个公式："),t("br"),n._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210604172600379.png",alt:""}}),t("br"),n._v("\nVREFINT_CAL：内部参考电压校准值，直接地址读取。比如该款芯片地址：0x1FFF75AA，那么我们可以这么做："),t("br"),n._v("\nVREFINT_CAL = *(__IO uint16_t *)(0x1FFF75AA);")]),n._v(" "),t("p",[n._v("FULL_SCALE：根据我们设置的 ADC 分辨率而定，12 位 ADC 分辨率值：2^12 - 1 = 4096 - 1")]),n._v(" "),t("p",[n._v("VREFINT_DATA：从 ADC_17 通道读出实际内部参考电压值")]),n._v(" "),t("p",[n._v("ADCx_DATA：需要测试的电压通道读值"),t("br"),n._v(" "),t("strong",[n._v("注意：公式中的 3.0V 有时可能是 3.3V，取决于厂家给的校准值是在 3.0V 条件下测试还是 3.3V 或是其他。")])]),n._v(" "),t("p",[t("strong",[n._v("推导过程")]),n._v("："),t("br"),n._v("\n第一个公式 VDDA = 3.0V x VREFINT_CAL / VREFINT_DATA 这个公式是怎么来的呢？"),t("br"),n._v("\nST 厂商 通过配置将 VREFINT 连接到 ADC 后，则有：VREFINT = 3.0V * (VREFINT_CAL / 4095); VREFINT_CAL 就是校准条件下的 ADC 采样值 (校准条件就是指 VDDA=Vref+=3.0V，环境温度 30 度)，采到的 VREFINT_CAL 值写入到 flash。"),t("br"),n._v("\n我们自己通过配置将 VREFINT 连接到 ADC：VREFINT = VDDA * (VREFINT_DATA / 4095);"),t("br"),n._v("\n因此，VDDA * (VREFINT_DATA / 4095) = 3.0 * (VREFINT_CAL / 4095);"),t("br"),n._v("\nVDDA = 3.0V x VREFINT_CAL / VREFINT_DATA")]),n._v(" "),t("p",[t("strong",[n._v("VDDA 是这个公式中的重点，我们常规的算法直接用 3.3V 作为 VDDA 计算才导致了误差，因为 VDDA 有误差不是刚好 3.3V。")])]),n._v(" "),t("p",[n._v("第二个公式 Vchannalx=VDDA*（ADCx_DATA/FULL_SCALE）"),t("br"),n._v("\n这个公式很好理解，就是我们常用的计算电压方式，ADCx_DATA 是读出的采样值，如：3.3*(1650/4095)")]),n._v(" "),t("p",[n._v("上面两式联立就能得出最后的公式。")]),n._v(" "),t("p",[n._v("前面讲过的 Vchx = Vrefint * (ADchx/ADrefint)，Vrefint=1.20V"),t("br"),n._v("\n实际上就是 Vchannelx = （3.0xVrefint/FULL_SCALE）*（ADCx_DATA/VREFINT_DATA），其中（3.0xVrefint/FULL_SCALE）=1.20V")]),n._v(" "),t("p",[n._v("下面是使用 stm32f103 标准库的内部参考电压示例代码：")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('static\tu16 adcSampleValue[2];\nvoid  Adc_Init(void)\n{ \t\n\tGPIO_InitTypeDef GPIO_InitStructure;\n\tDMA_InitTypeDef DMA_InitStructure;\t\n    ADC_InitTypeDef ADC_InitStructure; \n\tRCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOC |RCC_APB2Periph_ADC1, ENABLE );\t  //使能ADC1通道时钟\n \n\tRCC_ADCCLKConfig(RCC_PCLK2_Div6);   //设置ADC分频因子6 72M/6=12,ADC最大时间不能超过14M\n\n\t//PC1 作为模拟通道输入引脚                         \n\tGPIO_InitStructure.GPIO_Pin = GPIO_Pin_1;\n\tGPIO_InitStructure.GPIO_Mode = GPIO_Mode_AIN;\t\t//模拟输入引脚\n\tGPIO_Init(GPIOC, &GPIO_InitStructure);\t\n\n\tADC_DeInit(ADC1);  //复位ADC1 \n\n\tADC_Cmd(ADC1, DISABLE); \n\tDMA_Cmd(DMA1_Channel1, DISABLE);\n\tADC_DMACmd(ADC1, DISABLE);\n\tADC_DeInit(ADC1);\n\tDMA_DeInit(DMA1_Channel1);\n\t\n\tRCC_APB2PeriphClockCmd(RCC_APB2Periph_ADC1, ENABLE);\t                   // 使能 ADC1  通道时钟.\n\tRCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);\n\tRCC_ADCCLKConfig(RCC_PCLK2_Div8);                                          // 设置ADC分频因子6 72M/6=12,ADC最大时间不能超过14M.\n\n\t//* PC0 作为模拟通道输入引脚.\n\n\tDMA_InitStructure.DMA_PeripheralBaseAddr = (u32)&ADC1->DR;\n\tDMA_InitStructure.DMA_MemoryBaseAddr = (u32)&adcSampleValue;\n\tDMA_InitStructure.DMA_DIR = DMA_DIR_PeripheralSRC;\n\tDMA_InitStructure.DMA_BufferSize = 2;\n\t\n\tDMA_InitStructure.DMA_PeripheralInc = DMA_PeripheralInc_Disable;\n\tDMA_InitStructure.DMA_MemoryInc = DMA_MemoryInc_Enable;\n\tDMA_InitStructure.DMA_PeripheralDataSize = DMA_PeripheralDataSize_HalfWord;\n\tDMA_InitStructure.DMA_MemoryDataSize = DMA_MemoryDataSize_HalfWord;\n\tDMA_InitStructure.DMA_Mode = DMA_Mode_Circular;\n\tDMA_InitStructure.DMA_Priority = DMA_Priority_High;\n\tDMA_InitStructure.DMA_M2M = DMA_M2M_Disable;\n\tDMA_Init(DMA1_Channel1, &DMA_InitStructure);\n\t\n\tADC_InitStructure.ADC_Mode = ADC_Mode_Independent;\t                       // ADC工作模式:ADC1和ADC2工作在独立模式.\n\tADC_InitStructure.ADC_ScanConvMode = ENABLE;\t                           // 模数转换工作在单通道模式.\n\tADC_InitStructure.ADC_ContinuousConvMode = ENABLE;\t                       // 模数转换工作在单次转换模式.\n\tADC_InitStructure.ADC_ExternalTrigConv = ADC_ExternalTrigConv_None;\t       // 转换由软件而不是外部触发启动.\n\tADC_InitStructure.ADC_DataAlign = ADC_DataAlign_Right;\t                   // ADC数据右对齐.\n\tADC_InitStructure.ADC_NbrOfChannel = 2;\t                                   // 顺序进行规则转换的ADC通道的数目.\n\tADC_Init(ADC1, &ADC_InitStructure);\t                                       // 根据ADC_InitStruct中指定的参数初始化外设ADCx的寄存器.   \n\n\tADC_RegularChannelConfig(ADC1, ADC_Channel_11, 1, ADC_SampleTime_55Cycles5);\t//ADC1,ADC通道,采样时间为239.5周期\t  \t\t\t    \n\tADC_RegularChannelConfig(ADC1, ADC_Channel_17, 2, ADC_SampleTime_55Cycles5);\t//ADC1,ADC通道,采样时间为239.5周期\t  \t\t\t    \n\tADC_DMACmd(ADC1, ENABLE);\n\t\n\tADC_Cmd(ADC1, ENABLE);\t                                                   // 使能指定的 ADC1.\n\t\n\tADC_ResetCalibration(ADC1);\t                                               // 使能复位校准 . \n\twhile (ADC_GetResetCalibrationStatus(ADC1));\t                           // 等待复位校准结束.\n\tADC_StartCalibration(ADC1);\t                                               // 开启AD校准.\n\twhile (ADC_GetCalibrationStatus(ADC1));\t                                   // 等待校准结束.\n\tADC_SoftwareStartConvCmd(ADC1, ENABLE);\t\t//使能指定的ADC1的软件转换启动功能\t\n\tDMA_Cmd(DMA1_Channel1, ENABLE);\n\tADC_TempSensorVrefintCmd(ENABLE);//打开内部参照电压\n}\n\nint main(void)\n{\n\tdelay_init();\n\tNVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);\n\tuart_init(115200);\n\tAdc_Init();\n\n\twhile(1)\n\t{\n\t\tprintf("%fV\\r\\n",(float)1.20*((float)adcSampleValue[0]/adcSampleValue[1]));\n\t\tdelay_ms(250);\n\t}\n}\n\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br"),t("span",{staticClass:"line-number"},[n._v("74")]),t("br"),t("span",{staticClass:"line-number"},[n._v("75")]),t("br"),t("span",{staticClass:"line-number"},[n._v("76")]),t("br"),t("span",{staticClass:"line-number"},[n._v("77")]),t("br"),t("span",{staticClass:"line-number"},[n._v("78")]),t("br"),t("span",{staticClass:"line-number"},[n._v("79")]),t("br"),t("span",{staticClass:"line-number"},[n._v("80")]),t("br")])]),t("p",[n._v("不同于普通 ADC DMA 采样例程的关键操作是 ADC_TempSensorVrefintCmd(ENABLE);// 打开内部参照电压")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n  * @brief  Enables or disables the temperature sensor and Vrefint channel.\n  * @param  NewState: new state of the temperature sensor.\n  *   This parameter can be: ENABLE or DISABLE.\n  * @retval None\n  */\nvoid ADC_TempSensorVrefintCmd(FunctionalState NewState)\n{\n  /* Check the parameters */\n  assert_param(IS_FUNCTIONAL_STATE(NewState));\n  if (NewState != DISABLE)\n  {\n    /* Enable the temperature sensor and Vrefint channel*/\n    ADC1->CR2 |= CR2_TSVREFE_Set;\n  }\n  else\n  {\n    /* Disable the temperature sensor and Vrefint channel*/\n    ADC1->CR2 &= CR2_TSVREFE_Reset;\n  }\n}\n\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br")])]),t("p",[n._v("该函数操作的寄存器："),t("br"),n._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210607162107645.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDc4ODU0Mg==,size_16,color_FFFFFF,t_70",alt:""}})]),n._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_34672688/article/details/91874371",target:"_blank",rel:"noopener noreferrer"}},[n._v("stm32 精确电压测量法（内部参考电压）"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("a",{attrs:{href:"https://itexp.blog.csdn.net/article/details/85158025",target:"_blank",rel:"noopener noreferrer"}},[n._v("STM32 之十 供电系统及内部参照电压（VREFINT）使用及改善 ADC 参考电压"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/jieruishu/p/9023811.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("STM32 之 ADC(内部基准电压，参考电压）"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.pianshen.com/article/87041274716/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.pianshen.com/article/87041274716/"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.stmcu.org.cn/module/forum/forum.php?mod=viewthread&tid=627904",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.stmcu.org.cn/module/forum/forum.php?mod=viewthread&tid=627904"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.amobbs.com/thread-5607464-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.amobbs.com/thread-5607464-1-1.html"),t("OutboundLink")],1)]),n._v(" "),t("h1",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[n._v("#")]),n._v(" references")]),n._v(" "),t("p",[n._v("https://blog.csdn.net/weixin_44788542/article/details/117560519")])])}),[],!1,null,null,null);t.default=a.exports}}]);