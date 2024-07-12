---
title: java中的finalize方法
date: 2023-12-19 15:02:44
permalink: /pages/8eec46/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-06-04 19:03  
Status: #idea  
Tags: [[java]]

---

# java中的finalize方法
- 当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法，子类可以重写该方法，做一些释放资源的操作
- 垃圾回收发生在没有引用指向某个对象时，系统调用该方法进行垃圾回收，但并不一定是马上回收，它有自己的回收算法，也可以主动通过System.gc()来触发垃圾回收机制（但也不能完全确定，可能系统内有更高优先级的任务？）。
- 可以用于自己的逻辑实现，如关闭服务器数据库连接，或关闭。
- 非阻塞调用
# references