---
title: vim使用技巧
date: 2023-12-19 15:02:44
permalink: /pages/445ef3/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-09-25 20:36  
Status: #idea  
Tags: [[vim]]

---

# vim使用技巧
## buffer的使用

-  :buffers 或者 :ls 来查看有哪些buffers
- :b1 进行buffer的跳转
- 交换两个窗口内的buffer： \<C-w r>

## 设置tabsize

- set ts=4

## 格式化内容

- [[vim中自动格式化代码，改变缩进]]

## 编译的使用
在vim中，可以直接使用输入`make`命令进行编译

## 删除指定内容中的空行：

如果你想删除选定内容中的空行，可以使用以下步骤：
进入可视模式：按下 v 进入普通可视模式，或按下 V 进入行可视模式，或按下 Ctrl+v 进入块可视模式。选择适合你的选定方式。
选择内容：使用方向键或 hjkl 键来选择你想要删除空行的内容。你可以使用移动命令（如 w、b、/ 等）来扩展选择范围。
删除空行：按下 : 进入命令模式，然后输入 g/^$/d 并按下回车键。这将删除选定内容中的空行。
退出可视模式：按下 Esc 键退出可视模式。
注意：这种方法仅适用于在可视模式下选择的内容。如果你想要删除整个文件中的空行，而不是特定的选定内容，可以使用之前提到的全局命令 :g/^$/d。
确保在执行任何修改操作之前，先保存文件或备份文件，以防意外修改。
# references
[在Vim中直接调用make进行编译 - 凉风SK - 博客园 (cnblogs.com)](https://www.cnblogs.com/uestcliming666/p/13193979.html)