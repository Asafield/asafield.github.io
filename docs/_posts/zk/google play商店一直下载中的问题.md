---
title: google play商店一直下载中的问题
date: 2023-12-19 15:02:44
permalink: /pages/d68e1b/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2022-12-31 19:10  
modify date: 2022-12-31 19:10  
Status: #notes 
Tags: [[google play]]

---

# google play商店一直下载中的问题
手机系统是自带Google Play 服务是厂商预装的，预置的框架商店启动时会向services.googleapis.cn获取数据，而正常情况下(国际版)是向services.googleapis.com获取的。  
解决方法：  
系统自带谷歌服务没有最权限不能卸载，去下载个root软件可以获得权限（新手机不建议尝试，root后官方不给保修），然后安装ES文件浏览器再卸载Google Play服务，接着去网上找个Google play服务安装包来安装，就这大功告成。

# references
[解决 Google Play 「正在等待下载」的问题 - 老虎豆 (tiger.fail)](https://tiger.fail/archives/solve-google-play-waiting-for-downloading.html)
