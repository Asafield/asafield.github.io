---
title: c语言中的命令行参数
date: 2023-12-19 15:02:44
permalink: /pages/965b0e/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-12-16 16:39  
Status: #idea  
Tags: [[c语言]] 

---

# c语言中的命令行参数
```c
int main(int argc, char ** argv){
}
```
- `int argc` : argument count
- `char ** argv`: argument vector :
	- argv\[0]: the name of the program: eg: input `./a.out`，the argv\[0] is"./a.out \\0"
	- argv\[1] - argv\[argc - 1]: other arguments in order

一个特殊的函数：
`getopt`: c中的一个库函数，解析命令行参数，
# references