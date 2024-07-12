---
title: socket编程
date: 2023-12-19 15:02:44
permalink: /pages/3bfec1/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2023-02-01 18:38  
Status: #notes
Tags: [[计算机网络]]

---

# socket编程


过程如下所示：

	s:创建欢迎socket返回整数，与本地ip与port捆绑，再调用accept的API等待用户。阻塞
	
	c:创建socket，与ip与本地未使用的port，再调用以connet的API与服务器连接。阻塞
	
	s: accept接受到，返回同意；创建一个connetction的socket，与服务器ip,port,客户端ip,port捆绑。原本的欢迎socket继续阻塞。
	
	c: 接受到同意的消息，不再阻塞。
	
	连接建立；

﻿具体编程：
对应视频中的22分钟左右
数据结构：
![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230201194340.png)

![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230201194340.png)

流程图：  
![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230201194428.png)



# references
[2.8 TCP 套接字编程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1JV411t7ow/?p=20&spm_id_from=pageDriver&vd_source=e0607026c50ab3e4212e710a0fc5e8ed)