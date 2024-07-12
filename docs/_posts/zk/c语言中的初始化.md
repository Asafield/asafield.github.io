---
title: c语言中的初始化
date: 2023-12-19 15:02:44
permalink: /pages/8caab1/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-09-27 10:42  
Status: #idea  
Tags: [[C语言]] [[初始化]] 

---

# c语言中的初始化
## int sum；在c语言中会自动初始化吗
在C语言中，变量在定义时如果没有显式赋初值，它们的初始值是不确定的。对于基本数据类型，如int、float、char等，如果没有显式初始化，它们的初始值通常是垃圾值。

对于全局变量和静态变量，在C语言中，它们会自动初始化为0。因此，如果将变量 `int sum;` 声明为全局变量或静态变量，在定义时它会自动初始化为0。

但对于局部变量（在函数内部定义的变量），如果没有显式初始化，它们的初始值是不确定的，可能是任意值。

为了避免使用未初始化的变量，应该在定义变量时显式地为其赋初值，以确保变量始终具有确定的值。例如，可以使用 `int sum = 0;` 来显式初始化变量 `sum`。这样可以避免使用未初始化变量引发的不可预测的行为和错误。
# references