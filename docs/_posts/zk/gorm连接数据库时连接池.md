---
title: gorm连接数据库时连接池
date: 2023-12-19 15:02:44
permalink: /pages/d2c866/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-07-13 19:57  
Status: #idea  
Tags: [[golang]] [[Web开发]]

---

# gorm连接数据库时连接池
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [www.tizi365.com](https://www.tizi365.com/archives/15.html)

> 一. gorm 连接 mysql 数据库 gorm 支持多种数据库，这里主要介绍 mysql, 连接 mysql 主要有两个步骤...

## 一. gorm 连接 mysql 数据库

--------------------

gorm 支持多种数据库，这里主要介绍 mysql, 连接 mysql 主要有两个步骤:

1.  配置 DSN (Data Source Name)
2.  使用 gorm.Open 连接数据库

### 1. 配置 DSN (Data Source Name)

gorm 库使用 dsn 作为连接数据库的参数，dsn 翻译过来就叫数据源名称，用来描述数据库连接信息。一般都包含数据库连接地址，账号，密码之类的信息。

**DSN 格式：**

```
[username[:password]@][protocol[(address)]]/dbname[?param1=value1&...¶mN=valueN]
```

mysql 连接 dsn 例子：

```
username:password@tcp(host:port)/Dbname?charset=utf8&parseTime=True&loc=Local
root:123456@tcp(localhost:3306)/tizi365?charset=utf8&parseTime=True&loc=Local
root:123456@tcp(localhost:3306)/tizi365?charset=utf8&parseTime=True&loc=Local&timeout=10s
root:123456@tcp(localhost:3306)/tizi365?charset=utf8&parseTime=True&loc=Local&timeout=10s&readTimeout=30s&writeTimeout=60s
```

### 2. 使用 gorm.Open 连接数据库

有了上面配置的 dsn 参数，就可以使用 gorm 连接数据库，下面是连接数据库的例子

```go
package main

import (
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main()  {
    
	username := "root"  
	password := "123456" 
	host := "127.0.0.1" 
	port := 3306 
	Dbname := "tizi365" 
	timeout := "10s" 
	
	
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True&loc=Local&timeout=%s", username, password, host, port, Dbname, timeout)
	
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("连接数据库失败, error=" + err.Error())
	}
	
	defer db.Close()
}

```

### 3. gorm 调试模式

为了方便调试，了解 gorm 操作到底执行了怎么样的 sql 语句，**开发的时候**需要打开调试日志，这样 gorm 会打印出执行的每一条 sql 语句。

使用 Debug 函数执行查询即可  
例子：

```
result := db.Debug().Where("username = ?", "tizi365").First(&u)

```

## 二. gorm 连接池

-----------

在高并发实践中，为了提高数据库连接的使用率，避免重复建立数据库连接带来的性能消耗，会经常使用数据库连接池技术来维护数据库连接。  
gorm 自带了数据库连接池使用非常简单只要设置下数据库连接池参数即可。

数据库连接池使用例子：  
定义 tools 包，负责数据库初始化工作

```go
package tools
var _db *gorm.DB
func init() {
    ...忽略dsn配置，请参考上面例子...
    var err error
    
    _db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
		panic("连接数据库失败, error=" + err.Error())
	}
     
    sqlDB, _ := db.DB()

    
    sqlDB.SetMaxOpenConns(100)   
    sqlDB.SetMaxIdleConns(20)   
}

func GetDB() *gorm.DB {
	return _db
}

```

使用例子：

```go
package main

import tools

func main() {
    
    db := tools.GetDB()
    
    
    u := User{}
	
	db.Where("username = ?", "tizi365").First(&u)
}

```

> 注意：使用连接池技术后，千万不要使用完 db 后调用 db.Close 关闭数据库连接，这样会导致整个数据库连接池关闭，导致连接池没有可用的连接。
# references