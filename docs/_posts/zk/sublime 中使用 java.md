---
title: sublime 中使用 java
date: 2023-12-19 15:02:44
permalink: /pages/355976/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-09 17:16  
Status: #notes
Tags: [[java]] 

---

# sublime 中使用 java
## **JavaC.sublime-build**

```json
{
    "cmd": ["javac", "$file_name", "&&", "start","cmd", "/k", "java", "$file_base_name"],
    "shell": true,
    "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
    "working_dir": "$file_path",
    "selector": "source.java",
    "encoding": "GBK",
    "variants": [
        {
            "name": "Terminal",
            "cmd": ["javac", "$file_name", "&&", "start","cmd", "/k", "java", "$file_base_name"],
            "shell_cmd": "",
        },
        {
            "name": "Build",
            "quiet": true,
            "shell_cmd": "javac $file_name && java $file_base_name && del $file_base_name.class",
        }
    ]
}
```


# references
[Sublime Text 编译/运行Java程序 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/25820430)