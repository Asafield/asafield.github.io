---
title: 设置powershell代理
date: 2023-12-19 15:02:44
permalink: /pages/6e13e1/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-30 21:13  
Status: #notes
Tags: [[终端]]

---

# 设置powershell代理
nvim $PROFILE
```
$proxy='http://127.0.0.1:7890'
$ENV:HTTP_PROXY=$proxy
$ENV:HTTPS_PROXY=$proxy

```
# references
[(2条消息) Powershell命令行设置代理_powershell 设置代理_ITKEY_的博客-CSDN博客](https://blog.csdn.net/lxyoucan/article/details/127843271?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-127843271-blog-110950434.235%5Ev27%5Epc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-127843271-blog-110950434.235%5Ev27%5Epc_relevant_default&utm_relevant_index=1)