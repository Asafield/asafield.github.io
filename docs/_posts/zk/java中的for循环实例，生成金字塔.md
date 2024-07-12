---
title: java中的for循环实例，生成金字塔
date: 2023-12-19 15:02:44
permalink: /pages/cdc30f/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-18 22:54  
Status: #notes
Tags: [[java]]

---

# java中的for循环实例，生成金字塔
```java
import java.util.Scanner;
public class sublJava{
	public static void main (String[] args){
	Scanner myScanner = new Scanner(System.in);
	System.out.println("please input a Number");
	int c1 = Integer.parseInt(myScanner.next());
	for(int i=0;i<c1;i++){
		for(int j=0;j<2*c1-1;j++){
			if(j==c1-i-1||j==c1-1+i||i==c1-1){
				System.out.print("*");
			}else{
				System.out.print(" ");	
			}
		}
				System.out.print("\n");	
	}

}
}
```
# references