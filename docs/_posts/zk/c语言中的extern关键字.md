---
title: c语言中的extern关键字
date: 2024-02-22 11:03:54
permalink: /pages/ee77bd/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2024-02-21 07:19  
Status: #idea  
Tags: 

---

# c语言中的extern关键字
### **extern是什么及其作用**

　　extern是c++引入的一个关键字，它可以应用于一个**全局变量，函数或模板声明**，说明该符号具有外部链接_(external linkage)_属性。也就是说，这个符号在别处定义。一般而言，C++全局变量的作用范围仅限于当前的文件，但同时C++也支持分离式编译，允许将程序分割为若干个文件被独立编译。于是就需要在文件间共享数据，这里extern就发挥了作用。

#### **先导知识**

##### **符号的定义和声明**

　　在介绍extern之前，我们需要了解一下变量的声明和定义。变量的声明指向程序表名变量的类型和名字，即使得名字为程序所知，一个文件如果想使用别处定义的名字则必须包含对那个名字的声明。而变量的定义指申请存储空间，并将其与变量名相关联，除此之外，还可以为变量指定初始值。在程序中变量可以声明多次，但只能定义一次。一般而言，定义就是声明。但C++中由于extern的缘故，变量的声明和定义是可以分开的。**凡是没有带extern的声明同时也都是定义**。而对函数而言，带有{}是定义，否则是声明。如果想声明一个变量而非定义它，就在变量名前添加关键字extern，且不要显式的初始化变量。看下面的例子：

```javascript
//fileA.cpp
int i;                //声明并定义i
int j = 1;            //声明并定义j
double max(double d1,double d2){} //定义

//fileB.cpp
extern int i;          //声明i而非定义
extern int j = 2;     //定义j而非声明，会报错，多重定义
int j;                //错误，重定义，注意这里的j是在全局范围内声明
extern double max(double d1,double d2); //声明
```

复制

##### **C++中的链接属性**

链接属性一定程度范围决定着符号的作用域，C++中链接属性有三种：none(无)、external（外部）和 internal(内部）。

- external，外部链接属性。非常量全局变量和自由函数（除成员函数以外的函数）均默认为外部链接的，它们具有全局可见性，在全局范围不允许重名，详情可见例子。
- internal，内部链接属性。具有该属性的类型有，const对象，constexpr对象，命令空间内的静态对象(static objects in namespace scope)
- none，在类中、函数体和代码块中声明的变量默认是具有none链接属性。它和internal一样只在当前作用域可见。

### **extern的用法**

　　extern有3种用法，分别如下：

#### **非常量全局变量的外部链接**

最常见的用法，当链接器在一个全局变量声明前看到extern关键字，它会尝试在其他文件中寻找这个变量的定义。这里强调全局且非常量的原因是，全局非常量的变量默认是外部链接的。

```javascript
//fileA.cpp
int i = 1;         //声明并定义全局变量i

//fileB.cpp
extern int i;    //声明i，链接全局变量

//fileC.cpp
extern int i = 2;        //错误，多重定义
int i;                    //错误，这是一个定义，导致多重定义
main()
{
    extern int i;        //正确
    int i = 5;            //正确，新的局部变量i;
}
```

复制

#### **常量全局变量的外部链接**

　　常量全局变量默认是内部链接的，所以想要在文件间传递常量全局变量需要在定义时指明extern，如下所示：

```javascript
//fileA.cpp
extern const int i = 1;        //定义

//fileB.cpp                    //声明
extern const int i;
```

复制

#### **extern "C" 和extern "C++"函数声明**

在C++中，当与字符串连用时，extern指明当前声明使用了其他语言的链接规范，如extern "C"，就指明使用C语言的链接规范。原因是，C++语言在编译的时候为了解决函数的多态问题，会将函数名和参数联合起来生成一个中间的函数名称，而C语言则不会，因此会造成链接时无法找到对应函数的情况，此时C函数就需要用extern “C”进行链接指定，这告诉编译器，请保持我的名称，不要给我生成用于链接的中间函数名。C和C++对函数的处理方式是不同的.extern "C"是使C++能够调用C写作的库文件的一个手段，如果要对编译器提示使用C的方式来处理函数的话，那么就要使用extern "C"来说明。

　　例子如下：

```javascript
// 声明printf函数使用C链接
extern "C" int printf(const char *fmt, ...);


//声明指定的头文件内所有的东西都使用 C 链接
extern "C" {
#include <stdio.h>
}

//  声明函数ShowChar和GetChar使用 C 链接
extern "C" {
    char ShowChar(char ch);
    char GetChar(void);
}

//  定义函数 ShowChar 和 GetChar 使用 C 链接
extern "C" char ShowChar(char ch) {
    putchar(ch);
    return ch;
}

extern "C" char GetChar(void) {
    char ch;
    ch = getchar();
    return ch;
}

// 声明全局变量 errno 为C链接
extern "C" int errno;

//又比如，在程序中常见的代码段
#ifdef __cplusplus  
extern "C" {  
#endif  
  
/**** some declaration or so *****/  
  
#ifdef __cplusplus  
}  
#endif

//这里__cplusplus是cpp中的自定义宏，定义了这个宏就表明这是一段cpp的代码，也就是说，
//上面的代码的含义是:如果这是一段cpp的代码，那么加入extern "C"{和}处理其中的代码。
```

复制

### **一些问题**

-  使用extern和包含头文件来引用函数有什么区别呢？

　　与include相比，extern引用另一个文件的范围小，include可以引用另一个文件的全部内容。extern的引用方式比包含头文件要更简洁。extern的使用方法是直接了当的，想引用哪个函数就用extern声明哪个函数。这样做的一个明显的好处是，会加速程序的编译（确切的说是预处理）的过程，节省时间。在大型C程序编译过程中，这种差异是非常明显的。

### **注意事项**

- 不要把变量定义放入.h文件，这样容易导致重复定义错误
- 尽量使用static关键字把变量定义限制于该源文件作用域，除非变量被设计成全局的。
- 可以在头文件中声明一个变量，在用的时候包含这个头文件就声明了这个变量。
# references
[extern关键字-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/2099958)