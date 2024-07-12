---
title: c语言中volatile关键字的用法
date: 2024-03-14 20:04:54
permalink: /pages/477348/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-08-22 15:20  
Status: #idea  
Tags: [[c语言]]

---

# c语言中volatile关键字的用法
- 存在一种编译优化的情况：在程序中，为了提高执行效率，会将存在内存中的变量“复制”在寄存器中，该技术称为高速缓存。但这种情况下，如果存在内存中的变量进行了某种变化，而这变化没有及时地加载到寄存器（高速缓存）中，就无法直接反映在高速缓存上，在ANSI C之前，为了预防这种情况，不会进行编译优化，但在ANSI C之后，如果声明中没有volatile关键字，就会假定变量不会进行变化，使用高速缓存优化，使用之后，防止编译器“自作主张”进行优化。
- [[C语言中的 _I _O _IO的用法]]
- 在嵌入式中如果一个数据只是用于读取，可以用const 进行处理，而不用使用volatile，这是因为只读数据无需考虑数据的多次写入可以导致的数据的变化，因此，可以允许编译器的优化，使得可以快速进行读取。而如果该变量经常发生变化，就需要使用volatile进行优化了
# references

- 参考c prime plus 中的12.5.2的章节