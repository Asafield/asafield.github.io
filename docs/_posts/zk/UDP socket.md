---
title: UDP socket
date: 2023-12-19 15:02:44
permalink: /pages/9c0930/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2023-02-02 14:55  
Status: #notes
Tags: 

---

# UDP socket

交互过程：  
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230202145633.png)

这里的服务端程序中客户端的相关ip与端口是存在cad这个变量中后在发送时使用该变量，而不是像之前TCP那样放在cad后直接与socket绑定，发送时就不在使用cad变量了的。
下图为TCP中服务对应返回方式：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230202151629.png)
而UDP中：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230202151740.png)
可见UDP的socket中不包含通信对象的ip与port，而是通过变量来指定通信对方的信息。从这里也可以体现UDP是无连接的，而TCP是面向连接的。



# references

[2.9 UDP 套接字编程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1JV411t7ow/?p=21&spm_id_from=pageDriver&vd_source=e0607026c50ab3e4212e710a0fc5e8ed)