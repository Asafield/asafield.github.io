---
title: C语言中的宏
date: 2023-12-19 15:02:44
permalink: /pages/b6a612/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-09-25 23:39  
Status: #idea  
Tags: [[C语言]] [[编程]]

---

# C语言中的宏
## 两种类型
- 常量型
- 带参数型
无论是哪种类型，都是相当于在原位置上进行了替换操作，需要注意使用括号以防止意外情况

## c语言中的ANSI C 标准中的几个标准预定义宏
__LINE__：在源代码中插入当前源代码行号；

__FILE__：在源文件中插入当前源文件名；

__DATE__：在源文件中插入当前的编译日期；

__TIME__：在源文件中插入当前编译时间；

__STDC__：当要求程序严格遵循ANSI C标准时该标识被赋值为1；

__cplusplus：当编写C++程序时该标识符被定义。

# references