---
title: c语言中的函数指针
date: 2023-12-19 15:02:44
permalink: /pages/26e385/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-12-06 18:03  
Status: #idea  
Tags: [[c语言]]

---

# c语言中的函数指针
- 函数名是指向该函数中第一条指令的指针
- 所以函数名可以用来初始化函数指针
- 作为函数参数或者变量声明时：
```c
void doToAll(int *data,int n ,int(* f)(int)){
	for(int i = 0; i < n; i++){
		data[i] = f(data[i]);
	}
}
int (* f)(int) = doToAll;
```
- 使用typedef: 与其他类型相比，它的语法更类似于函数声明
```c
typedef int(*int_function_t)(int)
int_function_t f = doToAll;
```
- 使用&符号来操作：
例如_doToAll (array1, n1, &inc_)。这种语法是合法的，但&是多余的，就像数组的名称一样--函数的名称已经是一个指针了。需要注意的是，如果我们有一个函数指针，而不是函数名（即一个变量或参数），那么我们可以使用该变量的地址，从而得到一个指向函数指针的指针。在后一种情况下，最好只使用 address-of 操作符，不过这种情况很少出现。
# references
[函数指针基础知识 | Coursera](https://www.coursera.org/learn/pointers-arrays-recursion/supplement/bO3aj/function-pointer-basics)