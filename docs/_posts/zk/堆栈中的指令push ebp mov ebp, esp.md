---
title: 堆栈中的指令push ebp mov ebp, esp
date: 2023-12-19 15:02:44
permalink: /pages/1104b7/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-12-07 17:09  
Status: #idea  
Tags: [[堆栈]] 

---

# 堆栈中的指令push ebp mov ebp, esp
- **当从main函数进行子函数test()时，会有一个push ebp的指令，其作用是什么:**
	在典型的x86架构中，当从main函数（或其他函数）调用子函数test()时，会在进入test()函数之前执行push ebp指令。这个指令的作用是保存调用函数的基址指针（EBP）的值。
	
	EBP寄存器在函数调用过程中通常用作基址指针，它指向当前函数的栈帧。栈帧包含了函数的局部变量、函数参数以及其他与函数执行相关的信息。通过保存EBP寄存器的值，可以在调用子函数后恢复调用函数的栈帧结构。
	
	具体来说，push ebp指令将当前调用函数的EBP寄存器的值压入堆栈。这样做的目的是为了保存调用函数的栈帧，以便在子函数执行完毕后能够正确恢复调用函数的上下文。
	
	在test()函数执行之前，常见的函数调用顺序如下：
	
	在main函数中，EBP寄存器指向当前main函数的栈帧。
	
	在调用test()函数之前，执行push ebp指令将当前main函数的EBP寄存器的值压入堆栈。
	
	执行mov ebp, esp指令将当前的堆栈指针（ESP）的值复制给EBP寄存器，建立一个新的栈帧。
	
	继续执行test()函数中的代码。
	
	当test()函数执行完毕准备返回时，会按照以下步骤进行栈帧的恢复：
	
	执行mov esp, ebp指令将EBP寄存器的值赋给ESP寄存器，恢复堆栈指针。
	
	执行pop ebp指令将之前保存在堆栈中的main函数的EBP值弹出到EBP寄存器，恢复调用函数的栈帧。
	
	返回到调用点，继续执行main函数中的代码。
	
	通过保存和恢复EBP寄存器的值，可以确保在函数调用过程中正确地处理栈帧结构，以便正确访问局部变量和函数参数。


# references