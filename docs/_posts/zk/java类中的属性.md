---
title: java类中的属性
date: 2023-12-19 15:02:44
permalink: /pages/84e616/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-01 17:46  
Status: #notes 
Tags: [[java]]

---

# java类中的属性

- 类的属性也可以是引用类型，如对象，数组：
```java
public class properties {
  public static void main(String[] args) {
    Cat cat1 = new Cat();
    cat1.name = "kitty";
    cat1.tail = new Tail();
    cat1.tail.lenth = 3.23;
    System.out.println(cat1.tail.lenth);
  }
}
class Cat {
  String name;
  Tail tail;
}

class Tail {
  double lenth;
}
```
	可以看出，在属性包含另外一个类时，需要对类进行初始化，否则对应的对象为`null`

- 访问修饰符的具体含义在后面
# references