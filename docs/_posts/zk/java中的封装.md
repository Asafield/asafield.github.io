---
title: java中的封装
date: 2023-12-19 15:02:44
permalink: /pages/d60c25/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-14 14:12  
Status: #idea  
Tags: 

---

# java中的封装
- 封装（encapsulation）就是把抽象出的数据[属性]和对数据的操作[方法]封装在一起，数据被保护在内部，程序的其它部分只有通过被授权的操作[方法]，才能对数据选行操作。
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230414141751.png)
 ### 实现封装
 - 属性私有化（private)
 - 提供一个公共的方法，对属性判断并赋值（加入数据验证的逻辑）------- set方法
 - 提供公共的public方法，用于获取属性的值 （加入权限判断的逻辑）------------ get方法
 - 在使用构造器时，可以直接调用set方法，以防止权限限制失效
# references