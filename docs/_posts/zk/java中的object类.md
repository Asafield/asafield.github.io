---
title: java中的object类
date: 2023-12-19 15:02:44
permalink: /pages/a73625/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-15 19:47  
Status: #idea  
Tags: 

---

# java中的object类
### 方法介绍
`"=="`是一个比较运算符
1.`"=="`：既可以判断基本类型，又可以判断引用类型
2.``"=="``：如果判断基本类型，判断的是值是否相等。示例：int i=10；double d=10.0：true
3.`"=="`：如果判断引用类型，判断的是地址是否相等，即判定是不是同一个对像【案例说明】即使是编译类型不一致时，但只要指向的都是相同的空间地址，就是返回true。
### equals
- 只能判断引用类型。默认判断是地址是否相等，子类中往往重写该方法，用于判断内容是否相等
- 重写示例：
```java
package com.learning.object_;  
  
public class EqualsExercise {  
    public static void main(String[] args) {  
        Person asafield = new Person("asafield", 22, 'm');  
        Person jxx = new Person("asafield", 22, 'm');  
        System.out.println(asafield.equals(jxx));  
    }  
}  
  
class Person {  
    private String name;  
    private int age;  
    private char gender;  
  
    public Person(String name, int age, char gender) {  
        this.name = name;  
        this.age = age;  
        this.gender = gender;  
    }  
  
    public boolean equals(Object obj) {  
        if(obj instanceof Person) {  
            if((this.getAge()==((Person) obj).getAge()) &&(this.getGender()==((Person) obj).getGender()) &&this.getName().equals(((Person) obj).getName())) {  
                return true;  
            }  
        }  
        return false;  
    }  
  
    public String getName() {  
        return name;  
    }  
  
    public void setName(String name) {  
        this.name = name;  
    }  
  
    public int getAge() {  
        return age;  
    }  
  
    public void setAge(int age) {  
        this.age = age;  
    }  
  
    public char getGender() {  
        return gender;  
    }  
  
    public void setGender(char gender) {  
        this.gender = gender;  
    }  
}
```
# references