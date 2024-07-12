---
title: c语言中的变量初始化
date: 2023-12-19 15:02:44
permalink: /pages/4c211b/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-24 14:23  
Status: #idea  
Tags: [[c语言]]

---

# c语言中的变量初始化
在c语言中的全局变量静态变量都是会自动初始化为0的，堆和栈中的局部变量不会初始化而拥有不可预测的值。c++保证了所有对象与对象成员都会初始化，但其中基本数据类型的初始化还得依赖于构造函数。
# references
[C++手稿：哪些变量会自动初始化？ | Harttle Land](https://harttle.land/2015/10/05/cpp-variable-init.html)