---
title: c++常用算法技巧
date: 2024-04-19 16:56:46
permalink: /pages/ecd5e3/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-03-30 13:37  
Status: #idea  
Tags: [[c++]]  

---

# c++常用算法技巧

## 常用的轮子
- 对容器内的元素位置进行反向排序，传入两个迭代器参数（begin(),end()）。
	- 不可用于set这类会自动排序的容器
	- 时间复杂度：对于vector这类内部连续的容器，可以在常数时间内完成(O(1))，而对于链表等类型的容器，reverse的时间复杂度是线性的
	- 空间复杂度：O(1)
# references