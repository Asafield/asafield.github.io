---
title: java中方法的static方法
date: 2023-12-19 15:02:44
permalink: /pages/b07410/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-19 19:20  
Status: #notes 
Tags: [[java]]

---

# java中方法的static方法
更深层次的理解如下  
首先要知道的是： 静态的方法可以在没有创建实例时使用,而申明为非静态的成员变量是一个对象属性,它只有在对象存在时引用,因此如果在对象未创建实例时我们在静态方法中调用了非静态成员方法自然是非法的，所以会报错。
# references
[Java无法从静态上下文中引用非静态方法_Xu_Lisa的博客-CSDN博客](https://blog.csdn.net/qq_43228135/article/details/83106716)