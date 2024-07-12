---
title: c++语言中inline关键字的用法
date: 2023-12-19 15:02:44
permalink: /pages/45ad13/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-11-25 21:47  
Status: #idea  
Tags: [[c++]]

---

# c++语言中inline关键字的用法
inline关键字在很多教程中都是说是对代码进行内联优化，但这对编译器来说并不是强制性的，所以在c++11中有了新的特性，即对唯一性原则的特例使用，当在多个文件中定义相同名字的变量时，或在被多个文件引用的一个头文件中定义的变量中，不使用`extern`关键字，使用`inline`来实现效果，如果多个文件中都同时在声明时赋值，则变量的实际取值是随机的。
# references
[【C++辟谣】inline关键字的作用是“内联优化”？你可能是谭浩强的受害者！inline真正的用途是..._哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Mg4y1d79w/?spm_id_from=333.999.0.0)