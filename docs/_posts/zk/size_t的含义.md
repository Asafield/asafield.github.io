---
title: size_t的含义
date: 2023-12-19 15:02:44
permalink: /pages/bff292/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-08-04 21:41  
Status: #idea  
Tags:  [c语言](c语言) 

---

# size_t的含义

一个基本的[无符号整数](https://baike.baidu.com/item/%E6%97%A0%E7%AC%A6%E5%8F%B7%E6%95%B4%E6%95%B0/9203544?fromModule=lemma_inlink)的C / C + +类型，它是[sizeof](https://baike.baidu.com/item/sizeof/6349467?fromModule=lemma_inlink)[操作符](https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C%E7%AC%A6/8978896?fromModule=lemma_inlink)返回的结果类型，该类型的大小可选择。因此，它可以存储在理论上是可能的任何类型的数组的最大大小。换句话说，一个指针可以被安全地放进为size_t类型（一个例外是类的[函数指针](https://baike.baidu.com/item/%E5%87%BD%E6%95%B0%E6%8C%87%E9%92%88/2674905?fromModule=lemma_inlink)，但是这是一个特殊的情况下）。 size_t类型通常用于循环、数组索引、大小的存储和地址运算。虽然size_t可以存储一个指针，它的目的是更好地使用另一个[unsigned](https://baike.baidu.com/item/unsigned/8604216?fromModule=lemma_inlink)整数类型uintptr_t。在某些情况下，使用size_t类型是更为有效，比习惯性使用无符号类型的程序会更安全。

size_t是在基于[无符号整数](https://baike.baidu.com/item/%E6%97%A0%E7%AC%A6%E5%8F%B7%E6%95%B4%E6%95%B0?fromModule=lemma_inlink)memsize类型的C / C + +的标准库中定义的。C语言中，此类型位于[头文件](https://baike.baidu.com/item/%E5%A4%B4%E6%96%87%E4%BB%B6/10978258?fromModule=lemma_inlink)[stddef.h](https://baike.baidu.com/item/stddef.h/860360?fromModule=lemma_inlink)中，而在C++中，则位于cstddef中。
# references