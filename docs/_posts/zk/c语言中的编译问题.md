---
title: c语言中的编译问题
date: 2023-12-19 15:02:44
permalink: /pages/8820f0/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-11-05 19:28  
Status: #idea  
Tags: [[c语言]]

---

# c语言中的编译问题
在c语言中，为了防止同一个头文件被同时多次包含，会使用：
```c
#ifndef xx
#define xx 
...
#endif
```
来避免该问题，在头文件的开头，使用“#ifndef”关键字，判断标号“__LED_H”是否被定义，若没有被定义，则从“#ifndef”至“#endif”关键字之间的内容都有效， 也就是说，这个头文件若被其它文件“#include”，它就会被包含到其该文件中了，且头文件中紧接着使用“#define”关键字定义上面判断的标号“__LED_H”。 当这个头文件被同一个文件第二次“#include”包含的时候， 由于有了第一次包含中的“#define __LED_H”定义，这时再判断“#ifndef __LED_H”， 判断的结果就是假了，从“#ifndef”至“#endif”之间的内容都无效，从而防止了同一个头文件被包含多次， 编译时就不会出现“redefine（重复定义）”的错误了。

一般来说，我们不会直接在C的源文件写两个“#include”来包含同一个头文件，但可能因为头文件内部的包含导致重复， 这种代码主要是避免这样的问题。如“bsp_led.h”文件中使用了“#include “stm32F407xx.h” ”语句，按习惯， 可能我们写主程序的时候会在main文件写“#include “bsp_led.h” 及#include “stm32F407xx.h””， 这个时候“stm32F407xx.h”文件就被包含两次了，如果没有这种机制，就会出错。
# references