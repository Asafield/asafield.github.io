(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{356:function(t,e,a){"use strict";a.r(e);var l=a(8),r=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("create date: 2023-08-22 15:20"),e("br"),t._v("\nStatus: #idea"),e("br"),t._v("\nTags: [[c语言]]")]),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"c语言中volatile关键字的用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c语言中volatile关键字的用法"}},[t._v("#")]),t._v(" c语言中volatile关键字的用法")]),t._v(" "),e("ul",[e("li",[t._v("存在一种编译优化的情况：在程序中，为了提高执行效率，会将存在内存中的变量“复制”在寄存器中，该技术称为高速缓存。但这种情况下，如果存在内存中的变量进行了某种变化，而这变化没有及时地加载到寄存器（高速缓存）中，就无法直接反映在高速缓存上，在ANSI C之前，为了预防这种情况，不会进行编译优化，但在ANSI C之后，如果声明中没有volatile关键字，就会假定变量不会进行变化，使用高速缓存优化，使用之后，防止编译器“自作主张”进行优化。")]),t._v(" "),e("li",[t._v("[[C语言中的 _I _O _IO的用法]]")]),t._v(" "),e("li",[t._v("在嵌入式中如果一个数据只是用于读取，可以用const 进行处理，而不用使用volatile，这是因为只读数据无需考虑数据的多次写入可以导致的数据的变化，因此，可以允许编译器的优化，使得可以快速进行读取。而如果该变量经常发生变化，就需要使用volatile进行优化了")])]),t._v(" "),e("h1",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" references")]),t._v(" "),e("ul",[e("li",[t._v("参考c prime plus 中的12.5.2的章节")])])])}),[],!1,null,null,null);e.default=r.exports}}]);