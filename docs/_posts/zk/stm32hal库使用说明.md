---
title: stm32hal库使用说明
date: 2023-12-19 15:02:44
permalink: /pages/a7fb8b/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-21 19:42  
Status: #idea  
Tags:   [[stm32]] [[嵌入式]]

---

# stm32hal库使用说明
- cmsis：为了解决不同的芯片厂商生产的Cortex微控制器软件 的兼容性问题， ARM与芯片厂商建立了CMSIS标准(Cortex MicroController Software Interface Standard）

![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231021194524.png)

- CMSIS标准中最主要的为CMSIS核心层，它包括了：
	- 内核函数层：其中包含用于访问内核寄存器的名称、地址定义，主要由ARM公司提供。
	- 设备外设访问层：提供了片上的核外外设的地址和中断定义，主要由芯片生产商提供。
 - 不同编译平台的启动文件是不同的，这说明keil的工程不能简单直接地迁移到clion下面，因为两者所用的启动文件是不同的？
 - 固件库：
	 - include文件夹：CMSIS标准的核内设备层的Cortex-M核通用的头文件，为那些采用Cortex-M核设计SOC的芯片商设计的芯片外设提供一个进入内核的接口，定义了一些内核相关的寄存器。
	 - device文件夹：具体芯片直接相关的文件，包含启动文件，芯片外设寄存器定义，系统时钟初始化的一些文件
	 - Hal_driver文件夹：是属于CMSIS之外、芯片片上外设部分的内容， 是ST公司针对每个STM32外设而编写的库函数文件，每个外设对应一个.c和.h文件。
	 - xx_it.c与比xx_hal_conf.h文件，前者专门用来编写中断服务函数。在我们修改前，这个文件已经定义了一些系统异常(特殊中断)的接口， 其它普通中断服务函数由我们自己添加。但是我们怎么知道这些中断服务函数的接口如何写？是不是可以自定义呢？答案当然不是的， 这些都有可以在汇编启动文件中找到。后者被stm32f429xx.h所包含（这里以429为例）,st的hal库支持所有STM32F4型号的芯片，但有的芯片外设功能比较多，所以使用这个配置文件根据芯片型号增减ST库的外设文件，另外，时钟源配置也是在这里进行设置。
# references