---
title: RESTful与SOAP API 的区别
date: 2023-12-19 15:02:44
permalink: /pages/0e7d9f/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-07-11 17:13  
Status: #idea  
Tags: [[Web开发]]

---

# RESTful与SOAP API 的区别
## 概述

REST 和 SOAP 是在线传输数据的两种不同的方法。具体而言，它们都定义了[应用编程接口（API）](https://www.redhat.com/zh/topics/api)（该接口允许数据在 Web 应用之间交换）的构建方式。表述性状态传递（REST）是一组架构原则。简单对象访问协议（SOAP）则是一个[由万维网联盟（W3C）制定](https://www.w3.org/TR/soap12/)的官方协议。二者的主要区别在于 SOAP 是一种协议，而 REST 不是。通常，取决于实际用例和开发人员偏好，API 会遵循 REST 或 SOAP 准则。

[深入了解什么是 API？](https://www.redhat.com/zh/topics/api/what-are-application-programming-interfaces)

## REST：表述性状态传递

REST 是一组适合于轻量级 [Web 服务](https://www.redhat.com/zh/topics/cloud-computing/what-are-cloud-services)和[移动应用](https://www.redhat.com/zh/topics/mobile)需求的架构原则。鉴于它是一组指导准则，因此这些建议的实施是由开发人员负责完成。

当有数据请求发送给 REST API 时，通常是通过超文本传输协议（通常称为 HTTP）来完成的。收到请求后，专为 REST 设计的 API（称为 RESTful API 或 RESTful Web 服务）可返回多种格式的消息：HTML、XML、纯文本及 JSON。JSON（JavaScript 对象表示法）是人们青睐的消息格式，因为它可以被任何编程语言（不管叫什么）读取，人机可读，并且十分轻量。因此，RESTful API 不仅更加灵活，而且更容易设置。

只要某个应用遵循了 6 个架构准则，那它就是 RESTful 应用。RESTful 应用必须具有：

1. 由客户端、服务器和资源构成的客户端-服务器架构。
2. [无状态](https://www.redhat.com/zh/topics/cloud-native-apps/stateful-vs-stateless)客户端-服务器通信，即请求间隔期间，服务器上不会存储任何客户端内容。与会话状态相关的信息会存储在客户端上。
3. 可缓存性数据，可免去客户端与服务器之间的某些交互。
4. 组件间的统一接口：使信息以标准化形式传输，而不是应用各个需求特有的形式。REST 的创建者 [Roy Fielding 表示](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)，"这是区分 REST 架构风格与其他基于网络的风格的核心特征"。
5. 分层系统约束，客户端与服务器之间的交互可以通过分层来进行调解。
6. 按需编码，允许服务器通过传输可执行代码来扩展客户端的功能（但这样也会降低可见性，因此这是一条非必需准则）。

## SOAP：简单对象访问协议

SOAP 是一项标准协议，其最初的设计意图是让使用不同语言且在不同平台上构建的应用之间进行通信。由于 SOAP 是一项协议，因此它会施加一些内置规则，从而增加复杂性和开销，并可导致页面加载时间延长。但是，这些标准还提供了内置合规性，使其更适合企业应用。内置合规性标准包括[安全性](https://www.redhat.com/zh/topics/security/api-security)、原子性、一致性、隔离性和持久性（ACID），这是一组旨在确保数据库事务可靠性的属性。

常见的 Web 服务规范包括：

- **Web 服务安全性（WS 安全性）**：通过叫做"令牌"的唯一标识符，实现消息安全防护和传输方式的标准化。
- **WS-ReliableMessaging**：标准化了在不可靠的 IT 基础架构间传输消息的错误处理方式。
- **Web 服务寻址（WS 寻址）**：将路由信息打包为 SOAP 标头中的元数据，而不是在网络深处维护此类信息。
- **Web 服务描述语言（WSDL）**：描述 Web 服务的功能以及该服务的工作起点和终点。

当有数据请求发送给 SOAP API 时，可以通过任何应用层协议来处理该请求：HTTP（针对 Web 浏览器）、SMTP（针对电子邮件）、TCP 等等。但是，一旦收到请求，返回的 SOAP 消息必须以 XML 文档（一种人机均可读的标记语言）的形式返回。浏览器无法缓存已完成的 SOAP API 请求，因此如果不重新发送给 API，之后便无法访问该请求。

## SOAP 和 REST 的区别是什么？

许多传统系统可能仍会遵循 SOAP 准则，而在基于 Web 的场景中，REST 常常被视为一种后来居上的替代方法。REST 是一组可灵活实施的准则，而 SOAP 则是具有特定要求（例如 XML 消息传递）的协议。

REST API 属于轻量级 API，因此非常适合较新的环境，例如[物联网（IoT）](https://www.redhat.com/zh/topics/internet-of-things-570051)、移动应用开发和[无服务器计算](https://www.redhat.com/zh/topics/cloud-native-apps/what-is-serverless)。SOAP Web 服务可提供符合许多企业需求的内置安全性和事务合规性，但同时也会让它们变得结构繁重。此外，许多公共 API（例如 Google Maps API）都遵循 REST 准则。
# references
[一文看懂 REST 和 SOAP 协议的区别是什么？ (redhat.com)](https://www.redhat.com/zh/topics/integration/whats-the-difference-between-soap-rest)