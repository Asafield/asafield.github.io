---
title: java中的switch
date: 2023-12-19 15:02:44
permalink: /pages/073b3e/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-09 21:31  
Status: #notes 
Tags: [[java]] [[switch]] [[scanner]]

---

# java中的switch
```java
import java.util.Scanner;
public class sublJava{
	public static void main (String[] args){
	Scanner myScanner = new Scanner(System.in);
	System.out.println("please input a char(a-g)");
	char c1 = myScanner.next().charAt(0);
	switch(c1){
	case 'a':
		System.out.println("today is Monday");
		break;
	case 'b':
		System.out.println("today is Tuesday");
		break;
	default:
		System.out.println("I can not understand");
	
	}
	System.out.println("exit the switch");
	}

}
```
表达式的返回的值不能是浮点数，case子句的值不能是变量，只能是常量；
```java
//有如下穿透的用法
switch (c1){
case 1:
case 2:
case 3:
	//do something
	break;
default:

}

```

# references