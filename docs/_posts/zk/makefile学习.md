---
title: makefile学习
date: 2023-12-19 15:02:44
permalink: /pages/ee223d/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-09-26 09:23  
Status: #idea  
Tags: [[makefile]] [[编译]] 

---

# makefile学习
## makefile的格式
```makefile
myProgram:oneFile.o anotherFile.o
	gcc -o myProgram oneFile.o anotherFile.o
oneFile.o: oneFile.c oneHeader.h someHeader.h
	gcc -std=gnu99 -pedantic -Wall -c oneFile.c
anotherFile.o: anotherFile.c anotherHeader.h someHeader.h
	gcc -std=gnu99 -pedantic -Wall -c anotherFile.c
```

## 编译顺序与规则 

 回顾一下，make的输入是一个Makefile，其中包含一个或多个规则，这些规则指定如何从其前提条件（所依赖的文件）生成目标。规则由目标规范组成，后面跟着一个冒号，然后是一系列的前提条件文件。在前提条件列表之后，有一个换行符，然后是重建该目标所需的任何命令。命令可以分布在多行上；但是，每行必须以TAB字符开头（多个空格无效，并且意外使用空格而不是TAB通常是Makefile问题的原因之一）。

当您运行make时，可以指定要构建的特定目标（如果没有指定，则make将使用Makefile中的第一个目标作为默认目标）。为了构建目标，make首先会检查其是否已经更新。首先检查目标是否已经更新需要确保每个前提条件是否已经更新并可能重新构建它们。此过程在make遇到存在但不是任何规则的目标文件时结束i（oneFile.o depends on one .c and two .h files, none of which are targets of other rules. Therefore, make does not need to rebuild them.）。这样的文件被认为是最新的。

一旦确保了所有目标所依赖的文件都是最新的，make就会检查目标本身是否需要（重新）构建。首先，make检查目标文件是否存在。如果不存在，则必须构建它。如果目标文件已经存在，则make将比较其最后修改时间（由所有主要文件系统跟踪）与规则中指定的每个前提条件的最后修改时间。如果任何依赖项比目标文件更新，则目标已过时，必须重新构建。请注意，如果在此过程中重新构建了任何前提条件，则该文件的修改时间将比目标更新，从而强制重新构建目标。

## 变量

我们编写的示例Makefile存在大量的复制粘贴操作，而我们希望在任何情况下都避免这样做。特别是，我们可能会注意到在许多地方都使用了相同的编译选项。如果我们想要更改这些选项（例如，打开优化或添加调试标志），我们将不得不在每个地方都进行更改。相反，我们更希望将编译选项放入一个变量中，并在相关规则的每个地方使用该变量。例如，我们可以将前面的示例更改为以下内容：

```makefile
CFLAGS=-std=gnu99 -pedantic -Wall
myProgram: oneFile.o anotherFile.o
gcc -o myProgram oneFile.o anotherFile.o
oneFile.o: oneFile.c oneHeader.h someHeader.h
gcc $(CFLAGS) -c oneFile.c
anotherFile.o: anotherFile.c anotherHeader.h someHeader.h
gcc $(CFLAGS) -c anotherFile.c
在这里，我们定义了一个名为CFLAGS的变量，将其设置为我们所需的编译标志。然后，我们通过在规则中将变量名放在$()中来使用该变量。请注意，对Makefile的更改不会自动使使用它们的目标过时，因此如果您只是在更改后输入make命令，它们不一定会使用新的标志重新构建（尽管您可以使它们都依赖于Makefile）。


```

在这里，我们定义了一个名为CFLAGS的变量，将其设置为我们所需的编译标志。然后，我们通过在规则中将变量名放在$()中来使用该变量。请注意，对Makefile的更改不会自动使使用它们的目标过时，因此如果您只是在更改后输入make命令，它们不一定会使用新的标志重新构建（尽管您可以使它们都依赖于Makefile）。

## clean
一个常见的Makefile中的目标是clean目标。clean目标有点不同，它实际上不创建一个名为clean的文件（因此被称为"虚拟"目标）。相反，它是一个旨在删除编译程序、所有目标文件、所有编辑器备份（\*.c~ \*.h~）以及您可能认为是杂乱的任何其他文件的目标。该目标可用于强制重新构建整个程序（例如，在更改Makefile中的各种编译标志后），或者如果您只需要清理目录，只保留源文件（例如，如果您要将源文件压缩或打包以分发给他人）。

以下是一个示例Makefile中的clean目标的定义：
```makefile
.PHONY: clean
clean:
    rm -f myProgram *.o *.c~ *.h~
```
在这个示例中，clean目标使用rm命令删除了myProgram、所有.o文件以及所有的~文件。rm命令使用-f选项来强制删除文件，即使文件不存在也不会产生错误。您可以根据需要向clean目标添加其他文件或目录的清理操作。

要执行clean目标，只需在命令行中输入"make clean"即可。这将触发Makefile中定义的clean目标，并执行相应的清理操作。

## 通用规则
## 模式规则与通配符的区分

>模式规则（Pattern Rules）是Makefile中的一种特殊规则，用于定义一组根据模式匹配生成目标文件的规则。在Makefile中，\*（星号）通配符本身并不是模式规则，而是用于匹配文件名中的任意字符序列的通配符。模式规则通常使用%通配符来匹配文件名的部分。\*通配符可以在Makefile中的其他位置使用，例如在目标、依赖项、命令或变量中，以展开文件名或进行通配符匹配。它用于匹配文件系统中的实际文件名，而不是用于定义模式规则。模式规则是一种特殊的规则类型，用于描述源文件与目标文件之间的依赖关系，并通过模式匹配生成目标文件。模式规则使用%通配符来匹配文件名的部分，并定义相应的命令来生成目标文件。

- 使用`%`符号来进行用于匹配模式规则中的部分文件名
- 使用`$<`作为自动化变量（, which make will set to the name of the first prerequisite of the rule (in this case, the name of the .c file）
- 通过再额外定义一条规则包含头文件`.h`，为了实现补充而非替换的效果，不能加上命令
- Note that `$@` in OUTPUT_OPTION is a special variable which is the name of the current target (much like $< is the name of the first prerequisite).
```makefile
CFLAGS=-std=gnu99 -pedantic -Wall
myProgram: oneFile.o anotherFile.o
	gcc -o myProgram oneFile.o anotherFile.o
%.o:%.c
	gcc $(CFLAGS) -c $<
 .PHONY: clean            
 clean:
	 rm -f myProgram *.o *.c~ *.h~
oneFile.o: oneHeader.h someHeader.h
anotherFile.o: anotherHeader.h someHeader.h
```
- [ ] 疑惑：模式规则是如何知道哪些是正确的匹配呢，其匹配的输入是什么呢？是文件目录下的所有文件名吗？还是前面定义的规则进行推理得到的呢？

当然，手动管理所有这些依赖性信息将是乏味且容易出错的。程序员必须找出每个源文件传递包含的每个文件，并在代码更改时保持信息最新。相反，有一个名为 makedepend 的工具，它将编辑 Makefile 以将所有这些信息放在末尾。在最简单的用法中，makedepend 将所有源文件（即所有 .c 和/或 .cpp 文件）作为参数，并编辑 Makefile。还可以给它多种选项，例如 -I path 告诉它在指定路径中查找包含文件。有关更多详细信息，请参阅 man makedepend 。
`# DO NOT DELETE` 是由 makedepend 自动生成的注释。当运行 `makedepend` 命令时，它会分析源文件中的 `#include` 语句，并将生成的依赖关系写入 Makefile 中。为了确保这些依赖关系不会被意外删除，makedepend 会在生成的依赖关系部分添加 `# DO NOT DELETE` 注释。这样，即使在后续运行 `makedepend` 命令时重新生成依赖关系，也不会删除这部分注释。开发者在维护 Makefile 时应注意不要删除或修改这个注释，以保持依赖关系的正确性。
## 结合内置规则 
```makefile
CC = gcc
CFLAGS = -std=gnu99 -pedantic -Wall
myProgram: oneFile.o anotherFile.o
    gcc -o myProgram oneFile.o anotherFile.o
.PHONY: clean depend
clean:
    rm -f myProgram *.o *.c~ *.h~
depend:
    makedepend anotherFile.c oneFile.c
# DO NOT DELETE
anotherFile.o: anotherHeader.h someHeader.h
oneFile.o: oneHeader.h someHeader.h
```

## 内置函数
解决每次新建文件都可能需要重要修改的问题，通过内置函数解决。自动计算项目中的.c文件，生成.o文件。
使用函数的方法：`$(functionName arg1, arg2,arg3)`。有以下几种：
- $(wildcard pattern)
- $(patsubst pattern, replacement,text)
```makefile
CC = gcc
CFLAGS = -std=gnu99 -pedantic -Wall
SRCS=$(wildcard *.c)
OBJS=$(patsubst %.c,%.o,$(SRCS))
myProgram: $(OBJS)
    gcc -o $@ $(OBJS)
.PHONY: clean depend
clean:
    rm -f myProgram *.o *.c~ *.h~
depend:
    makedepend $(SRCS)
# DO NOT DELETE
anotherFile.o: anotherHeader.h someHeader.h
oneFile.o: oneHeader.h someHeader.h
```

## 同时编译生成两个版本
举例：

```makefile
CC = gcc
CFLAGS = -std=gnu99 -pedantic -Wall -O3
DBGFLAGS = -std=gnu99 -pedantic -Wall -ggdb3 -DDEBUG
SRCS=$(wildcard *.c)
OBJS=$(patsubst %.c,%.o,$(SRCS))
DBGOBJS=$(patsubst %.c,%.dbg.o,$(SRCS))
.PHONY: clean depend all
all: myProgram myProgram-debug
myProgram: $(OBJS)
    gcc -o $@ -O3 $(OBJS)
myProgram-debug: $(DBGOBJS)
    gcc -o $@ -ggdb3 $(DBGOBJS)
%.dbg.o: %.c
    gcc $(DBGFLAGS) -c -o $@ $<
clean:
    rm -f myProgram myProgram-debug *.o *.c~ *.h~
depend:
    makedepend $(SRCS)
    makedepend -a -o .dbg.o  $(SRCS)
# DO NOT DELETE
anotherFile.o: anotherHeader.h someHeader.h
oneFile.o: oneHeader.h someHeader.h
```

## 并行编译
```makefile
make -j4
```


