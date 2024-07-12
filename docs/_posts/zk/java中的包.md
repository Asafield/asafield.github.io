---
title: java中的包
date: 2023-12-19 15:02:44
permalink: /pages/1f0dc3/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-12 20:55  
Status: #idea  
Tags: 

---

# java中的包
- 包基本语法： `package 包名`
- 包的本质就是创建不同手文件夹来保存不同的类文件，直接由文件夹组成，同时还需要在源文件中指明包名

## 包的命名
- 规则：不能数字开头，不能是关键字或保留字
- 规范：`com.公司名.项目名.业务模块名`
## 常用的包
- 常用的包：java.lang(默认引入，包含Math/String等）、java.util(系统提供的工具类)、java.net(网络相关)、java.awt(界面开发GUI)
## 包的使用
两种引入方式：
- import java.util.Scanner;//只引入java.util下的 Scanner
- import java.util.\*; 表示将java.util包下的所有类都引入
- 建议需要哪个类就导入哪个类即导入哪个类
- package的使用，一个文件只有一句，声明当前类所在的包，只能放在类的最上面
# references