---
title: adc采集电压研究
date: 2024-03-14 20:04:54
permalink: /pages/56c7ee/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-03-05 19:40  
Status: #idea  
Tags:[[嵌入式]] [[单片机]]

---

# adc采集电压研究
## 转换时间计算
在stm32中，adc的转换时间取决于其转换的采集周期，采集周期来源于adc的时钟源，由stm32手册可知，其时钟源最大频率为（对于stm32f1）为14MHz，也就是说采集周期最小是1/14us，而转换使用的采集周期计算方式为：
$$
T_{period}=12.5 + T_{sampleTime}
$$
## 使用裸机开发
### 使用中断实现对采集数据的处理
### 使用DMA请求的方式实现对采集数据的存储
对于单通道采样来说，是否有必要使用DMA呢？因为采集结果是存储在寄存器中，比起存储在DMA中，反正结果最后都是要被CPU读取并计算，似乎并没有本质的差别。
## 引入操作系统 
>在中断中进行数据的计算处理似乎会过多地占用资源，因此考虑使用操作系统进行处理



# references