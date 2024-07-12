---
title: git学习
date: 2023-12-19 15:02:44
permalink: /pages/f095ac/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2023-01-16 18:33  
Status: #notes 
Tags: [[git]] 

---

# git学习	
### 原理 
![image.png](https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20230923170908.png)

### gitignore
```text
在 .gitignore 文件中，每一行的忽略规则的语法如下：
1、空格不匹配任意文件，可作为分隔符，可用反斜杠转义
2、以“＃”开头的行都会被 Git 忽略。即#开头的文件标识注释，可以使用反斜杠进行转义。
3、可以使用标准的glob模式匹配。所谓的glob模式是指shell所使用的简化了的正则表达式。
4、以斜杠"/"开头表示目录；"/"结束的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件；"/"开始的模式匹配项目跟目录；如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录。
5、以星号"*"通配多个字符，即匹配多个任意字符；使用两个星号"**" 表示匹配任意中间目录，比如a/**/z可以匹配 a/z, a/b/z 或 a/b/c/z等。
6、以问号"?"通配单个字符，即匹配一个任意字符；
7、以方括号"[]"包含单个字符的匹配列表，即匹配任何一个列在方括号中的字符。比如[abc]表示要么匹配一个a，要么匹配一个b，要么匹配一个c；如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配。比如[0-9]表示匹配所有0到9的数字，[a-z]表示匹配任意的小写字母）。
8、以叹号"!"表示不忽略(跟踪)匹配到的文件或目录，即要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。需要特别注意的是：如果文件的父目录已经被前面的规则排除掉了，那么对这个文件用"!"规则是不起作用的。也就是说"!"开头的模式表示否定，该文件将会再次被包含，如果排除了该文件的父级目录，则使用"!"也不会再次被包含。可以使用反斜杠进行转义。
```

注意区分/结尾时为文件夹，没有/结尾时为文件
想象一个场景：假如我们只需要管理/mtk/目录中的one.txt文件，这个目录中的其他文件都不需要管理，那么.gitignore规则应写为：：
```
/mtk/*
!/mtk/one.txt
```

假设我们只有过滤规则，而没有添加规则，那么我们就需要把/mtk/目录下除了one.txt以外的所有文件都写出来！
注意上面的/mtk/* 不能写为/mtk/，否则父目录被前面的规则排除掉了，one.txt文件虽然加了!过滤规则，也不会生效！
# references
[[Git].gitignore文件的配置使用 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/52885189)
[Git忽略文件.gitignore详解_ThinkWon的博客-CSDN博客_gitignore](https://blog.csdn.net/ThinkWon/article/details/101447866)
[.gitignore 规则示例 - 随风去远方 - 博客园 (cnblogs.com)](https://www.cnblogs.com/19930521zhang/p/16163852.html)
[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)

