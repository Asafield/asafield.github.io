---
title: c语言中字符串指针返回值
date: 2024-02-27 20:34:31
permalink: /pages/eab520/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
tags:  [[C语言]]
- 在C语言中，`char* str = "hello, world"` 是一种定义字符指针的方式，并将其初始化为指向字符串字面值 `"hello, world"` 的首字符的地址。
	- 字面值存储在堆中,不可由str进行修改
	- 可以返回指针
- 在C语言中，`char str[] = "hello, world"` 是一种定义字符数组的方式，并将其初始化为字符串字面值 `"hello, world"`。
	- 这是将数组初始化,可以由str修改
	- 不能直接返回str,因为其数据存储在栈上,会随着函数的返回使得内存空间被释放