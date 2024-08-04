(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{360:function(t,a,e){"use strict";e.r(a);var r=e(8),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("create date: 2023-01-31 12:50"),a("br"),t._v("\nStatus: #notes\nTags: [[计算机网络]]")]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),a("p",[a("strong",[t._v("别名到规范名字的转换")])]),t._v(" "),a("h5",{attrs:{id:"dns提供的具体服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns提供的具体服务"}},[t._v("#")]),t._v(" DNS提供的具体服务：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("提供了主机名到ip地址映射的查询服务")])]),t._v(" "),a("li",[a("p",[t._v("提供"),a("strong",[t._v("主机别名")]),t._v("（host aliasing）服务,有着复杂主机名的主机可以有一个或者多个别名，例如："),a("strong",[t._v("aaa.xxx.com")]),t._v("的主机可能还会有"),a("strong",[t._v("aaa.com")]),t._v("和"),a("strong",[t._v("xxx.com")]),t._v("两个别名，在这种情况下，"),a("strong",[t._v("aaa.xxx.com")]),t._v("叫做"),a("strong",[t._v("规范主机别名")]),t._v("（canonical hostname）。主机别名的特征是比规范主机名更容易记忆，DNS可以提供根据主机别名获取规范主机名的服务。")])]),t._v(" "),a("li",[a("p",[t._v("提供"),a("strong",[t._v("负载分配服务")]),t._v("（load distribution）。一般来说，被繁忙访问的大型站点是分布在多台服务器上的，这个时候，主机名和ip地址就不是一一对应的关系，而是一个主机名对应一个ip地址的集合。"),a("strong",[t._v("在大量的，连续的多次访问中，DNS通过旋转ip地址达到负载均衡的目的")]),t._v("：在向这个主机名发出DNS请求的时候，服务器会用包含全部这些ip地址的报文进行回答，但在每个不同的回答中会旋转这些ip地址的摆放顺序，"),a("strong",[t._v("而客户机总向报文中排在最前面的ip地址发出请求")]),t._v("。")])])]),t._v(" "),a("p",[t._v("别名::www.123.com指向 主机名::host.mydomain.com 指向 主机IP::127.0.0.1　　别名::mail.123.com 指向 主机名::host.mydomain.com 指向 主机IP::127.0.0.1\n无论是哪个别名,,被访问时首先指向主机名,,然后对主机名进行解析,,解析结果按原路返回")]),t._v(" "),a("h1",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" references")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/2cdc7b57aaa8",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNS(域名系统) 学习笔记 - 简书 (jianshu.com)"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/wo101377/article/details/29803321",target:"_blank",rel:"noopener noreferrer"}},[t._v("(7条消息) DNS的别名_wo101377的博客-CSDN博客_dns 别名"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/struggle_w/article/details/123493782?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-123493782-blog-29803321.pc_relevant_3mothn_strategy_and_data_recovery&spm=1001.2101.3001.4242.1&utm_relevant_index=3",target:"_blank",rel:"noopener noreferrer"}},[t._v("(7条消息) DNS(域名系统)详解_dns系统_Just One.的博客-CSDN博客"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);