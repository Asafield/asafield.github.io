---
title: mysql安装配置
date: 2023-12-19 15:02:44
permalink: /pages/d3536c/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-06-26 23:07  
Status: #idea  
Tags: [[mysql]]

---

# mysql安装配置
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/Escorts/article/details/118941623)

**目录**

[前提条件](#t0)

[一、通过官网下载 tar 压缩包或 rpm 安装包来安装。](#t1)

[二、通过 yum 的方式安装](#t2)

[三、安装完后，启动 mysql](#t3)

### 前提条件

 1、查看是否安装了 mysql 服务（有则自行卸载删除）。

```


1.  yum list installed mysql*

3.  rpm –qa|grep mysql*


```

### 一、通过官网下载 tar 压缩包或 rpm 安装包来安装。

**1、确定服务器的基础框架是 arm 架构还是 x86 架构。**

```
uname -m
```

执行示例：

![](https://img-blog.csdnimg.cn/20210721100214142.png)

**2、确定出你需要的系统版本。**

以我的为例，是 CentOS 7 系统。（CentOS 版本是基于 Red Hat 版本开发的）

```
cat /etc/redhat-release
```

执行示例：

![](https://img-blog.csdnimg.cn/20210721101519133.png)

 **3、打开 mysql 官网下载地址。**

[MySQL :: Download MySQL Community Server](https://dev.mysql.com/downloads/mysql/ "MySQL :: Download MySQL Community Server")

**4、选择对应的选项进行下载。**

示例（注意红色箭头标记的关键字）：

 ![](https://img-blog.csdnimg.cn/20210721141248983.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VzY29ydHM=,size_16,color_FFFFFF,t_70)

 **5、通过 WinSCP、XFTP 上传等工具上传服务器并解压。**

①、创建 jdk 安装路径  

```
mkdir /usr/local/mysql
```

②、上传压缩包到任意路径，解压

```
tar -zxvf 安装包 -C 指定目录
```

然后得到若干 rpm 包。

 **6、删除原有的 mariadb，否则可能会报异常。**

①、先查看一下是否已经安装了，

```
rpm -qa|grep mariadb
```

![](https://img-blog.csdnimg.cn/img_convert/4ba71c0637eb86b5b0d8be71c08ef55f.png)

②、删除 mariadb。

```
rpm -e --nodeps mariadb-libs
```

 **7、安装 rmp 包**

逐个安装，命令如下：

【必须安装】

rpm -ivh mysql-community-common-8.0.26-1.el8.x86_64.rpm

rpm -ivh mysql-community-libs-8.0.26-1.el8.x86_64.rpm

rpm -ivh mysql-community-client-8.0.26-1.el8.x86_64.rpm

rpm -ivh mysql-community-server-8.0.26-1.el8.x86_64.rpm

【非必须安装】

rpm -ivh mysql-community-libs-compat-8.0.26-1.el8.x86_64.rpm

rpm -ivh mysql-community-embedded-compat-8.0.26-1.el8.x86_64.rpm

rpm -ivh mysql-community-devel-8.0.26-1.el8.x86_64.rpm

rpm -ivh mysql-community-test-8.0.26-1.el8.x86_64.rpm

### 二、通过 yum 的方式安装

 **1、查看服务器上是否有现成的安装包。**

```
yum list mysql*
```

**2、去 [mysql 官网](https://dev.mysql.com/downloads/repo/yum/ "mysql官网")的 yum 资源库找到对应的 rpm 文件的下载链接。**

 ①、确定系统版本。

```
cat /etc/redhat-release
```

②、复制对应的资源下载链接。[MySQL :: Download MySQL Yum Repository](https://dev.mysql.com/downloads/repo/yum/ "MySQL :: Download MySQL Yum Repository")

![](https://img-blog.csdnimg.cn/20210721143834185.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VzY29ydHM=,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20210721143907931.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VzY29ydHM=,size_16,color_FFFFFF,t_70)

 **3、在 linux 中下载、安装 yum 资源。**

```
rpm -ivh 资源下载链接
```

如：rpm -ivh [https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm](https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm "https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm")

如果出现下图的异常，就多试几下。

![](https://img-blog.csdnimg.cn/20210721144218659.png)

 **4、查看当前 mysql 的当前版本**

```
yum info mysql-community-server
```

![](https://img-blog.csdnimg.cn/20210721145432511.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VzY29ydHM=,size_16,color_FFFFFF,t_70)

**5、安装 mysql**

```
yum -y install mysql-community-server
```

![](https://img-blog.csdnimg.cn/2021072115014126.png)

### 三、安装完后，启动 mysql

**1、启动 mysqld 服务**

①、使用 “systemctl” 检测 mysqld 服务状态。 

```
systemctl status mysqld
```

![](https://img-blog.csdnimg.cn/20210721151005814.png)

②、启动 mysqld 服务。

```
systemctl start mysqld
```

 ③、再次查看 mysqld 服务的状态。

```
systemctl status mysqld
```

![](https://img-blog.csdnimg.cn/20210721151047647.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VzY29ydHM=,size_16,color_FFFFFF,t_70)

 **2、查询 mysql 的初始密码**

```
less /var/log/mysqld.log
```

![](https://img-blog.csdnimg.cn/20210721151532717.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0VzY29ydHM=,size_16,color_FFFFFF,t_70) **3、修改密码**

```
mysqladmin -u root -p password
```

![](https://img-blog.csdnimg.cn/20210721152705355.png)

备注：  
root 账号一般只添加了 localhost 访问 (这是推荐的)，如若调试阶段不想通过 ssh 跳板连接，建议开个新账号。

步骤 1：查看 root 账号的 ip 访问权限（执行结果：`localhost`和`127.0.0.1`，是无法从外部连接的）

```
SELECT host FROM mysql.user WHERE User = 'root';
```

步骤 2：新建账号并指定密码和 ip（使用 `%` 通配符表示允许任何 ip 访问）

```


1.  CREATE USER 'my_name'@'%' IDENTIFIED BY 'my_password';
2.  GRANT ALL PRIVILEGES ON *.* TO 'my_name'@'%';


```

步骤 3：刷新配置

```
FLUSH PRIVILEGES;
```

这样 my_name 就可以不通过 ssh 跳板直接连接了。
# references