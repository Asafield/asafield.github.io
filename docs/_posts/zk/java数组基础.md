---
title: java数组基础
date: 2023-12-19 15:02:44
permalink: /pages/0b8fa6/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-19 15:25  
Status: #notes 
Tags: [[java]]

---

# java数组基础
## 定义：
`double[] hens = {2,1,3};`等价于`double hens[] = {2,1,3};
- 数组的长度：
`hens.length`
- 三种使用方式：
	- 动态： `int a[] = new int[5];`
	- 动态：`int a[]; a = new int[5];`
	- 静态：`int a[] = {1,2,3,4,5};`
## 赋值机制
- 基本数据类型：值传递
- 数组：引用传递：当然在C语言中是不存在这种情况的，因为虽然C也是存放的地址，但不能直接对数组进行赋值，而只能对数组的每个元素进行赋值。
```java
int arr1[] = {1,2,3}；
int arr2[] = arr1;//在c语言中不能这样赋值
arr1[1] = 2;//此时，arr2[1]也为2

```
- 数组拷贝
```java
int[] arr1 = {1,2,3};
int[] arr2 = new int[arr1.length];
for(i=0;i<arr1.length;i++){
	arr2[i]=arr1[i];
}
```
- 数组的添加
	- 创建更长的数组
	- 赋值
	- 拷贝
	- 重新指向新的数组
- 冒泡排序
```java
public void bubbleSort(int arr[]){
	int t = 0;
	for(int i = 0;i < arr.length -1 ;i++)
		for(int j = 0;j < arr.length-1-i;j++){
		if(arr[j]>arr[j+1]){
			t = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = t;
		}
}
```
- 查找：顺序查找与二分查找
- 二维数组：
  `int[][] arr = &#123&#1231,2,3&#125,&#1232,3,4&#125,&#1234,5,6&#125&#125`其定义方式与一维类似，这里是静态的，还有用上`new`进行动态定义的方式，也可能动态和静态相结合（不同维度之间分别静态与动态定义）如列数不确定的数组的定义。
- 

# references
