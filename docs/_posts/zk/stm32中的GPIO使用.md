---
title: stm32中的GPIO使用
date: 2023-12-19 15:02:44
permalink: /pages/aef2d8/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-21 11:39  
Status: #idea  
Tags: [[嵌入式]] [[stm32]]

---

# stm32中的GPIO使用
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231021113928.png)
需要明白：
1. stm32有保护二极管，但仍不能驱动太大功率的器件，如电机。
2. 输入：上拉和下拉的模式是决定了引脚默认状态的电压，消除引脚不定状态的影响
3. 输出：推挽和开漏：
	1. 推挽：pmos与nmos有相同的控制电压，类似一个附加了反向器的cmos结构，开关速度更快
	   ![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231021115216.png)

	2. 开漏：pmos的控制电压始终为低，处于关闭状态，输出电压由nmos控制，在低电压时输出为低，在高电平时，nmos关闭，输出为高阻态，且输出端口此时具有“线与” 的功能。在需要输出5v时可以在开漏模式中加上外部上拉电阻。
	![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231021115732.png)
- 为什么时gpio需要时钟，因为控制其功能需要使用很多寄存器，需要时钟控制进行写入与读出。
- 输出时钟的频率也会影响功耗
## GPIO寄存器的参数配置
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231021121625.png)

# references