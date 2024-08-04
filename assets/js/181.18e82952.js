(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{495:function(a,s,t){"use strict";t.r(s);var n=t(8),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("create date: 2024-02-22 08:50"),s("br"),a._v("\nStatus: #idea"),s("br"),a._v("\nTags:  [[os]]")]),a._v(" "),s("hr"),a._v(" "),s("h1",{attrs:{id:"操作系统课程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统课程"}},[a._v("#")]),a._v(" 操作系统课程")]),a._v(" "),s("h2",{attrs:{id:"计算机的启动过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算机的启动过程"}},[a._v("#")]),a._v(" 计算机的启动过程")]),a._v(" "),s("ol",[s("li",[a._v("芯片厂商会规定好各个寄存器的初始值，作为状态机的初始状态")]),a._v(" "),s("li",[a._v("计算机从指定的地址读取第一条指令，也就是读取Firmware的第一条指令，Firmware可以是BIOS，UEFI，现在也习惯将UEFI称为BIOS，两个还是有区别的，但实现的功能是一致的。")]),a._v(" "),s("li",[a._v("Firmware加载引导程序，BIOS会尝试从设定的启动顺序中加载对应设备中的引导扇区中的程序，这是存储在硬盘中的一段代码，以往是512个字节，现在没有了这个限制，这段代码会加载操作系统的核心，并移交计算机的控制权给操作系统")]),a._v(" "),s("li",[a._v("操作系统启动")])]),a._v(" "),s("h2",{attrs:{id:"为-bare-metal-编程-编译、链接与加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为-bare-metal-编程-编译、链接与加载"}},[a._v("#")]),a._v(" 为 Bare-Metal 编程：编译、链接与加载")]),a._v(" "),s("p",[a._v("对于main.o(链接前):")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// main.c  ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-asm line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("   0:\tf3 0f 1e fa          \tendbr64 \n   4:\t48 83 ec 08          \tsub    $0x8,%rsp\n   8:\t48 8d 3d 00 00 00 00 \tlea    0x0(%rip),%rdi        # f <main+0xf>\n   f:\te8 00 00 00 00       \tcall   14 <main+0x14>\n  14:\t31 c0                \txor    %eax,%eax\n  16:\t48 83 c4 08          \tadd    $0x8,%rsp\n  1a:\tc3                   \tret \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("ul",[s("li",[a._v("对于这段汇编代码中的 call 14 <main+0x14>，在没有进行链接的情况下，目标函数的位置是通过符号解析来确定的。在编译过程中，编译器会生成符号表，其中包含了函数和变量的名称以及其对应的地址。当编译器遇到 call 指令时，它会根据目标函数的名称进行符号解析，找到该函数的地址。在这种情况下，14 表示的是相对于当前指令的下一条指令的偏移量，并不代表目标函数的实际地址。")]),a._v(" "),s("li",[a._v('在这个上下文中，我们可以推测 say("hello\\n") 是一个函数调用，该函数接受一个指向字符串的指针作为参数。在 x86-64 架构中，函数调用时，函数的参数通常通过寄存器传递。在这里，将当前指令的地址加载到 %rdi 寄存器中，可能是为了将该地址作为字符串参数的指针传递给 say 函数。请注意，这段代码是在 main.o 中，还没有链接到 say.o 中的 say 函数。因此，在这个阶段，编译器无法确定 say 函数的确切地址，所以使用了当前指令的地址来暂时代替。在链接过程中，将会解析符号引用，将正确的地址替换到该指令中。总而言之，lea 0x0(%rip), %rdi 的目的是将当前指令的地址加载到 %rdi 寄存器中，可能作为参数传递给后续的函数调用（在这里是 say("hello\\n")）。具体的地址解析和链接过程将在链接器中完成。')])]),a._v(" "),s("h1",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" references")]),a._v(" "),s("p",[a._v("https://jyywiki.cn/AbstractMachine/AM_Programs.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);