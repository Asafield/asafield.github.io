---
title: java中的toString方法
date: 2023-12-19 15:02:44
permalink: /pages/4d81aa/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-06-04 18:35  
Status: #idea  
Tags: [[java]] 

---

# java中的toString方法
- 全类名：包名加类名
- toString返回：全类名+@+哈希值的16进制
```java

public String toString() {  
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}  
```
- 一般会重写对象的toString方法，以输出对象的属性，在idea有自带的模板
# references