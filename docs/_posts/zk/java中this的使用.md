---
title: java中this的使用
date: 2023-12-19 15:02:44
permalink: /pages/2d74a0/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-02 20:19  
Status: #notes
Tags: [[java]]

---

# java中this的使用
- 既需要构造器中形参名与属性一致，但又要属性与形参名不冲突
- jvm会给每个对象分配this，代表当前对象。不同对象使用对应的this的指代自然不同。
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230402203159.png)
- 对象名用`hashCode`方法输出的结果与`this`的`hashCode`方法得到的是一样的，哪个对象调用，this就指向哪个对象。
- 使用细节：
	- `this`关键字可以用来访问本类的属性、方法、构造器
	- `this`可以用于区分当前类的属性和局部变量
- `this`调用方法与直接调用方法是有区别的，涉及继承相关的知识。
- `this`访问构造器语法，`this(参数列表)`**注意只能在构造器中去访问另一个构造器使用**,**且必须将该语句放在第一条语句**
- `this`不能在类定义的外部使用，只能在类中使用
```java
public T(){
	this("asfield",100);
}
public T(String name, int age){
	System.out.println("anothor constructor"）；
}
```
# references