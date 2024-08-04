(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{371:function(e,s,t){"use strict";t.r(s);var a=t(8),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("create date: 2023-11-05 19:28"),s("br"),e._v("\nStatus: #idea"),s("br"),e._v("\nTags: [[c语言]]")]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"c语言中的编译问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c语言中的编译问题"}},[e._v("#")]),e._v(" c语言中的编译问题")]),e._v(" "),s("p",[e._v("在c语言中，为了防止同一个头文件被同时多次包含，会使用：")]),e._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("ifndef")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[e._v("xx")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("xx")]),e._v(" ")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("endif")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("来避免该问题，在头文件的开头，使用“#ifndef”关键字，判断标号“__LED_H”是否被定义，若没有被定义，则从“#ifndef”至“#endif”关键字之间的内容都有效， 也就是说，这个头文件若被其它文件“#include”，它就会被包含到其该文件中了，且头文件中紧接着使用“#define”关键字定义上面判断的标号“__LED_H”。 当这个头文件被同一个文件第二次“#include”包含的时候， 由于有了第一次包含中的“#define __LED_H”定义，这时再判断“#ifndef __LED_H”， 判断的结果就是假了，从“#ifndef”至“#endif”之间的内容都无效，从而防止了同一个头文件被包含多次， 编译时就不会出现“redefine（重复定义）”的错误了。")]),e._v(" "),s("p",[e._v("一般来说，我们不会直接在C的源文件写两个“#include”来包含同一个头文件，但可能因为头文件内部的包含导致重复， 这种代码主要是避免这样的问题。如“bsp_led.h”文件中使用了“#include “stm32F407xx.h” ”语句，按习惯， 可能我们写主程序的时候会在main文件写“#include “bsp_led.h” 及#include “stm32F407xx.h””， 这个时候“stm32F407xx.h”文件就被包含两次了，如果没有这种机制，就会出错。")]),e._v(" "),s("h1",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" references")])])}),[],!1,null,null,null);s.default=n.exports}}]);