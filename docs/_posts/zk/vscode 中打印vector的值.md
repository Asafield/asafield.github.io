---
title: vscode 中打印vector的值
date: 2024-04-19 16:56:46
permalink: /pages/05a9cb/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
在launch.json中加入
windows:
```json
"configurations": [
        {
            "name": "g++.exe - Build and debug active file",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "miDebuggerPath": "gdb",
            "setupCommands": [
                {   // Display content in STL containers pretty
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ],
            "preLaunchTask": "C/C++: g++.exe build active file"
        }
    ]
```

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) 启动",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceFolder}/main",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${fileDirname}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "setupCommands": [
                {
                    "description": "Test",
                    "text": "python import sys;sys.path.insert(0, '/usr/share/gcc-8/python');from libstdcxx.v6.printers import register_libstdcxx_printers;register_libstdcxx_printers(None)",
                    "ignoreFailures": false
                },
                {
                    "description": "为 gdb 启用整齐打印",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                },
            ]
        }

    ]
}

```
# reference
[【工具】——VSCODE调试C++时无法显示Vector，map等容器的值_windows vscode调试c++无法展开vector内容-CSDN博客](https://blog.csdn.net/u011622208/article/details/132083666)
[Unable to Inspect C++ STL content in VS Code - Stack Overflow](https://stackoverflow.com/questions/64189683/unable-to-inspect-c-stl-content-in-vs-code)