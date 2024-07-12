---
title: neovim配置
date: 2023-12-19 15:02:44
permalink: /pages/4ef94b/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-03-30 15:57  
Status: #notes
Tags: [[vim]]

---

# neovim配置
- :help config 可以查看存放配置文件的位置
- [x] 上传配置文件 ✅ 2023-12-08

## 插件使用：
### 插件管理：
- `folke/lazy.nvim`:
  该插件如果设置了某个插件的config或者opt参数，就会自动调用`setup{}`，对于某些插件来说，如果`setup{}`需要在最后调用的话，就可能导致某些配置无效，例如`toggleterm`插件中设置`powershell`作为默认的终端就会这样，应该不使用推荐配置中的`config = true`。
### 终端插件：
- **[akinsho/toggleterm.nvim: A neovim lua plugin to help easily manage multiple terminal windows (github.com)](https://github.com/akinsho/toggleterm.nvim)**：
	- ctrl + \ ：打开终端
- ntree:
	- \<leader\>+e：打开目录
- 
### 问题
- paser 中无法解析.so文件，是gcc的版本问题
# references
[FAQ · neovim/neovim Wiki (github.com)](https://github.com/neovim/neovim/wiki/FAQ#where-should-i-put-my-config-vimrc)
[【全程讲解】Neovim从零配置成属于你的个人编辑器_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Td4y1578E/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=e0607026c50ab3e4212e710a0fc5e8ed)