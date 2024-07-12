---
title: java基础知识JVM等
date: 2023-12-19 15:02:44
permalink: /pages/fc4f95/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-09 22:02  
Status: #notes 
Tags: [[java]] [[JVM]] 

---

# java基础知识JVM等
1. java是跨平台的，其代码可以无需重新编译就在多个平台上运行。（通过Java虚拟机的特性）。
2. java是解释型的语言。
3. java的运行机制：`.java`文件编译成`.class`文件来运行。可在多个平台上运行：
	Java运行机制及运行过程
	Java核心机制-Java虚拟机-JVM 即java virtual machine
	基本介绍
	1）JVM是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器，包含在JDK中.
	2）对于不同的平台，有不同的虚拟机。
	3）Java虚拟机机制屏薇了底层运行平台的差别，实现了“一次编译，到处运行”
	说明示意图
4. ![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230221000950.png)
5. ![image.png|500](https://pic-1312640559.cos.ap-chengdu.myqcloud.com/img/20230221001826.png)
6. 程序测试：
```java
//public class Hello 表示Hello是一个类，是一个public公有的类
public class Hello {
	//主方法入口
	public static void main (String[] args){
		System.out.println("hello,world~");
	}
}
```
- 编码问题，windows的终端为GBK编码的，所以文件类型需要保存为GBK类型的
- 文件名问题，我在修改文件名与公共类的名称不同时，无法正常编译。**public类可以没有，但是如果有的话，public修饰的类名必须与源文件名保持一致；并有且仅有一个！**
- `java`这个命令加载的是主类的名称，而非文件的名称。所以应该运行命令`java Hello`而非`java Hello.class`。
- `javac`这个命令是把java源文件编译为`JVM`可以识别的字节码文件。而`java`这个命令是加载编译后的文件到虚拟器中运行。
- 编译后，每一个类都对应生成一个class
- 一个源文件中最多只能有一个`public`：类。其它类的个数不限，也可以将`main`方法写在非`public`类中，然后指定运行非`public`类，这样入口方法就是非`public`的`main`方法。且多个类可以包含多个`main`方法。

7. 回车与换行的区别：
- 回车会将光标移到最前，开始替换。
- 换行才会直接换行
8. 文档注释(javadoc):
- `javadoc -d ./ -author -version .\Hello.java`
- 在代码中，只对类各方法生成注释，还有文档开头的说明。且用固定的格式。
```java
/** this is comments
*@param
*@param
*/
```
9. 代码规范：
	1.类、方法的注释，要以javadoc的方式来写。
	2.非Java Doc的注释，往往是给代码的维护者看的，着重告述读者为什么这样写如何修改，注意什么问题等
	3.使用tab操作，实现缩进，默认整体向右边移动，时候用shift+tab整体向左移
	5.源文件使用utf-8编码
	6.行宽度不要超过80字符
	7.代码编写次行风格和行尾风格。（大括号是否换行）

10. `DOS`命令：
- `md`: 创建文件夹
- `rd`: 删除文件夹
- `dir`：查看当前目录下的内容
- `echo`: 输入内容到文件
- `copy`: 复制
- `del`: 删除文件
- `move`: 剪切
- `type`: 创建新文件： `type nul > txt.txt`
# references