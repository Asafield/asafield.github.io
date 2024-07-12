---
title: C语言中的 _I _O _IO的用法
date: 2024-03-14 20:04:54
permalink: /pages/cb233e/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
__I、 __O 、__IO是什么意思？ 
这是ST库里面的宏定义，定义如下：

#define     __I       volatile const        /*!< defines 'read only' permissions      */
#define     __O     volatile                  /*!< defines 'write only' permissions     */
#define     __IO    volatile                  /*!< defines 'read / write' permissions   */
显然，这三个宏定义都是用来替换成 volatile 和 const 的，所以我们先要了解 这两个关键字的作用：

volatile 
简单的说，就是不让编译器进行优化，即每次读取或者修改值的时候，都必须重新从内存中读取或者修改。

一般说来，volatile用在如下的几个地方：
1、中断服务程序中修改的供其它程序检测的变量需要加volatile；
2、多任务环境下各任务间共享的标志应该加volatile；
3、存储器映射的硬件寄存器通常也要加volatile说明，因为每次对它的读写都可能由不同意义；
我认为这是区分C程序员和嵌入式系统程序员的最基本的问题。搞嵌入式的家伙们经常同硬件、中断、RTOS等等打交道，所有这些都要求用到 volatile变量。不懂得volatile的内容将会带来灾难。假设被面试者正确地回答了这是问题（嗯，怀疑是否会是这样），我将稍微深究一下，看一下这家伙是不是直正懂得volatile完全的重要性。 
1)一个参数既可以是const还可以是volatile吗？解释为什么。 
2); 一个指针可以是volatile 吗？解释为什么。 
3); 下面的函数有什么错误：

int square(volatile int *ptr)  
{   
    return *ptr * *ptr;  
}  
1)是的。一个例子是只读的状态寄存器。它是volatile因为它可能被意想不到地改变。它是const因为程序不应该试图去修改它。
2); 是的。尽管这并不很常见。一个例子是当一个中服务子程序修该一个指向一个buffer的指针时。
3) 这段代码有点变态。这段代码的目的是用来返指针*ptr指向值的平方，但是，由于*ptr指向一个volatile型参数，编译器将产生类似下面的代码：
int square(volatile int *ptr)  
{   
    int a,b;   
    a = *ptr;  
    b = *ptr;  
    return a * b;   
}  
由于*ptr的值可能被意想不到地该变，因此a和b可能是不同的。结果，这段代码可能返不是你所期望的平方值！正确的代码如下：

long square(volatile int *ptr)  
{   
    int a;   
    a = *ptr;  
    return a * a;   
}   
const 
只读变量，即变量保存在只读静态存储区。编译时，如何尝试修改只读变量，则编译器提示出错，就能防止误修改。 
const与define 
两者都可以用来定义常量，但是const定义时，定义了常量的类型，所以更精确一些（其实const定义的是只读变量，而不是常量）。#define只是简单的文本替换，除了可以定义常量外，还可以用来定义一些简单的函数，有点类似内置函数。const和define定义的常量可以放在头文件里面。（小注：可以多次声明，但只能定义一次）

const与指针    
int me;   
const int * p1=&me;           //p1可变，*p1不可变             const 修饰的是 *p1，即*p1不可变
int * const p2=&me;           //p2不可变，*p2可变             const 修饰的是 p2，即p2不可变
const int *const p3=&me;   //p3不可变，*p3也不可变       前一个const 修饰的是 *p3，后一个const 修饰的是p3，两者都不可变
前面介绍了 volatile 和 const 的用法，不知道大家了解了没？了解了后，下面的讲解就更加容易了： 
__I ：输入口。既然是输入，那么寄存器的值就随时会外部修改，那就不能进行优化，每次都要重新从寄存器中读取。也不能写，即只读，不然就不是输入而是输出了。 
__O ：输出口，也不能进行优化，不然你连续两次输出相同值，编译器认为没改变，就忽略了后面那一次输出，假如外部在两次输出中间修改了值，那就影响输出 
__IO：输入输出口，同上

为什么加下划线？

原因是：避免命名冲突 
一般宏定义都是大写，但因为这里的字母比较少，所以再添加下划线来区分。这样一般都可以避免命名冲突问题，因为很少人这样命名，这样命名的人肯定知道这些是有什么用的。 
经常写大工程时，都会发现老是命名冲突，要不是全局变量冲突，要不就是宏定义冲突，所以我们要尽量避免这些问题，不然出问题了都不知道问题在哪里。

# reference
https://blog.csdn.net/sinat_20265495/article/details/79535551