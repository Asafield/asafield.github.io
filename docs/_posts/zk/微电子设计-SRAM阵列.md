---
title: 微电子设计-SRAM阵列
date: 2023-12-19 15:02:44
permalink: /pages/18e21f/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-26 18:58  
Status: #idea  #class 
Tags: 

---

# 微电子设计-SRAM阵列
## 测试方案
**测试步骤：** 
- 写入信号：
	- 片选信号`w1`到`w4`进行行选择，`D1`到`D4`进行信号的写入，且此时`WR_EN`t处于高电平，表示写使能。同时此时`SZ`处于高电平。
- 读出信号：
	- 片选信号`w1`到`w4`进行行选择，`RD_EN`使能信号读出。同时此时`SZ`处于高电平。读出的信号会通过`Do`进行输出。


通过波形图表示：
- 4选1的信号与读的信号相关，需要在一个读的周期内实现依次选中输出四个被读的信号，以下是读的信号RD的设置：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230409195307.png)
	有结果如下：
	![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230409203446.png)
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230409210258.png)

- [x] 摘要修改 ✅ 2023-04-19
- [x] 图片修改-图1 ✅ 2023-04-19
- [x] 图片修改-图2.1 ✅ 2023-04-19

$$
\begin{align}
D_{1}= \bar{A_0}\bar{A_1}\\
D_{2}= A_0\bar{A_1}\\
D_{3}= \bar{A_0}A_1\\
D_{4}= A_0A_1
\end{align}
$$

$$
\begin{align}
Q = \bar{\bar {A\bar{a}\bar{b}} }

\\
D_{1}= \bar{A_0}\bar{A_1}\\
D_{2}= A_0\bar{A_1}\\
D_{3}= \bar{A_0}A_1\\
D_{4}= A_0A_1
\end{align}
$$
# references