---
title: c语言问题
date: 2023-12-19 15:02:44
permalink: /pages/3ea629/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-08-04 21:43  
Status: #idea  
Tags: 

---

# c语言问题
- [ ] 这里的`void (*f[3])(int) = {function1, function2, function3};`没有理解
```c
#include<stdio.h>
void function1(int);
void function2(int);
void function3(int);

int main(){
    void (*f[3])(int) = {function1, function2, function3};
    //f是一个数组，该数组的成员都是指针变量，
    // 这三个指针变量都分别指向需要int参数的三个函数
    int choice;
    printf("请输入一个数，范围[0-2]:");
    scanf("%d",&choice);

    while(choice >= 0 && choice < 3){
        (*f[choice])(choice); //调用相应的函数
        //(f[choice])(choice)这种也支持
        printf("请输入一个数，范围[0-2]:");
        scanf("%d",&choice);
    }

    printf("程序运行结束");
    return 0;
}

void function1(int choice){
    printf("输入了%d，运行了function1函数\n",choice);
}
void function2(int choice){
    printf("输入了%d，运行了function2函数\n",choice);
}
void function3(int choice){
    printf("输入了%d，运行了function3函数\n",choice);
}

```
# references
[【C】函数指针——定义一个函数指针数组_Pioneer_0619的博客-CSDN博客](https://blog.csdn.net/l634007854/article/details/120884089)