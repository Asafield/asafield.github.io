(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{471:function(a,t,v){"use strict";v.r(t);var _=v(8),s=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("create date: 2023-09-06 14:34"),t("br"),a._v("\nStatus: #idea"),t("br"),a._v("\nTags:")]),a._v(" "),t("hr"),a._v(" "),t("h1",{attrs:{id:"取模与取余的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取模与取余的区别"}},[a._v("#")]),a._v(" 取模与取余的区别")]),a._v(" "),t("p",[a._v("通常取模运算也叫取余运算，它们返回的结果都是余数。")]),a._v(" "),t("p",[a._v("对于整数a，b来说，取模运算或者取余运算的方法要分如下两步进行：")]),a._v(" "),t("ul",[t("li",[a._v("第一步：求整数商"),t("code",[a._v("c = a/b")])]),a._v(" "),t("li",[a._v("第二步：计算模或者余数"),t("code",[a._v("r = a - (c * b)")])])]),a._v(" "),t("p",[a._v("取模运算和取余运算唯一的差别在于第一步。")]),a._v(" "),t("p",[t("strong",[a._v("取模运算在计算整数商时，采用的是向负无穷大的方向取整。")])]),a._v(" "),t("p",[t("strong",[a._v("取余运算在计算机整数商时，采用的是向0方向取整。")])]),a._v(" "),t("h2",{attrs:{id:"举个栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个栗子"}},[a._v("#")]),a._v(" 举个栗子：")]),a._v(" "),t("p",[a._v("a = 4 , b = -3")]),a._v(" "),t("p",[t("strong",[a._v("第一步：")]),a._v(" 4/(-3) = -1.333...3..3(无限循环)")]),a._v(" "),t("p",[a._v("对于取模运算，得到的整数商将为-2（向负无穷取整）")]),a._v(" "),t("p",[a._v("对于取余运算，得到的整数商将为-1（向0取整）")]),a._v(" "),t("p",[a._v("取模结果为 c = -2")]),a._v(" "),t("p",[a._v("取余结果为 c = -1")]),a._v(" "),t("p",[t("strong",[a._v("第二步：")])]),a._v(" "),t("p",[a._v("对于取模运算，r = 4 - ((-2) * (-3)) = -2")]),a._v(" "),t("p",[a._v("对于取余运算，r = 4 - ((-1) * (-3)) = 1")]),a._v(" "),t("p",[a._v("故，取模结果为-2，取余结果为1。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("如果a，b符号相同，得到的整数商必然大于0，因此取模运算和取余运算取整的方向相同，因此得到的结果相同。")])]),a._v(" "),t("li",[t("p",[a._v("如果a，b符号不同，得到的整数商必然小于0,取模运算向负无穷方向取整，取余运算向0方向取整，两个方向不同，得到的结果必然不同。并且取模运算得到的结果的符号与b的符号相同，取余运算的结果的符号与a的结果相同。")])])]),a._v(" "),t("p",[a._v("为什么取模运算结果的符号和b的符号相同，取余运算结果的符号和符号a相同呢？")]),a._v(" "),t("p",[a._v("这里穷举法证明一下，首先前提是a，b符号不同。")]),a._v(" "),t("ul",[t("li",[a._v("a为正，b为负。得到的整数商为负，因为取模运算是向负无穷取整，假设得到的商为"),t("code",[a._v("-1.xxx")]),a._v("（任意一个负数都成立，这里只是举个栗子），取整后变为"),t("code",[a._v("c = -2")]),a._v("，计算"),t("code",[a._v("r = a - (c * b)")]),a._v("时明显是不够减，得到的结果是负的，与b符号相同。而取余运算第一步取整后"),t("code",[a._v("c = -1")]),a._v("很明显够减，得到的结果是正的，与a符号相同。")]),a._v(" "),t("li",[a._v("a为负，b为正。得到的整数商为负。原理一样，相信你自己也能证明。")])]),a._v(" "),t("p",[a._v("C++中"),t("code",[a._v("%")]),a._v("作的是取余运算，python中的"),t("code",[a._v("%")]),a._v("作的是模运算。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/2/16e2a0fa2a633a5e~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/2/16e2a0fbb4d31a7f~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/2/16e2a0ccea5ce6ed~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png",alt:""}})]),a._v(" "),t("h1",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" references")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903985762025485",target:"_blank",rel:"noopener noreferrer"}},[a._v("你知道取模与取余的差别吗？ - 掘金 (juejin.cn)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);