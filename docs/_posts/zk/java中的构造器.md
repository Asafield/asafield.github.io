---
title: java中的构造器
date: 2023-12-19 15:02:44
permalink: /pages/634fb7/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-02 19:28  
Status: #notes 
Tags: [[java]]

---

# java中的构造器
- 也称构造方法
- 基本语法：
- [修饰符] 方法名(形参列表){ 方法体 }
	- 修饰符可以默认，还有`public` `protected` `private` 
	- 没有返回值
	- 方法名与类名一致
	- 构造器的调用由系统完成（即在`new`的时候完成）
- 作用不是创建对象，而是初始化对象
- 一个类可以定义多个不同的构造器，即构造器的重载：
```java
public class constructor {
  public static void main(String[] args) {
    Person p1 = new Person("jxx");
    System.out.println(p1.name);
    System.out.println(p1.age);
  }
}
class Person {
  String name;
  int age;
  //constructor
  public  Person(String pName, int pAge) {
    System.out.println("完成对象的初始化");
    name = pName;
    age = pAge;
    
  }
  public Person(String pName) {
    System.out.println("another constructor");
    name = pName; 
    age = 23;
  }
}
```
- 如果没有定义的构造器，系统会自动给类生成一个默认无参构造器（也叫默认构造器），其形式如下：
```java
 //Dog dog1 = new Dog(); 
 Dog() {
 }

```
- 反编译指令`javap`
- 如果自己定义了一个构造器，原本的构造器就会失效，而不会有重载的效果，如果需要无参的构造器，就需要自己再定义一个无参构造器。猜测原因是为了防止默认的无参构造器与自定义的有冲突。
- 对象创建的流程分析：
	- 加载Person类信息（Person.class），只会加载一次
	- 在堆中分配空间（地址）
	- 完成对象初始化（1. 默认初始化 age =0（int age = 90 的第一个小步骤） name = null 2. 显式初始化 age = 90(int age = 90  的第二个小步骤) name = null 3. 构造器的初始化）
	- 在对象在堆中的地址，返回给p（p是对象名，也可以理解为对象的引用）
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230402200836.png)
- 对象是堆中的空间，而对象名是对其的引用，一个对象可以有多个引用，可以通过多个引用进行修改。
- [[java中this的使用]]
# references