---
title: markdown语法
date: 2023-12-19 15:02:44
permalink: /pages/7b2de7/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2022-12-19 14:59  
modify date: 2022-12-19 14:59  
Status: #notes
Tags: [[markdown]]

---

# markdown语法
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(`<br>`)。

## 换行（Line Break）用法的最佳实践

几乎每个 Markdown 应用程序都支持两个或多个空格进行换行，称为 `结尾空格（trailing whitespace)` 的方式，但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的 `<br>` 标签。

为了兼容性，请在行尾添加“结尾空格”或 HTML 的 `<br>` 标签来实现换行。

还有两种其他方式我并不推荐使用。CommonMark 和其它几种轻量级标记语言支持在行尾添加反斜杠 (`\`) 的方式实现换行，但是并非所有 Markdown 应用程序都支持此种方式，因此从兼容性的角度来看，不推荐使用。并且至少有两种轻量级标记语言支持无须在行尾添加任何内容，只须键入回车键（`return`）即可实现换行。
 `
# references

[Markdown 换行语法 | Markdown 官方教程](https://markdown.com.cn/basic-syntax/line-breaks.html#%E6%8D%A2%E8%A1%8C%EF%BC%88line-break%EF%BC%89%E7%94%A8%E6%B3%95%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)