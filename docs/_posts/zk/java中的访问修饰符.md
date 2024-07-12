---
title: java中的访问修饰符
date: 2023-12-19 15:02:44
permalink: /pages/302d6d/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-04-14 13:39  
Status: #idea  
Tags: 

---

# java中的访问修饰符
- `public`
- `protected`: 对子类和同一个包中的类公开
- `（默认级别）`：没有修饰符号，向同一个包的类公开
- `private`：只有本身可以访问，不对外公开

| 访问级别 | 访问控制修饰符 | 同类 | 同包 | 子类 | 不同包 |
| -------- | -------------- | ---- | ---- | ---- | ------ |
| 公开     | public         | √    | √    | √    | √      |
| 受保护   | protected      | √    | √    | √    | ×      |
| 默认     | 没有修饰符     | √    | √    | ×    | ×      |
| 私有     | private        | √    | ×    | ×    | ×      | 
- 使用的注意事项
	1）修饰符可以用来修饰类中的属性，成损方法以及类
	2）只有默认的和oublic：才能修饰类！，并且遵循上述访问权限的特点。
	3）因为没有学习继承，因此关于在子类中的访问权限，我们讲完子类后，在回头讲解
	4）成员方法的访问规则和属性完全一样.   


# references