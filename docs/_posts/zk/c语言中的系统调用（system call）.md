---
title: c语言中的系统调用（system call）
date: 2023-12-19 15:02:44
permalink: /pages/21bc5d/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-12-16 13:21  
Status: #idea  
Tags: [[操作系统]] [[c语言]]

---

# c语言中的系统调用（system call）
## 系统调用
c程序需要执行某些重要操作时，如写入文件、通过网络发送数据、从用户处读取输入等，尤其是与底层硬件交互的操作时，为了操作的安全性，保证该操作在程序应有的权限内执行，需要通过操作系统来执行，操作系统会自动检测其权限是否满足需求，然后完成操作并将结果返回给请求执行操作的程序。而这个程序请求操作系统代理执行的方式就是系统调用（system call）。

## 用户程序、c库、操作系统关系

![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231216162001.png)
## 系统调用失败报错
- 如果系统调用失败，在c库中的`wrapper`将设置一个全局变量，称为`errno`，其值在`errno.h`中有定义：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231216163044.png)
- 可以通过c库中的一个函数来对errno进行解析，输出错误值对应的含义（以字符串形式）
- 在使用、输出或查看errno的值之前，不要进行其它可能会产生系统调用错误的操作，例如`printf`。
# references