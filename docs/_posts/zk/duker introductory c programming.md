---
title: duker introductory c programming
date: 2023-12-19 15:02:44
permalink: /pages/ae937f/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-10-23 20:31  
Status: #idea  
Tags: [[c语言]]

---

# duker introductory c programming
## 测试代码：
### 黑盒测试
黑盒可以在进行程序设计之前完成，考虑对各种情况下的用例进行测试：
- 空集合
- 正数、 负数、 零
- 数组中的重复数据 
- 字符中的特殊字符 
### 白盒测试：
- 语句覆盖率
	已经设计的程序中是否所有分支都有用例进行测试
- 决策覆盖率
	程序设计中是否有未进行列出的分支，有的话要设计用例对该分支进行测试
- 路径覆盖率
	对所有的决策路径进行覆盖，如果说决策覆盖率是要求对于每个存在分支的节点来说需要存在用例，那么路径覆盖率就是要求对所有的分支进行排列组合，如果说每个节点有两个分支，有n个节点 ，那就是有$2^n$个分支。
	- ![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231023205238.png)

## 生成测试用例
- 迭代生成全部用例
- 生成随机用例
### 如何验证生成的用例呢？
- 再写一种可以用于验证的代码
- 写一个更简单但算法复杂度更高的算法，这样的算法更好写出来，可以不那么费力地开发测试算法
- 测试结果的属性，例如，计算平方根时，验证结果只需要将计算的结果进行平方得到与原本的输入进行对比，使之误差在同一个范围之内即可。
- 编写更为复杂的测试用例，以测试结果的不同属性
### 在调试过程中使用assert进行判断
- 在生产版本中可以使用 -DNDEBUG 参数进行设置，禁用所有的assert

## 科学的调试方法
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231024132131.png)
- 观察到现象，通常是可能出现问题的时候，或是已经发现问题的时候
- 提出问题，错误发生在哪里，是什么导致了错误的发生
- 收集信息
	- 通过print打印信息进行调试
	- 使用调试工具进行调试
	- 结合两者，例如在使用调试工具打上断点时，尝试添加调试语句print（编辑语言与ide是否支持待测试）
- 形成可以验证、 操作的假说 
	对假说进行验证是很有必要的，除非是在极为明显就可以看出错误的时候。不加验证地相信假说去修改代码，很容易陷入进去，花费更多的时间
	- 权衡修复代码的时间来判断是否要重构所有的代码
### debug工具
- 使用valgrind进行内存方面的错误检测 
- 使用gdb工具进行调试
# references
[1. gdb 调试利器 — Linux Tools Quick Tutorial (linuxtools-rst.readthedocs.io)](https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/gdb.html)