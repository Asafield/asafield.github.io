---
title: DNS
date: 2023-12-19 15:02:44
permalink: /pages/d1270f/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2023-01-31 12:50  
Status: #notes 
Tags: [[计算机网络]]

---

# DNS

**别名到规范名字的转换**
##### DNS提供的具体服务：

- 提供了主机名到ip地址映射的查询服务

- 提供**主机别名**（host aliasing）服务,有着复杂主机名的主机可以有一个或者多个别名，例如：**aaa.xxx.com**的主机可能还会有**aaa.com**和**xxx.com**两个别名，在这种情况下，**aaa.xxx.com**叫做**规范主机别名**（canonical hostname）。主机别名的特征是比规范主机名更容易记忆，DNS可以提供根据主机别名获取规范主机名的服务。

- 提供**负载分配服务**（load distribution）。一般来说，被繁忙访问的大型站点是分布在多台服务器上的，这个时候，主机名和ip地址就不是一一对应的关系，而是一个主机名对应一个ip地址的集合。**在大量的，连续的多次访问中，DNS通过旋转ip地址达到负载均衡的目的**：在向这个主机名发出DNS请求的时候，服务器会用包含全部这些ip地址的报文进行回答，但在每个不同的回答中会旋转这些ip地址的摆放顺序，**而客户机总向报文中排在最前面的ip地址发出请求**。

别名::www.123.com指向 主机名::host.mydomain.com 指向 主机IP::127.0.0.1　　别名::mail.123.com 指向 主机名::host.mydomain.com 指向 主机IP::127.0.0.1
无论是哪个别名,,被访问时首先指向主机名,,然后对主机名进行解析,,解析结果按原路返回

# references
[DNS(域名系统) 学习笔记 - 简书 (jianshu.com)](https://www.jianshu.com/p/2cdc7b57aaa8)
[(7条消息) DNS的别名_wo101377的博客-CSDN博客_dns 别名](https://blog.csdn.net/wo101377/article/details/29803321)
[(7条消息) DNS(域名系统)详解_dns系统_Just One.的博客-CSDN博客](https://blog.csdn.net/struggle_w/article/details/123493782?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-123493782-blog-29803321.pc_relevant_3mothn_strategy_and_data_recovery&spm=1001.2101.3001.4242.1&utm_relevant_index=3)
