---
title: c++中注意事项
date: 2024-03-20 17:15:58
permalink: /pages/9c7d51/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
- 在函数中不要以以下形式进行初始化:
  ```c++
  int i,j = 0;
```
这相当于:
```cpp
int i;
int j = 0;
```

- 在一个for循环中以变量i进行迭代时,尽量保证每次循环只迭代一次,不然可能存在数组边界的问题

- 存在多个循环时,考虑在这多个循环中是否有操作重复进行了,如果有,考虑使用双指针或者动态规划进行优化