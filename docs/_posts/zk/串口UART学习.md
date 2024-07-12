---
title: 串口UART学习
date: 2023-12-19 15:02:44
permalink: /pages/8ac1f0/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-12-10 19:58  
Status: #idea  
Tags: [[嵌入式]] [[stm32]]

---

# 串口UART学习
## 物理层
以RS232为例：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231211114613.png)
其中由于RS232的电平标准与控制器不同，需要电平转换芯片：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231211114701.png)
DB9接口：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231211115012.png)
信号线：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231211115022.png)
如今：
一般只使用RXD、TXD以及GND三条线。其他的线路，如RTS、CTS、DTR、DSR、RI和CD，通常用于特定的功能，如流量控制、硬件握手和信号指示等。在某些情况下，这些额外的线路可能不被需要或被替代。
## 协议层
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231211122242.png)
### 波特率
在异步通讯中，没有同步的时钟信号，两个设备之间约定好的传输速率。更为具体的定义是每秒传输的码元数，每个码元可能表示一个或多个bit，当为一个bit，波特率就与比特率相等。在数字通信中，一个符号通常只能表示一个比特的信息，因此波特率和比特率通常是相等的。每个符号仅能携带固定数量的比特。如果要实现一个符号表示多个比特的传输，通常需要使用多级调制或复合调制技术。这些技术将多个低级调制方案组合在一起，以在一个符号中表示多个比特。这样可以提高数据传输速率，但通常会引入更高的复杂性和对信道质量的要求。
例如，16QAM（16-ary Quadrature Amplitude Modulation）是一种常见的多级调制技术。它将4个比特组合到一个符号中，每个符号可以表示16个不同的状态。在16QAM中，每个符号的振幅和相位都可以表示4个比特的组合。
另一个例子是64QAM（64-ary Quadrature Amplitude Modulation），它将6个比特组合到一个符号中，每个符号可以表示64个不同的状态。类似地，256QAM和更高阶的调制方案也存在，它们将更多的比特组合到一个符号中。
需要注意的是，随着调制阶数的增加，符号之间的差异变得更小，对信道质量和噪声容忍度的要求也更高。因此，在实际应用中，选择适当的调制方案需要综合考虑信道条件、噪声水平和系统复杂性等因素。
### 其它参数：
- 起始位
- 停止位 
- 有效数据长度
- 数据校验
一般选择：8位数据长度，1位停止位，无校验

## stm32中的USART
### 简介
- 有USART和UART两种，后者裁剪了同步功能
- 支持使用DMA实现调整数据通信
- 一般调试过程中，可以使用串口打印调试信息，很多时候会重写printf函数来实现该功能
### 功能框图
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231211124315.png)

# references
[20. USART—串口通讯 — [野火]STM32库开发实战指南——基于野火挑战者开发板 文档 (embedfire.com)](https://doc.embedfire.com/mcu/stm32/f429tiaozhanzhe/std/zh/latest/book/USART.html)