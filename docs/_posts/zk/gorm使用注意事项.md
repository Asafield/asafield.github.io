---
title: gorm使用注意事项
date: 2023-12-19 15:02:44
permalink: /pages/6c95f5/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-07-14 13:50  
Status: #idea  
Tags: [[golang]] [[Web开发]] 

---

# gorm使用注意事项
- 使用数据库查询时，When querying with struct, GORM will only query with non-zero fields, that means if your field’s value is `0`, `''`, `false` or other [zero values](https://tour.golang.org/basics/12), it won’t be used to build query conditions, for example:
```go
db.Where(&User{Name: "jinzhu", Age: 0}).Find(&users) 
// SELECT * FROM users WHERE name = "jinzhu";
```
- 在数据库操作时，指定对应数据表中的字段时，只有使用结构体时使用的是结构体对应的字段名，而使用`map[string]interface{}`方法则是需要写上数据库中对应的字段名,两者可能并不相同：
  ```go
  DB.Where(map[string]interface{}{"user_name": username}).Find(&user)
```

# references