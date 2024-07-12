---
title: token问题
date: 2023-12-19 15:02:44
permalink: /pages/d6468e/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2023-02-17 22:47  
Status: #notes
Tags: [[Web开发]]

---

# token问题
- 问题描述：在我使用postman进行测试时，使用的token，但出现了超时的情况。但实际上我的token是刚刚生成的，这是为什么呢？
	是因为我在header里面的信息没有包含添加的token是在Authorization，但是代码中实际需要将token填入header中名为token的字段中。实际上我的后端解析的会是token字段，而非Authorization提供的值。

# references