---
title: python中的迭代器与生成器
date: 2024-02-22 11:11:13
permalink: /pages/f86fe3/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
迭代器有两个基于的用法：
```python
list = [1,2,3,4]
it = iter(list)
print(next(it)) # 1
print(next(it)) # 2
```
迭代器也可以通过for语句进行遍历：for可迭代的功能用法 for x in it:
```python
list = [1,2,3]
it = iter(list)
for x in it:
	print(x, end=" ")
```