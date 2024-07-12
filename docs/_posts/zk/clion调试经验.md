---
title: clion调试经验
date: 2024-03-14 20:04:54
permalink: /pages/2c216a/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-03-08 16:30  
Status: #idea  
Tags:[[clion]][[C语言]]  

---

# clion调试经验
- 问题：在while循环外的断点无效，似乎是启动一段时间后才启用断点功能
- 使用DMA时会出现无限进入中断的情况，原因是使用了循环采样模式，同时开启了中断，会不断进行中断函数
# references