---
title: stm32启动文件的说明
date: 2023-12-19 15:02:44
permalink: /pages/de8103/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-21 12:18  
Status: #idea  
Tags:  [[嵌入式]] [[stm32]]

---

# stm32启动文件的说明
名为startup_stm32xxxxx.s的文件，它里边使用了汇编语言写好了基本程序，为c语言建立起运行环境。对于f4系列来说，该文件使用的汇编指令是Cortex-M4内核支持的指令，可从《Cortex-M4 Technical Reference Manual》查到，也可参考《Cortex-M3权威指南中文》，M3跟M4大部分汇编指令相同。其功能如下：
- 初始化堆栈指针SP
- 初始化程序计数器指针PC
- 设置堆、栈的大小
- 初始化中断向量表
- 配置外部SRAM作为数据存储器（这个由用户配置，一般的开发板没有外部SRAM）；
- 调用SystemInit()函数配置STM32的系统时钟
- 设置C库的分支入口 `" __main"`(最终用来调用main函数）

```c
 ;Reset handler

 Reset_Handler PROC

 EXPORT Reset_Handler [WEAK]

 IMPORT SystemInit

 IMPORT __main

 LDR R0, =SystemInit

 BLX R0

 LDR R0, =__main

     BX R0

     ENDP
```
我们需要在外部定义一个SystemInit函数设置STM32的时钟；STM32上电后，会执行SystemInit函数，最后执行我们C语言中的main函数。
- 当我们不配置系统时钟时，STM32芯片会自动将内部的高速时钟HIS（16M）作为系统时钟，程序还是能跑的，只是跑的比较慢（通常情况下， 我们会把系统时钟设置为168M，远远大于HIS的16M）。
# references