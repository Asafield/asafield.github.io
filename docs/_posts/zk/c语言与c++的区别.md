---
title: c语言与c++的区别
date: 2023-12-19 15:02:44
permalink: /pages/528dd5/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-11-08 21:38  
Status: #idea  
Tags: [[c语言]] [[c++]]

---

# c语言与c++的区别
在写代码的过程中，有时候需要将指针赋值为空指针，以防止野指针。在C中，都是使用NULL来实现的；在C++中，除了NULL之外，还提供了nullptr来进行定义。那么两者之间有什么区别呢，分别适用于什么类型的场景呢？


NULL在C/C++中的含义
NULL是一个宏定义，它的值是一个空指针常量，由实现来进行定义。C语言中常数0和(void*)0都是空指针常量；C++中常数0是，而(void*)0 不是。

那问题来了，为什么C中(void*)0是空指针常量，而C++中不是？

因为C语言中任何类型的指针都可以(隐式地)转换为void* 型，反过来也行；而C++中void* 型不能隐式地转换为别的类型指针(例如：int* p = (void*)0，使用C++编译器编译会报错)。

可以查看到NULL的宏定义内容：NULL在C和C++中的定义不同，C中NULL为（void * )0，而C++中NULL为整数0。

[【C++】NULL和nullptr的关联与差别_c++ null和nullptr的区别-CSDN博客](https://blog.csdn.net/qq_38410730/article/details/105183769)