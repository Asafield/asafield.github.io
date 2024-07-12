---
title: java中的继承
date: 2023-12-19 15:02:44
permalink: /pages/f94096/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-14 18:51  
Status: #idea  
Tags: 

---

# java中的继承
为了解决代码复用问题，对多个类存在相同属性与方法时抽象出父类。子类通过继承这些属性实现代码的复用。
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230414190842.png)

语法：
```java
package com.learning.extend_;  
  
public class Pupil extends Student {  
    public void testing() {  
        System.out.println("小学生  " + name + "正在考小学数学。。");  
    }  
}
```

- 子类不能直接访问私有属性与方法（但其实它已经继承了所有的属性与方法，只是有的不能直接访问），要通过公共的方法去访问。 同时，子类也不具有能访问默认属性与方法的能力，但如果子类与父类在同一个包里，则不用因为同一个包的类可以访问默认修饰符修饰的类。
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230414194007.png)

- 子类会在构造器中默认使用`super()`，调用父类的无参构造器，如果父类没有无参构造器，则需要在子类的构造器中用`supe(参数列表)`去指定使用父类的哪个构造器，以完成父类的初始化
- `super`在子类构造器的第一行，因此与this调用构造器的方式冲突，在使用了this()调用构造器时，原本默认的super方法会失效，但在this()调用的构造器中仍会继续调用super();
- `Object`是所有类的基类
- 父类构造器的调用不限于直接父类！将一直往上追溯直到Objects类（顶级父类）
- 子类最多只能直接继承一个父类，即java是单继承机制，为了实现一个类继承多个类的效果，可以让子类的父类去继承另外需要继承的类

## 内存布局

![image.png|1275](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230414202704.png)

- 子类调用属性时，会先判断子类是否存在该属性，没有会沿着继承的父类向上搜索，直到找到可能返回的值，但在向上搜索的过程中遇到了private的属性或方法时，会阻塞不在向上搜索并报错
- 在父类中的方法中访问属性时，访问的是该方法所在父类的属性，而不是子类中同名的属性，这与动态绑定有关，如果子类有同名的方法，那么自然会使用子类的方法。但动态绑定对属性无效，所以即使在子类中调用的父类方法存在使用的属性在子类与父类中都存在时，由于没有动态绑定，所以使用的就是方法所在的类的属性。
- 继承的基本思想：父类的构造器完成父类的初始化，子类的构造器完成子类的初始化 
```java
package com.learning.extend_;  
  
public class Pupil extends Student {  
    public int weight = 100;  
    public void testing() {  
        System.out.println("小学生  " + name + "正在小学数学。。");  
        System.out.println("the weight of pupil is " + getWeight());  //结果为0，是父类中定义了getWeight方法所在类的属性
    }  
}
```
## super的使用
- 可以访问父类的属性，但不能访问父类的私有属性
- super与直接使用属性或方法（或使用this）相比，跳过了第一步对所在子类的属性的方法的查找

##  方法重写/覆盖
- 子类的方法和父类的方法具有相同的函数原型（名称、返回类型、参数一样），子类会对父类产生覆盖，且父类可能不是直接父类，指代的是上级类。
- 在重写时，子类方法的返回类型与父类方法的返回类型一致或是父类的方法返回类型的子类时，才可以实现方法的覆盖；如果不满足，则无法编译。
- [ ] 子类方法不能缩小父类方法的访问权限 为什么会有这种规定呢？
- 重载与重写的区别：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230415134426.png)
## 继承时的内存图解
参考：[java 继承关系的内存图解 （通俗易懂)-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1182849)

# references