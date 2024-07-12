---
title: java面向对象编程
date: 2023-12-19 15:02:44
permalink: /pages/58e204/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-31 00:43  
Status: #notes
Tags: [[java]]

---

# java面向对象编程
- 示例：简单的类的实例化
```java
public class object{
  public static void main(String[] args) {
    Cat cat1 = new Cat();
    cat1.name = "kitty";
    cat1.age = 2;
    cat1.color = "black";

    System.out.println("the cat's name , color are " + cat1.name + " " + cat1.age + " " + cat1.color);
    
  }
}

class Cat {
 String name;
  int age;
  String color;
}
```

- 对象在内存中的存在形式: `Cat cat1 = new Cat()` 中的后半部分是创建的内存空间，返回的是一种引用，所以cat1是对象名，也称对象引用。后面的才是真正的对象。[[引用与指针的区别]] [[java中的引用与C中的引用的区别]]
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230401172513.png)

- 声明与创建对象：
	- `Cat cat;` ：此时cat指向null;
	- `cat = new Cat();`此时分配的内存空间，并使得cat指向该空间。此时，该对象中的属性为默认值，引用类型为空。
	- `Cat cat2 = cat1;`此时指向同一个堆中的空间。
	- ![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230401181827.png)

- [[java类中的属性]]
- [[java类中的方法]]
- [[java中的作用域]]
- [[java中的构造器]]


## 封装
[[java中的封装]]
## 继承
[[java中的继承]]
## 多态
[[java中的多态]]

## object类
[[java中的object类]]

## java常用库或方法
[[java中的hascode方法]]
[[java中的toString方法]]
[[java中的finalize方法]]
# references