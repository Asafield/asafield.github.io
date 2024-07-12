---
title: IP协议
date: 2023-12-19 15:02:44
permalink: /pages/1b67bd/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---
create date: 2023-02-19 16:41  
Status: #notes
Tags: [[计算机网络]]  

---

# IP协议

- 子网聚集时，在路由表上查询时，如果有多个匹配，则更精确的匹配具有更高的优先级。
- NAT转换的过程中，由路由器下的设备主动发起通信时，会在路由器中留下转换表，但如果从外网中主机主动发起请求时，是无法与内网设备通信的，可以使用NAT穿越的方式解决问题：
	- 方案1：固定NAT表映射关系；
	- 方案2：UPnP。内网主机可以查询空闲的表向，然后进行端口的映射。
	- 方案3：中继
- IPV6: 
	- 地址位数增加
	- 不用路由器对分组分片
	- 头部：
		- NEXT HEADER
	- 与ipv4的过渡：平滑过渡。
# references
[4.3 IP Internet Protocol_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1JV411t7ow?p=32&vd_source=e0607026c50ab3e4212e710a0fc5e8ed)