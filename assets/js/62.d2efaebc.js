(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{381:function(t,r,a){"use strict";a.r(r);var s=a(8),_=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("create date: 2023-10-23 20:31"),r("br"),t._v("\nStatus: #idea"),r("br"),t._v("\nTags: [[c语言]]")]),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"duker-introductory-c-programming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#duker-introductory-c-programming"}},[t._v("#")]),t._v(" duker introductory c programming")]),t._v(" "),r("h2",{attrs:{id:"测试代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试代码"}},[t._v("#")]),t._v(" 测试代码：")]),t._v(" "),r("h3",{attrs:{id:"黑盒测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#黑盒测试"}},[t._v("#")]),t._v(" 黑盒测试")]),t._v(" "),r("p",[t._v("黑盒可以在进行程序设计之前完成，考虑对各种情况下的用例进行测试：")]),t._v(" "),r("ul",[r("li",[t._v("空集合")]),t._v(" "),r("li",[t._v("正数、 负数、 零")]),t._v(" "),r("li",[t._v("数组中的重复数据")]),t._v(" "),r("li",[t._v("字符中的特殊字符")])]),t._v(" "),r("h3",{attrs:{id:"白盒测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#白盒测试"}},[t._v("#")]),t._v(" 白盒测试：")]),t._v(" "),r("ul",[r("li",[t._v("语句覆盖率\n已经设计的程序中是否所有分支都有用例进行测试")]),t._v(" "),r("li",[t._v("决策覆盖率\n程序设计中是否有未进行列出的分支，有的话要设计用例对该分支进行测试")]),t._v(" "),r("li",[t._v("路径覆盖率\n对所有的决策路径进行覆盖，如果说决策覆盖率是要求对于每个存在分支的节点来说需要存在用例，那么路径覆盖率就是要求对所有的分支进行排列组合，如果说每个节点有两个分支，有n个节点 ，那就是有$2^n$个分支。\n"),r("ul",[r("li",[r("img",{attrs:{src:"https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231023205238.png",alt:"image.png"}})])])])]),t._v(" "),r("h2",{attrs:{id:"生成测试用例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成测试用例"}},[t._v("#")]),t._v(" 生成测试用例")]),t._v(" "),r("ul",[r("li",[t._v("迭代生成全部用例")]),t._v(" "),r("li",[t._v("生成随机用例")])]),t._v(" "),r("h3",{attrs:{id:"如何验证生成的用例呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何验证生成的用例呢"}},[t._v("#")]),t._v(" 如何验证生成的用例呢？")]),t._v(" "),r("ul",[r("li",[t._v("再写一种可以用于验证的代码")]),t._v(" "),r("li",[t._v("写一个更简单但算法复杂度更高的算法，这样的算法更好写出来，可以不那么费力地开发测试算法")]),t._v(" "),r("li",[t._v("测试结果的属性，例如，计算平方根时，验证结果只需要将计算的结果进行平方得到与原本的输入进行对比，使之误差在同一个范围之内即可。")]),t._v(" "),r("li",[t._v("编写更为复杂的测试用例，以测试结果的不同属性")])]),t._v(" "),r("h3",{attrs:{id:"在调试过程中使用assert进行判断"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在调试过程中使用assert进行判断"}},[t._v("#")]),t._v(" 在调试过程中使用assert进行判断")]),t._v(" "),r("ul",[r("li",[t._v("在生产版本中可以使用 -DNDEBUG 参数进行设置，禁用所有的assert")])]),t._v(" "),r("h2",{attrs:{id:"科学的调试方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#科学的调试方法"}},[t._v("#")]),t._v(" 科学的调试方法")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://pic-1312640559.cos.ap-chengdu.myqcloud.com//img/20231024132131.png",alt:"image.png"}})]),t._v(" "),r("ul",[r("li",[t._v("观察到现象，通常是可能出现问题的时候，或是已经发现问题的时候")]),t._v(" "),r("li",[t._v("提出问题，错误发生在哪里，是什么导致了错误的发生")]),t._v(" "),r("li",[t._v("收集信息\n"),r("ul",[r("li",[t._v("通过print打印信息进行调试")]),t._v(" "),r("li",[t._v("使用调试工具进行调试")]),t._v(" "),r("li",[t._v("结合两者，例如在使用调试工具打上断点时，尝试添加调试语句print（编辑语言与ide是否支持待测试）")])])]),t._v(" "),r("li",[t._v("形成可以验证、 操作的假说\n对假说进行验证是很有必要的，除非是在极为明显就可以看出错误的时候。不加验证地相信假说去修改代码，很容易陷入进去，花费更多的时间\n"),r("ul",[r("li",[t._v("权衡修复代码的时间来判断是否要重构所有的代码")])])])]),t._v(" "),r("h3",{attrs:{id:"debug工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug工具"}},[t._v("#")]),t._v(" debug工具")]),t._v(" "),r("ul",[r("li",[t._v("使用valgrind进行内存方面的错误检测")]),t._v(" "),r("li",[t._v("使用gdb工具进行调试")])]),t._v(" "),r("h1",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" references")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/gdb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. gdb 调试利器 — Linux Tools Quick Tutorial (linuxtools-rst.readthedocs.io)"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);