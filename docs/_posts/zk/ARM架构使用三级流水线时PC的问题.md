---
title: ARM架构使用三级流水线时PC的问题
date: 2024-04-01 21:23:25
permalink: /pages/ee1e88/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
- [ ] 不是很懂正点原子书中的`mov pc,lr`中为什么是将LR-4的地址移入pc.
是因为LR保存的值是超前的值吗?那为什么不是将LR-8的地址移入pc.