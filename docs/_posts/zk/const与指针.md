---
title: const与指针
date: 2023-12-19 15:02:44
permalink: /pages/61e9ab/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-30 17:21  
Status: #idea  
Tags:  [[c语言]]

---

# const与指针
## 两种情况：
- const的对象是指针所指向的数据值 `const int * p = &x;`或`int const * p = &x`;
	- 合法：`p = &y`;
	- 非法：`*p = 4`;
- const的对象是指针代表的地址`int * const p = &x;`
	- 合法：`*p = 4`;
	- 非法：`p = &y`;
 
结合两种情况：`const int * const p = &x`;对于值与地址都是不可修改的。有：
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231030173434.png)

**注：** const的声明只对其作用的变量有效，如果一个指针用const修饰，其指向的变量依旧可以通过正常的方式进行值 的更改。所以以下是合法可行的：
```c
int x = 3;
const int * p = &x;
x = 4;
```
但这样是不行的，因为这样虽然只有警告，但通过指针对原本const修饰的变量的值进行修改的方式违背的const限定符的初衷：
```c
const int y = 3;
int * q = &y;
*q = 4;
```

指针运算：
针对:
```c
int x = 4;
int * p = &x;
p = p + 1;
*p = 3;//错误，不能对未知指向的指针进行解引用
```
我们将认为所有具有未定义行为的代码（例如此代码）都是错误的。因此，如果您要手动执行此代码，那么当您执行 ptr = ptr + 1; 时，您应该将 ptr 的值更改为仅注意它是 &x+1，看作是相对地址的变化， 而不是一个有效的对值的引用。如果您解引用一个不能有效指向某个框的指针，您应该停止，声明您的代码已损坏，然后修复它。**我们会注意到，简单地对指针执行算术以使它们不指向有效框本身并不是一个错误，只有在我们不知道它指向什么时取消引用指针才是问题所在**。我们可以执行 ptr = ptr - 1;就在这段代码之后，并且确定 ptr 再次指向 x 。我们也可以在循环结束时跳过有效的框序列，但不使用无效的指针值。我们通常不会做这些事情，您应该知道什么是可接受的编码实践和什么是不可接受的编码实践之间的区别。
## 字符串数组
- 注意在多维数组时，需要考虑字符串的结束符以确定正确的字符串初始化长度：
  ```c
char strs[3][4] = {"Abc", "def", "ghi"};
char chrs[3][3] = {"Abc", "def", "ghi"};
```
- 字符串长度不一时，需要使用最长的字符串，但这样会导致空间的浪费，所以可以采用指针数组的方式进行表征。
```c
const char * words[] = {"A", "cat", "likes", "sleeping."};
```
- 一个技巧是使用NULL指针结束字符串数组，这样可以编写循环来遍历数组，而无需知道数组中有多少个元素。
```c
const char ** ptr = words2;
while(*ptr != NULL){
	printf("%s",*ptr);
	ptr++;
}
printf("\n");
```
# references