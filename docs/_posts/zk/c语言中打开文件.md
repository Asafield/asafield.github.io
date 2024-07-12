---
title: c语言中打开文件
date: 2023-12-28 16:39:34
permalink: /pages/53edfa/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
tags: [[c语言]]
- 打开一个文件就是创建一个文件流，该文件流与文件相关联
- 文件流（FILE \*）就是一个数据队列。
- fopen函数的原型：
  ```c
FILE * fopen(const char * filename, const char * mode);  
```
