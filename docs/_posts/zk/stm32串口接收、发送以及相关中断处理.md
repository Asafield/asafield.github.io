---
title: stm32串口接收、发送以及相关中断处理
date: 2024-04-19 16:56:46
permalink: /pages/c6b425/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-13 20:24  
Status: #idea  
Tags: 

---

# stm32串口接收、发送以及相关中断处理
```js
 module.exports = function (identifier, data) {
    var attributes = {};
    // 验证数据长度，并校验 CRC
    var acceleration = [];
        var i = 0;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        acceleration.push(data.readInt16LE(i));i+=2;
        attributes.acceleration = acceleration;
    return attributes;
}

```
# references