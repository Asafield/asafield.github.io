---
title: java数据类型与操作符
date: 2023-12-19 15:02:44
permalink: /pages/0a850d/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-09 22:05  
Status: #notes 
Tags: [[java]] 

---

# java数据类型与操作符
11. `char`: 
-   char 类型是一个单一的 16 位 Unicode 字符；
-   最小值是 \u0000（十进制等效值为 0）；
-   最大值是 \uffff（即为 65535）；
-   char 数据类型可以储存任何字符；
-   例子：char letter = 'A';。
-   例子：char letter2 = '男'
12. 在java中，对于运算符”+“：当左右两边都是数值型时，则做加法运算。而当左右两边有一方为字符串，则做拼接运算。
![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230223203343.png)
13. 数据类型：（`String`不是一个数据类型，而是一个类）（char与C语言的char类型的大小不同）
![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230223203609.png)

14. Java 的整型常量（具体值）默认为 int 型，声明 long 型常量须后加‘l’或‘L‘。
15. 关于浮点数在机器中存放形式的简单说明,浮点数=符号位+指数位+尾数位
16. Java 的浮点型常量(具体值)默认为 double 型，声明 float 型常量，须后加‘f’或‘F
17. 当我们对运算对果是小数的相等判断时，要小心；应该是以两个数的差值对绝对值，在某个精度范围类来判断。
18. `System.out.println(num12);`//接近 2.7 的一个小数，而不是 2.7
19. Java的API查询：[码工具 - 代码在线工具箱 (matools.com)](https://www.matools.com/)
20. 各种字符的编码表：
- ASCII
- Unicode: 字母与汉字统一都占用两个字节
- utf-8: 大小可变的编码，字母用一个字节表示，汉字使用3个字节
- gbk：可以表示汉字，而且范围广，但范围仍小于utf-8, 字母用一个字节表示，汉字使用2个字节
- gb2312: 可以表示汉字，但范围更小，小于gbk
- big5码： 繁体中文；
21. 自动类型转换： 精度小的类型自动转换为精度大的数据类型：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230225125605.png)

22. 有多种类型的数据混合运算时，系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算。当我们把精度（容量）大的数据类型赋值给精度（容量）小的数据类型时，就会报错，反之就会进行自动类型转换。
```java
public class AutoConvert{
	public static void main(String[] args) {
		int b = 1
		float a = b+ 2.1;// 会报错
	}	
}
```
23. 当把具体数据赋给byte时，（1）先判断数的范围内，如果是就可以，但（2）的情况是不行的。
```java
//(1)
byte b1 = 10 //对 ，10在-128到127之间
//(2)
int n2 = 1; //n2 是int
byte b2 = n2;//错，如果是变量赋值，判断类型
```
24. byte、short与char不能互相自动转换，但三者可以计算，在计算时首先转换为int类型，就算是两个byte相运算都会转换成int。
25. boolean类型不参与类型的自动转换。就无法像C语言那样通过if(1)来进行条件判断。
26. 强制类型转换可能造成精度丢失与数据溢出。
27. 将基本数据类型转换为字符串，将基本类型值+""即可。而String类型转基本数据类型需要调用基本类型的包装类调用parseXX方法即可。
```java
		String s = "124";
		int i = Integer.parseInt(s);
		double d = Double.parseDouble(s);
```
28. 取出字符串中的的字符：
```java
String s = "123";
System.out.println(s.charAt(0));
```
29. 算术运算符：除法需要注意：
```java
System.out.println(10/4);//结果为2，这是因为两个操作数都是int型；
System.out.println(10.0/4);//java是2.5
double d = 10/4; //结果为2.0
```
30. 取模，实际是按照公式：$a \% b = a-a/b*b$(这里的a/b是java中两个整数相除，结果也为整数)：
```java
System.out.println(10%3)//1
System.out.println(10%-3)//1
System.out.println(-10%3)//-1
System.out.println(-10%-3)//-1
```
31. 区别这两种情况：
```java
int i =1;
i = i ++;
System.out.println(i);//1
//*****************
int j = 1;
j = ++j;
System.out.println(j);//2
```
32. 关系运算符中的`instanceof`检查是否是类的对象：
```java
if ("hello" instanceof String) {
System.out.println("hello is an instance of String");
}
```
33. 短路与&&和逻辑与&：
```java
//对于&&短路与而言，如果第一个条件为false，后面的条件不再判断
int a = 4;
int b = 9;
if (a <1 && ++b<50) {
}
System.out.println(b);
//对于&逻辑与而言，如果第一个条件为false，后面的条件仍然会判断
if (a <1 & ++b < 50){
}
System.out.println(b);
```
34. 赋值表达式会返回被赋值变量的值：
```java
		boolean y = false;
		int a = 3;
		System.out.println(y = true);//true
		System.out.println(a = 5);//5
```
35. 复合运算符会进行类型转换：
```java
byte b = 2;
b += 3;//这种会进行类型转换，等价于b = (byte)(b +3)
b ++;//这种也有一个类型的转换，等价于b = (byte)(b+1)
```
36. 三元运算符：条件表达式？表达式1:表达式2；
```java
int n1 = 1;
int n2 = 2;
int n3 = 3;
int max = (n1 > n2 ? n1 : n2) > n3 ? (n1 > n2 ? n1 : n2) : n3;//这里有34的知识点被涉及，且这种表达不推荐，更推荐分开写。后面会有更好的方法解决：排序
System.out.println("max number is " + max);
```
37. 命名规范：
- 包名：多单词组成时所有字母都小写：aaa.bbb.ccc/比如com.hsp.crm
- 类名、接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz\[大驼峰\]比如：TankShotGame
- 变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz\[小驼峰\]，简称驼峰法]比如：tankShotGame
- 常量名：所有字母都大写。多单词时每个单词用下划线连接：XXX YYY ZZZ比如：定义一个所得税率TAX RATE5.后面我们学习到类，包，接口，等时，我们的命名规范要这样遵守，更加详细的看文档。
38. java没有无符号数；其中的数都是有符号的；
39. 移位时，算术右移与左移的符号位不变，且右移时是符号位对溢出位进行填充。逻辑右移则符号位也和普通位一样运算，但高位是补0。没有`<<<`符号。
# references