---
title: c++ primer 开始
date: 2023-12-19 15:02:44
permalink: /pages/db50ea/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-11-08 16:04  
Status: #idea  
Tags:  [[c++]]

---

# c++ primer 开始
## 第一章 开始
- [x] cc prog1.cc中的cc编译器是什么，好像很常见， 是一个泛指吗？用来指代g++等？ ✅ 2023-11-06：是的， 是泛指 
- [x] practice 1.2: 返回值为-1时在win下的结果 ✅ 2023-11-06
```cpp
Process finished with exit code 0
```
标准库中的四个IO对象：
- cin
- cout
- cerr
- clog
对于`sdt::out << "Enter two numbers:" << std:endl;`来说：`<<`运算符接受两个对象，左侧的对象为ostream对象，右侧则为要打印的值，计算结果就是写入给定值的那个ostream对象。第二个运算符将第一次运算的结果作为第二次运算的左侧对象。相当于就是每次都返回`std::cout`。`endl`是一个被称为操纵符的特殊值 ，相当于结束当前行，并将与设备关联的buffer中的内容刷到设备中。可以保证到目前为止程序所产生的所有输出都真正写入输出流中，而不是仅停留在内存中等待写入流。也会进行换行。
在运行命令时，也有：
```bash
addItem <infile>outfile
```

上式中`std::`指代了命名空间。标准库中所有名字都在命名空间std中。
- [x] practice 1.3 ✅ 2023-11-06 :
```cpp
#include <iostream>
int main(){
	std::cout << "Hello, World" << std::endl;
	return 0;
}
```

- [x] practice 1.6: 不合法，分号代表一个语句的结束，这里可以去除分号 ✅ 2023-11-06
- [x] practice 1.8: ✅ 2023-11-06
```cpp
std::cout << "/*";  
std::cout << std::endl;  
std::cout << "*/";  
std::cout << std::endl;  
// std::cout << /* "*/" " */; //错误  
std::cout << /* "*/" /* "/*" */; //合法  
std::cout << std::endl;
```
可以使用`istream`对象作为条件进行判断，直到输入EOF，或遇到一个无效输入例如读入的值不是一个整数时，istream对象的状态会变为无效。处于无效状态的istream对象会使条件变为假。在Windows中，输入文件结束符的方法是敲c-z，然后按Enter或Return键。unix中则是按c-d。
- [x] practice 1.16: ✅ 2023-11-06
```cpp
#include <iostream>
int main(){
	int value = 0;
	int sum = 0;
	while(std::cin >> value){
		sum += value;
	}
	std::cout << sum << std::endl;
	return 0;
}
```
- [x] [[类是如何存储的呢，对象又是如何存储的呢？]] ✅ 2023-11-06
- 以Sales_item为例：其中涉及了对运算符的重定向是值的了解的。
```cpp
#include "Sales_item.h"  
int main(){  
    Sales_item book1,book2;  
    std::cin >> book1 >> book2;  
    std::cout << book1 + book2 << std::endl;  
    return 0;  
}
```
- 使用文件重定向：addItems.exe \<infile\> outfile
该重定向相当于对stdin与stdout的重定向，在win下与linux中有所不同，可使用gitbash解决：
[在windows的powershell里如何输入输出重定向? - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000042910668)
```bash
./cpp_primer.exe <./res/ibsn.txt> ans.txt
```
- [x] practice 1.20 ✅ 2023-11-08
```cpp
#include <iostream>  
#include "Sales_item.h"  
int main(){  
  
    Sales_item bookItem,sumItem;  
    std::cin >> sumItem;  
    while(std::cin >> bookItem){  
        sumItem += bookItem;  
    }  
    std::cout << sumItem;  
    return 0;  
}
```
- [x] practice 1.23 ✅ 2023-11-08
```cpp
int main(){  
    Sales_item total;  
    int sumNUM = 1;  
    if(std::cin >> total){  
        Sales_item trans;  
        while(std::cin >> trans){  
            if(total.isbn() == trans.isbn()){  
                sumNUM ++;  
            }else{  
                std::cout << "the num of "<< total.isbn()<<" is " << sumNUM << std::endl;  
                total = trans;  
                sumNUM = 1;  
            }  
        }  
        std::cout << "the num of "<< total.isbn()<<" is " << sumNUM << std::endl;  
    }else{  
        std::cerr << "No data?!" << std::endl;  
        return -1;  
    }  
    return 0;  
}
```

# references