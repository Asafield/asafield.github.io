---
title: c语言中的strtok函数
date: 2024-02-27 20:38:44
permalink: /pages/b84cb9/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
tags: [[C语言]]

- strtok会将传入的字符串中的分配符进行替换为null(\\0)
- strok返回的指针指向原字符串的某个标记调用的起始位置
- 分配字符串可以第一次直接传完,每次传入不同字符串可能会产生错误
```c
#include "stdio.h"
#include <string.h>
void testreturn(){
  char line[] ="\thello world\n";//strtok函数对制表符进行了替换,在printf时遇到了\0,因些出现了错误,如果制表符前面有值就不会出现这种情况,即使有字符串中有连续的分隔符也不会出错
  char *token;
  token = strtok(line,"\t");
  token = strtok(NULL,"\n");
  printf("%s\n",token);
}
int main(){
  printf("--------------------------------------------\n");
  testreturn();
  return 0;
}
```
## reference
man strtok