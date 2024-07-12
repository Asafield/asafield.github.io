---
title: c语言中的错误检测
date: 2023-12-19 15:02:44
permalink: /pages/91f4d8/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-09-27 10:59  
Status: #idea  
Tags:[[C语言]] [[错误检测]] [[gcc]]

---

# c语言中的错误检测
在使用gcc进行编译时，可以使用一些命令参数进行更详细的错误检测：
```
Wall -Wsign-compare -Wwrite-strings -Wtype-limits -Werror
```
此外，还有`-fsanitize=address`可以检测一些额外的问题，但检测的方式可能会与`valgrind`冲突，两个方法推荐分别单独进行检测。
# references