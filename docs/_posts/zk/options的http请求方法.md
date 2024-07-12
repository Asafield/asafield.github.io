---
title: options的http请求方法
date: 2023-12-19 15:02:44
permalink: /pages/8a778e/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-07-11 11:57  
Status: #idea  
Tags: 

---

# options的http请求方法


> 在做项目时，很多时候发送一个 post 请求，是先发送一个 option 请求，然后再发送 post 请求，一直这么用之前也没有仔细思考，今天有时间，好好了解一下为什么会多一次请求。

在做项目时，很多时候发送一个 post 请求，是先发送一个 option 请求，然后再发送 post 请求，一直这么用之前也没有仔细思考，今天有时间，好好了解一下为什么会多一次请求。

**疑问 1：什么是 options 请求**

OPTIONS 请求方法的主要用途有两个：

1、获取[服务器](https://cloud.tencent.com/product/cvm?from=20065&from_column=20065)支持的 HTTP 请求方法；

2、用来检查服务器的性能。例如：AJAX 进行跨域请求时的预检，需要向另外一个[域名](https://cloud.tencent.com/act/pro/domain-sales?from=20065&from_column=20065)的资源发送一个 HTTP OPTIONS 请求头，用以判断实际发送的请求是否安全。

这是浏览器给我们加上的，后端并没有做任何操作。

**疑问 2：为什么会用到 options 请求**

这得从浏览器同源策略和跨域说起**，**具体可阅读[也谈谈同源策略和跨域问题](http://www.cnblogs.com/chaoyuehedy/p/5556557.html)和[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)，这里不在赘述。

解决跨域问题的方法有很多种，CORS 是比较好的解决方案，我们的项目也是用的这种模式，这个模式会有” 预检” 的请求，也就是正常请求之前的 options 请求。

**关键词：CORS 跨域资源共享**

![](https://ask.qcloudimg.com/http-save/yehe-1253571/ppq6udp912.png?imageView2/2/w/1200)

CORS 是一种网络浏览器的技术规范，它为 Web 服务器定义了一种方式，允许网页从不同的域访问其资源。而这种访问是被同源策略所禁止的。CORS 系统定义了一种浏览器和服务器交互的方式来确定是否允许跨域请求。 

通过阅读我们知道，当我们进行跨越请求的时候，因为同源策略的限制，如果访问跨域请求时，跨源资源共享 (CORS) 机制为 web 服务器跨域访问控制提供了安全的跨域数据传输。

使用 CORS 的方式非常简单，但是需要同时对前端和服务器端做相应处理。

1、  前端

客户端使用 XmlHttpRequest 发起 Ajax 请求，当前绝大部分浏览器已经支持 CORS 方式，且主流浏览器均提供了对跨域资源共享的支持。

2、  服务器端

如果服务器端未做任何配置，则前端发起 Ajax 请求后，会得到 CORS Access Deny，即跨域访问被拒绝。

对于 C# 做如下配置可允许资源的跨域访问： 

<system.webServer> ... <httpProtocol> <customHeaders> <add /> <add /> <add /> </customHeaders> </httpProtocol> </system.webServer>

对于 nodejs 做如下配置可允许资源的跨域访问： 

// 设置 CORS 跨域访问 app.all('*', function (req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type"); res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); res.header("X-Powered-By", '3.2.1') res.header("Content-Type", "application/json;charset=utf-8"); next(); });

Access-Control-Allow-Origin:* 表示允许任何域发起请求，如果只允许特定的域访问，则设置 Access-Control-Allow-Origin:xxx 为具体域名即可。

 **关键词：** **Options**

![](https://ask.qcloudimg.com/http-save/yehe-1253571/9oux3u1qxf.png?imageView2/2/w/1200)

OPTIONS 请求旨在发送一种 “探测” 请求以确定针对某个目标地址的请求必须具有怎样的约束（比如应该采用怎样的 HTTP 方法以及自定义的请求报头），然后根据其约束发送真正的请求。比如针对 “跨域资源” 的预检（Preflight）请求采用的 HTTP 方法就是 OPTIONS。

简而言之，OPTIONS 请求方法的主要用途有两个：

1、获取服务器支持的 HTTP 请求方法；

2、用来检查服务器的性能。

 **关键词：** **Preflighted Requests 预检请求**

 Preflighted Requests 是 CORS 中一种透明服务器验证机制。预检请求首先需要向另外一个域名的资源发送一个 HTTP OPTIONS 请求头，其目的就是为了判断实际发送的请求是否是安全的。

下面的 2 种情况需要进行预检：

非简单请求，比如使用 Content-Type 为 application/xml 或 text/xml 的 POST 请求；（什么是简单请求，什么是非简单请求，请移步阮一峰的[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)）

**总结**

规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。

“需预检的请求” 要求必须首先使用 OPTIONS   方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。

当请求满足下述任一条件时，即应首先发送预检请求（使用 OPTIONS）：

1、使用了下面任一 HTTP 方法：

PUT

DELETE

CONNECT

OPTIONS

TRACE

PATCH

2、人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为：

Accept

Accept-Language

Content-Language

Content-Type (but note the additional requirements below)

DPR

Downlink

Save-Data

Viewport-Width

Width

3、Content-Type 的值不属于下列之一:

application/x-www-form-urlencoded

multipart/form-data

text/plain
# references
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [cloud.tencent.com](https://cloud.tencent.com/developer/article/1046663)