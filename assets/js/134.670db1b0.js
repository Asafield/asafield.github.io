(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{447:function(t,a,r){"use strict";r.r(a);var v=r(8),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("create date: 2023-03-16 19:51"),a("br"),t._v("\nStatus: #notes  #reprint\nTags: [[vim]]")]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"vim标记mark的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim标记mark的使用"}},[t._v("#")]),t._v(" vim标记mark的使用")]),t._v(" "),a("p",[t._v("我们可以对文本进行标记，以方便在文档的不同位置间跳转。")]),t._v(" "),a("h2",{attrs:{id:"创建标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建标记"}},[t._v("#")]),t._v(" "),a("strong",[t._v("创建标记")])]),t._v(" "),a("p",[t._v("将光标移到某一行，使用ma命令进行标记。其中，m是标记命令，_a_是所做标记的名称。")]),t._v(" "),a("p",[t._v("可以使用小写字母a-z或大写字母A-Z中的任意一个做为标记名称。小写字母的标记，仅用于当前缓冲区；而大写字母的标记，则可以跨越不同的缓冲区。例如，你正在编辑File1，但仍然可以使用'A命令，移动到File2中创建的标记A。")]),t._v(" "),a("h2",{attrs:{id:"跳转标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳转标记"}},[t._v("#")]),t._v(" "),a("strong",[t._v("跳转标记")])]),t._v(" "),a("p",[t._v("创建标记后，可以使用'a命令，移动到指定标记行的首个非空字符。这里'是单引号。也可以使用"),a("code",[t._v("a命令，移到所做标记时的光标位置。这里")]),t._v("是反引号（也就是数字键1左边的那一个）。")]),t._v(" "),a("h2",{attrs:{id:"列示标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列示标记"}},[t._v("#")]),t._v(" "),a("strong",[t._v("列示标记")])]),t._v(" "),a("p",[t._v("利用:marks命令，可以列出所有标记。这其中也包括一些系统内置的特殊标记（Special marks）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/v2-3ad270e389126612cd2e5264a0930a4e_b.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v(".")]),t._v(" 最近编辑的位置")]),t._v(" "),a("p",[a("strong",[t._v("0-9")]),t._v(" 最近使用的文件")]),t._v(" "),a("p",[a("strong",[t._v("∧")]),t._v(" 最近插入的位置")]),t._v(" "),a("p",[a("strong",[t._v("'")]),t._v(" 上一次跳转前的位置")]),t._v(" "),a("p",[a("strong",[t._v('"')]),t._v(" 上一次退出文件时的位置")]),t._v(" "),a("p",[a("strong",[t._v("[")]),t._v(" 上一次修改的开始处")]),t._v(" "),a("p",[a("strong",[t._v("]")]),t._v(" 上一次修改的结尾处")]),t._v(" "),a("h2",{attrs:{id:"删除标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除标记"}},[t._v("#")]),t._v(" "),a("strong",[t._v("删除标记")])]),t._v(" "),a("p",[t._v("如果删除了做过标记的文本行，那么所做的标记也就不存了。我们不仅可以利用标记来快速移动，而且还可以使用标记来删除文本，例如在某一行用ma做了标记，然后就可以使用d'a来删掉这一行。当然，我们也可以使用y'a命令就可以来复制这一行了。")]),t._v(" "),a("p",[t._v("使用:delmarks a b c命令，可以删除某个或多个标记；而:delmarks! 命令，则会删除所有标记。")]),t._v(" "),a("p",[t._v("利用:help mark-motions命令，可以查看关于标记的更多帮助信息。")]),t._v(" "),a("h2",{attrs:{id:"plugin-vim-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-vim-signature"}},[t._v("#")]),t._v(" "),a("strong",[t._v("plugin: vim-signature")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/kshenoy/vim-signature",target:"_blank",rel:"noopener noreferrer"}},[t._v("vim-signature"),a("OutboundLink")],1),t._v("插件用于在屏幕最左侧显示标记。使用以下命令，可以定义标记的显示风格：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/v2-5debae84f95300ed1ef227683aa46059_b.png",alt:""}})]),t._v(" "),a("p",[t._v("使用:help Signature命令，可以查看vim-signature插件定义的快捷键，用于在标记间快速移动。")]),t._v(" "),a("h1",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" references")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25585188",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIM学习笔记 标记(Mark) - 知乎 (zhihu.com)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);