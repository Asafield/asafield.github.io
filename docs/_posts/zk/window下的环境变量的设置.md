---
title: window下的环境变量的设置
date: 2023-12-19 15:02:44
permalink: /pages/bd5eb3/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-12-16 14:52  
Status: #idea  
Tags: [[powershell]]

---

# window下的环境变量的设置
查看命令所在的位置：
Get-Command ping | Select-Object Path
查找环境变量：
$Env:、<variable-name、>
分离：
` $env:path -split ';'|findstr "too"`
# references
[powershell 查看命令位置-掘金 (juejin.cn)](https://juejin.cn/s/powershell%20%E6%9F%A5%E7%9C%8B%E5%91%BD%E4%BB%A4%E4%BD%8D%E7%BD%AE)
[关于环境变量 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.4)