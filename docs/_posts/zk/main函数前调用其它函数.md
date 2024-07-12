---
title: main函数前调用其它函数
date: 2024-03-14 20:04:54
permalink: /pages/08e125/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-03-07 20:11  
Status: #idea  
Tags: [[C语言]]

---

# main函数前调用其它函数
main函数是程序的入口，一般来说，不能在main函数之前调用其它函数 
但可以使用以下方法：
```c
#include "stdio.h"
void foo3()__attribute__((constructor));
int i = 1;
int main(){
  printf("the is in main\n");
  return 0;
}
void foo3(){
  printf("this is a test message\n");
}
```
besides, there is a another way invoke a function after the main funtion, that is use \_\_attribute\_\_((destructor))
# references