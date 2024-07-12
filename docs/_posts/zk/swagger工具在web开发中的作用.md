---
title: swagger工具在web开发中的作用
date: 2023-12-19 15:02:44
permalink: /pages/d23c87/
sidebar: auto
categories:
  - zk
tags:
  - 
author: 
  name: asafield
  link: https://github.com/Asafield
---

create date: 2023-07-11 16:37  
Status: #idea  
Tags: [[Web开发]]

---

# swagger工具在web开发中的作用
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [www.zhihu.com](https://www.zhihu.com/question/63803795) ![](https://picx.zhimg.com/v2-a7c39c7b5872624dbfff5250c6f1b9a5_l.jpg?source=1940ef5c)磊哥聊编程

Swagger 是什么？
------------

Swagger 是一个用于生成、描述和调用 RESTful 接口的 Web 服务。通俗的来讲，Swagger 就是将项目中所有（想要暴露的）接口展现在页面上，并且可以进行接口调用和测试的服务。

> PS：Swagger 遵循了 OpenAPI 规范，OpenAPI 是 Linux [基金会](https://www.zhihu.com/search?q=%E5%9F%BA%E9%87%91%E4%BC%9A&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1780508067%7D)的一个项目，试图通过定义一种用来描述 API 格式或 API 定义的语言，来规范 RESTful 服务开发过程。  

Swagger 官网地址：[https://swagger.io/](https://link.zhihu.com/?target=https%3A//swagger.io/)

Swagger 有什么用？
-------------

从上述 Swagger 定义我们不难看出 Swagger 有以下 3 个重要的作用：

1.  **将项目中所有的接口展现在页面上**，这样后端[程序员](https://www.zhihu.com/search?q=%E7%A8%8B%E5%BA%8F%E5%91%98&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1780508067%7D)就不需要专门为前端使用者编写专门的[接口文档](https://www.zhihu.com/search?q=%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1780508067%7D)；
2.  当接口更新之后，只需要修改代码中的 Swagger 描述就可以实时生成新的接口文档了，从而**规避了接口文档老旧不能使用的问题**；
3.  通过 Swagger 页面，我们可以**直接进行接口调用，降低了项目[开发阶段](https://www.zhihu.com/search?q=%E5%BC%80%E5%8F%91%E9%98%B6%E6%AE%B5&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1780508067%7D)的调试成本**。

![](https://picx.zhimg.com/v2-502b4dc772204f7337764cef5d05f619_r.jpg?source=1940ef5c)

Swagger 版本说明
------------

Swagger 3.0 发布已经有一段时间了，它于 2020.7 月 发布，但目前市面上使用的主流版本还是 Swagger 2.X 版本和少量的 1.X 版本，然而作为一名合格的程序员怎么能不折腾新技术呢？所以本期就大家带来一篇最新版 Swagger 的内容，本文会带大家看最新版 Swagger 有哪些改变？又是如何将老版本 Swagger 升级到新版的？

Swagger 旧版本使用
-------------

Swagger 旧版本也就是目前市面上主流的 V2 版本是 Swagger 2.9.2，在讲新版本之前，我们先来回顾一下 Swagger 2.9.2 是如何使用的。

Swagger 2.9.2 的使用分为以下 4 步：

1.  添加依赖
2.  开启 Swagger 功能
3.  配置 Swagger 文档摘要信息
4.  调用接口访问

下面我们分别来看。

### 1. 添加依赖

首先，我们要去 mvnrepository 查询 Swagger 的依赖，搜索 “springfox” 关键字，得到结果的前两条依赖信息，就是我们想要的结果，如下图所示：

![](https://picx.zhimg.com/v2-c786d26dd3271d7542b4b29514b7f33d_r.jpg?source=1940ef5c)

将这两个依赖添加带项目中：

```
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>

<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>

```

### 为什么是 “springfox”？

问：我们要使用的是 Swagger，为什么要搜索 “springfox”？

答：**Swagger 可以看作是一个遵循了 OpenAPI 规范的一项技术，而 springfox 则是这项技术的具体实现。** 就好比 Spring 中的 AOP 和 DI 一样，前者是思想，而后者是实现。

### 2. 开启 Swagger

在 Spring Boot 的启动类或配置类中添加 `@EnableSwagger2` 注释，开启 Swagger，部分核心代码如下：

```
@EnableSwagger2
@SpringBootApplication
public class Application {...

```

### 3. 配置摘要信息

```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
public class SwaggerConfig {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2) // 1.SWAGGER_2
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.swaggerv2.controller")) // 2.设置扫描路径
                .build();
    }
}

```

### 4. 访问 Swagger

项目正常启动之后使用 “http://localhost:8080/swagger-ui.html” 访问 Swagger 页面，如下图所示：

![](https://pic1.zhimg.com/v2-d33daf45a455077d3e17f91a37cbd783_r.jpg?source=1940ef5c)

Swagger 最新版使用
-------------

Swagger 最新版的配置步骤和旧版本是一样，只是每个具体的配置项又略有不同，具体步骤如下。

### 1. 添加依赖

```
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-boot-starter -->
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-boot-starter</artifactId>
  <version>3.0.0</version>
</dependency>

```

从上述配置可以看出，Swagger 新版本的依赖项只有一个，而旧版本的依赖项有两个，相比来说也简洁了很多。

### 2. 开启 Swagger

在 Spring Boot 的启动类或配置类中添加 `@EnableOpenApi` 注释，开启 Swagger，部分核心代码如下：

```
@EnableOpenApi
@SpringBootApplication
public class Application {...

```

### 3. 配置摘要信息

```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.OAS_30) // v2 不同
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.swaggerv3.controller")) // 设置扫描路径
                .build();
    }
}

```

从上述代码可以看出 `Docket` 的配置中只有文档的类型设置新老版本是不同的，新版本的配置是 `OAS_30` 而旧版本的配置是 `SWAGGER_2`。

> PS：OAS 是 OpenAPI Specification 的简称，翻译成中文就是 OpenAPI 说明书。  

### 4. 访问 Swagger

新版本的 Swagger 访问地址和老版本的地址是不同的，新版版的访问地址是 “localhost:8080/swagger-ui/””，如下图所示：

![](https://picx.zhimg.com/v2-04a997b56034830d64615d655b84e0b5_r.jpg?source=1940ef5c)

新版本 VS 老版本
----------

新版本和老版本的区别主要体现在以下 4 个方面：

1.  依赖项的添加不同：新版本只需要添加一项，而老版本需要添加两项；
2.  启动 Swagger 的注解不同：新版本使用的是 `@EnableOpenApi`，而老版本是 `@EnableSwagger2`；
3.  Docket（文档摘要信息）的文件类型配置不同：新版本配置的是 `OAS_3`，而老版本是 `SWAGGER_2`；
4.  Swagger UI 访问地址不同：新版本访问地址是 “http://localhost:8080/swagger-ui/”，而老版本访问地址是 “http://localhost:8080/swagger-ui.html”。

总结
--

Swagger 新版本让人印象深刻的优点有两个：第一，配置变得简单了，比如依赖项配置减少了 50%，第二，新版 Swagger 页面设计风格有了不小的改变，新版的页面让人感觉更加现代化也更加具有科技感了，总体来说美观了不少。

值得一提的是 Swagger 的整个升级过程很平滑，从老版本升级到新版本，只需要简单的配置即可，那些用于描述接口的注解还是延续了老版本的用法，这样就可以在不修改大部分主要代码的情况下，可以成功到最新版本啦。

> 点击我的头像查看 Swagger 3 视频版内容。

![](https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=1940ef5c)知乎用户

首先啊，准确的讲，swagger 是个旧名，它干的事情叫 OpenAPI specification，最新的已经版本 3 点几点几了。你在 swagger editor 上的看到的，左边叫 OpenAPI document，可以是 yaml 或是 json，右边的是 swagger UI 根据左边的 yaml/json 生成的网页。工作中老司机们发现，由其是微服务，一些 api 老到被忘了，过了几个月半年的，[程序员](https://www.zhihu.com/search?q=%E7%A8%8B%E5%BA%8F%E5%91%98&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A601100194%7D)很可能又写一个几乎是一样的 api 出来。所以把已有的 api 整理出来很重要啊，方便查询，减少重复劳动，重构的时候也省力。

接下来讲怎么看和写 yaml/json 啊，分成几大块：

1.  openapi 的版本
2.  info
3.  servers (api 的母路径）
4.  paths (子路径）举例说，servers 那边已有一个 server URL, 子路径有个 path，那么你得到的 api 就是 {server URL}{path}
5.  security
6.  tags
7.  externalDocs
8.  components，又分主要三类

1.  [parameters](https://www.zhihu.com/search?q=parameters&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A601100194%7D)
2.  schemas
3.  securitySchemas

这个 components 部分非常贴心的，比如说你定义了一个 parameter 叫 ex，如下

```
components:
  parameters:
    ex:
      name: ex
      in: query
      description: "Second girl friend, pretty, smart but not exclusive."
      schema:
        type: string

```

在 paths 部分，可以直接引用 ex

```
paths:
  /yourgf:
    get:
      tags:
      - Girl friend
      summary: "Girls who you will never forget"
      description: "Her character."
      operationId: GirlFriendData
      parameters:
        - $ref: '#/components/parameters/ex'

```

看到了最后一行的 $ref 了吗？就是这么用的。schemas 和 securitySchemas 是同一个道理，这样定义的目的是为了重复使用 parameters，要用的地方就 $ref 一下。关于其它的部分 1-7，可以参考这个 [tutorial](https://link.zhihu.com/?target=https%3A//idratherbewriting.com/learnapidoc/pubapis_openapi_step1_openapi_object.html)，从 step1 到 step8，非常适合小白阅读，大白话，很暖很贴心

用 swagger，讲道理，是个体力活。不同结构的代码会把 api 们放在不同的地方，为了我司那散如海边贝壳般的微服务们，我用脚本跑了个遍，然后生成 json 文件，最后用 swagger UI 显示出来。swagger UI 会给你一些惊喜，如果 parameters/reponses 定义的准确，这个 ui 可以当 insomnia/postman 来用，很贴心有没有。

如果大家发现了一些好用的 swagger restify 的 library，欢迎推荐给我啊。我之前用了两天的时间尝试了几个 [lib](https://www.zhihu.com/search?q=lib&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A601100194%7D)，不太好用，最后是 DIY 的脚本生成的 json。

小白们同加油！

![](https://pic1.zhimg.com/v2-e1df59d9e55ec517eb5cb851d808201e_l.jpg?source=1940ef5c)黄禅宗

极简开发
----

swagger 是一个广泛使用的接口文档和[开发工具](https://www.zhihu.com/search?q=%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2567803201%7D)，很多接口项目都正在用 swagger 维护和自动生成接口文档。

当需要对外开放你的 API 接口时，可以结合接口大师这个工具，实现界面化操作、低代码开发，从而即刻开放你的 API 接口。

swagger 介绍
----------

swagger 是一款开源工具，可以提供给个人、企业和团队进行接口管理和开发。

swagger 提供了：接口设计、[接口开发](https://www.zhihu.com/search?q=%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2567803201%7D)、接口文档、[接口测试](https://www.zhihu.com/search?q=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2567803201%7D)、接口模拟、接口生成和接口监控等功能。

![](https://picx.zhimg.com/v2-be6c7ecccd5803bfa8e0df0e27e50b0b_r.jpg?source=1940ef5c)

结合 swagger UI，可以在线生成你的接口文档。

![](https://pica.zhimg.com/v2-5bcaf5f36d1749c1ba49709cb253cba6_r.jpg?source=1940ef5c)

一键批量导入 swagger
--------------

当需要基于现有的 swagger 接口，开放 API 接口时，可以结合接口大师这款工具，一键导入。

首先，登录[接口大师](https://www.zhihu.com/search?q=%E6%8E%A5%E5%8F%A3%E5%A4%A7%E5%B8%88&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2567803201%7D)的管理后台，进入接口管理，选择【导入 swagger】。

![](https://pica.zhimg.com/v2-3aca7b596a5d50136ae47854f244f4cc_r.jpg?source=1940ef5c)

选择并导入你的 swagger.json 文件，

![](https://picx.zhimg.com/v2-7800e9e04cf1ec25710928cc1e4130ce_r.jpg?source=1940ef5c)

然后，选择你需要导入的 API 接口，可以批量选中、或部分选中。接着，开始导入。

![](https://picx.zhimg.com/v2-97df45d2fe2b11e1402104b804909314_r.jpg?source=1940ef5c)

最后，完成导入。简单三步，即可导入你的 swagger 接口到接口大师。

即刻开放你的 API 接口
-------------

导入 swagger 接口后，在接口大师，可以通过后台界面进行更多的接口的管理和开发。

导入后的接口调整和管理
-----------

作为接口开发和平台管理，在接口开发列表，可以查看刚才成功导入的 swagger 接口。

![](https://pic1.zhimg.com/v2-b0bdc117e0a13b7327990e89a3e665cd_r.jpg?source=1940ef5c)

点击接口编辑，可以继续对接口的信息进行编辑，包括但不限于：接口名称、接口标题、接口描述、接口版本、接口请求方式、接口 PHP 源代码。确认后，可以进行接口发布，也可以在导入接口时直接发布。

![](https://pic1.zhimg.com/v2-7df05313dfd967e4e56ff22ba9eba0c3_r.jpg?source=1940ef5c)

接口大师会自动把 swagger 的接口信息转换并导入到接口管理平台。

前台开放者看到的开放接口
------------

导入并发布接口后，[开发者](https://www.zhihu.com/search?q=%E5%BC%80%E5%8F%91%E8%80%85&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2567803201%7D)在前台将看到类似以下的在线接口文档。

![](https://pic1.zhimg.com/v2-fd2c1623321e5101bb6ccc4609953950_r.jpg?source=1940ef5c)

接口文档页面类似如下，同样可以进行在线接口测试，并且全部自动生成。

![](https://picx.zhimg.com/v2-e600f0652b106304c493f793c7014851_r.jpg?source=1940ef5c)

开发者注册并登录开放平台后，可以查看自己应用的接口权限。

![](https://picx.zhimg.com/v2-172932e982d7e655eae8975a05ac1aee_r.jpg?source=1940ef5c)

小结
--

导入 swagger.json 接口到接口大师后，可以选择性、可视化即刻开放你的 API 接口。在管理后台可以继续对接口进行[二次开发](https://www.zhihu.com/search?q=%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2567803201%7D)和调整，发布后开发者可以直接调用和使用。

![](https://picx.zhimg.com/v2-8a4d8ba7a176cda2cc2c6cfe197cc56d_l.jpg?source=1940ef5c)人人都是程序员

相比于 swagger，我更推荐你下载个 Apifox，非常好用。

[](https://link.zhihu.com/?target=http%3A//www.apifox.cn/%3Futm_medium%3DWCSA%26%3Futm_source%3Dliam)

  
Apifox = Postman + Swagger + Mock + JMeter 上面是它的宣传口号，四合一，非常雄心勃勃。目前看起来，它做得不错，确实能做到这个目标。可以大大的提高你的工作效率。  
Apifox - API 文档、调试、Mock、测试一体化协作平台。拥有接口文档管理、接口调试、Mock、自动化测试等功能，接口开发、测试、联调效率，提升 10 倍。最好用的接口文档管理工具，接口自动化测试工具。  

![](https://picx.zhimg.com/v2-7619574b22b18efe1fc99b9f59f0cc18_r.jpg?source=1940ef5c)![](https://pica.zhimg.com/v2-31d112e3d7ddbe9d18960cf7db78a86d_l.jpg?source=1940ef5c)Lynn

可能现在的小程序员听到以前还有人用过 word 来做接口文档，会惊讶得不行，但在前后端分离推行的早期，确实没有那么多趁手好用的接口文档工具。

互联网发展到现在，接口文档也经历了从简单的 word 到 markdown，到 swagger，到 Apifox 等逐步进化的方式，变得越来越美观，越来越规范，也支持越来越多的功能辅助调试。

接下来给大家盘点一下这些年接口文档的进化历程。

![](https://picx.zhimg.com/v2-c393cdc466bbfb1885ee631a4896972c_r.jpg?source=1940ef5c)

### **一、接口文档的幼年体：word**

![](https://picx.zhimg.com/50/v2-17ff577ac395bb682c9b45b5dfce6199_720w.jpg?source=1940ef5c)

一开始是[前后端分离](https://www.zhihu.com/search?q=%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)，后端得告知前端接口的各项信息，方便前端调用。 那需要提供的信息也就那些，就用 word 写吧，于是就有了这样的接口文档：

![](https://pic1.zhimg.com/v2-24eb6b48515ab1a435c777827f5de30f_r.jpg?source=1940ef5c)

问题似乎解决了，但项目嘛，是不停修改和迭代的，这样会导致：

这份接口文档是随着项目进行频繁改动的。 每更新一次，就需要给项目成员分发一次新的接口文档

于是：  
A. 每改动一次就要新建一份，复制给[项目组](https://www.zhihu.com/search?q=%E9%A1%B9%E7%9B%AE%E7%BB%84&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)里很多人，这样一个文档复制来复制去，项目组里这么多人，谁都不知道拿到的是不是全新版本 ；

B. 改一点就要生成一个新文档，于是文件夹里的接口文档可能就是这种形式：

![](https://picx.zhimg.com/v2-5d145be690fad1e532a39dc06a4a3aa2_r.jpg?source=1940ef5c)

是谁哭了我不说。

这些痛点促成了接口文档的第一次进化： 从 word 版的接口文档进化成网页版的接口文档。

### **二、接口文档的成长体：Markdown**

![](https://picx.zhimg.com/50/v2-0cc90e496b2712b70e2c0ff98c45e161_720w.jpg?source=1940ef5c)

网页版的接口文档多完美，只需要分发一个链接给项目成员保存起来。

这样，如果后端修改了接口，直接在网页里修改，就保证大家看到的都是最新版本的，也不用每次一有改动就发一份新文档给大家。

这样一个由 [markdown](https://www.zhihu.com/search?q=markdown&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D) 生成的静态的 html 页面，一个接口的关键要素全都有

![](https://picx.zhimg.com/v2-9a6fcb1b8ed8774043e4966c795fd286_r.jpg?source=1940ef5c)

问题解决！

但—— 新的问题又产生了。

这个接口文档是能用了，但又没那么好用，比如说：

1. 写接口挺麻烦的，完全纯手工写，没有任何[辅助工具](https://www.zhihu.com/search?q=%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)，非常花时间

2. 接口写完还不能立刻看到生成的接口文档的效果，写错了还要重新回去调

3. 没有接口规范约束，接口文档怎么写，哪些参数要写，哪些不写，呈现形式怎么样全凭开发人员本身的业务水准。

于是就开始了新的一轮的进化——有人开发了一个工具，专门就用来写接口文档。

### **三、接口文档的完全体：swagger**

![](https://picx.zhimg.com/50/v2-bfe6db295bcef7d3cc415c206a3af3b6_720w.jpg?source=1940ef5c)

怎么写？ 在 swagger editor 里编写符合 swagger 语法的接口文档，来生成接口文档，编写完的接口文档可以在 swagger editor 的右侧实时预览：

![](https://pic1.zhimg.com/v2-1af97b8513ce5bf4af057231611146c7_r.jpg?source=1940ef5c)

于是，进化到这个完全体阶段的接口文档工具已经实现了如下功能：

1. 网页版接口文档支持的在线查看功能，当然他也有，而且这个接口文档的样式是符合 open api3.0 规范的，如果写得不符合语法，swagger editor 还会报错来纠正你。

一个标准的接口所应具备的信息：接口方法、[接口路径](https://www.zhihu.com/search?q=%E6%8E%A5%E5%8F%A3%E8%B7%AF%E5%BE%84&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)、请求和响应参数，都能按照固定的格式呈现出来。

![](https://pica.zhimg.com/v2-d615b1dcbedbd241f241acb8e9b967b9_r.jpg?source=1940ef5c)

2. 它还具备了初步、简单的调试功能，就是接口请求参数为空格，填写参数、发送请求，就能返回响应参数

![](https://pic1.zhimg.com/v2-f6aa617aadfd14215820c7ff4a85c8f6_r.jpg?source=1940ef5c)

好像已经够用了对不对？

但——等等，这些如果是开发自己一个人用还行，但如果要运用到项目里，那么多的接口文档，蛮难管理的，swagger editor 不提供[项目层级](https://www.zhihu.com/search?q=%E9%A1%B9%E7%9B%AE%E5%B1%82%E7%BA%A7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)的归档和管理，维护也麻烦。

而且，到目前为止，也没有逃脱接口文档要靠手写生成的命运，还要去学 swagger 注解，这样一来，学习成本有了，工作效率也提高不上去。

生成的接口文档，前端需要使用接口信息来调试页面，测试会用它来验证接口。 但目前接口文档的功能，对前端和测试的工作支持得还不够呀~

好像.... 还可以更完美？？！

有痛点就会有解决方案，于是接口文档开始了新一轮的进化之路，进入[究极进化](https://www.zhihu.com/search?q=%E7%A9%B6%E6%9E%81%E8%BF%9B%E5%8C%96&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)形态的接口文档工具是——

### **四、接口文档的究极进化形态：Apifox**

![](https://pica.zhimg.com/50/v2-1417ea763f1e9c2b047cf7277e3ccba2_720w.jpg?source=1940ef5c)![](https://picx.zhimg.com/v2-7b40e6dbd69bf9b61fa516e3badbd40e_r.jpg?source=1940ef5c)

想要团队协作？安排。  
想要不用写代码就能生成接口文档？可以。  
想要直接在接口文档上调试接口？支持。  
接口还没上生产环境、但想要模拟数据可以调试前端页面？支持。  
想要直接用接口数据来做[自动化测试](https://www.zhihu.com/search?q=%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)？安排。

![](https://pic1.zhimg.com/v2-abe561bac243020e615be81aac984648_r.jpg?source=1940ef5c)

于是一个究极进化形态的接口文档工具就诞生了。

### **首先是在已经存在的接口文档功能上做优化：**

A. 可视化的接口设计页面，不用写 swagger 注解 ，填完参数保存就是一份接口文档。

只要你懂接口的知识就能上手写，[四舍五入](https://www.zhihu.com/search?q=%E5%9B%9B%E8%88%8D%E4%BA%94%E5%85%A5&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)这学习成本就是零。

![](https://pic1.zhimg.com/v2-5bf92dc035cadfdec690de4f2f51a756_r.jpg?source=1940ef5c)![](https://picx.zhimg.com/v2-cf8d4cd9f91088affdff0bd7d814ec70_r.jpg?source=1940ef5c)

B. 一键导出接口文档，支持只分享部分接口文档，设置过期时间，设置密码

![](https://pica.zhimg.com/v2-90864a35a89a7a5dedc8bc9ef82e85c1_r.jpg?source=1940ef5c)

C. 接口文档实时更新 一旦接口文档发生变更，数据会实时同步到参与项目的所有成员

### **其次是给前端和测试疯狂加外挂：**

A. 接口文档页面支持在线调试  

![](https://picx.zhimg.com/v2-1adc375fc75e00d3949bf1a54b318857_r.jpg?source=1940ef5c)

分享出去的接口文档页面支持简单的基础调试功能，如果你如要更加强大的调试辅助，则可以使用 Apifox 客户端。

客户端的调试功能对提取变量、断言、连接数据库等功能都做了可视化封装，不用写脚本，如果 有复杂的调试需求，仍旧支持[脚本调试](https://www.zhihu.com/search?q=%E8%84%9A%E6%9C%AC%E8%B0%83%E8%AF%95&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)功能

![](https://picx.zhimg.com/v2-4ae06d44ddc631ff76a2bc036b459aa6_r.jpg?source=1940ef5c)

B. 支持生成代码  
支持的代码种类也蛮多的，包括前后端常用的各种语言和框架，总共有 130 多种，javascript 和 swift，java 等等生成的前端代码复制就能用。

![](https://pic1.zhimg.com/v2-1adf595df7cf85ff9560d79645c1b94c_r.jpg?source=1940ef5c)

不仅支持生成接口请求代码，也支持生成[数据模型](https://www.zhihu.com/search?q=%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)代码，整个项目的代码，可以按需生成，然后自己再去做调整，这样需要写的代码量就大大减少了。

![](https://picx.zhimg.com/v2-bbde486afa16d5edfc44ff27cfc232db_r.jpg?source=1940ef5c)

F. 提供 mock 环境  
在接口未上线时也能模拟接口请求，构造出高度真实的业务数据供前端测试页面，后端、测试进行接口的调试和测试

![](https://pic1.zhimg.com/v2-e25795423ebdb9ac178472801f324210_r.jpg?source=1940ef5c)

可以复制链接到浏览器查看生成的[在线文档](https://www.zhihu.com/search?q=%E5%9C%A8%E7%BA%BF%E6%96%87%E6%A1%A3&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)：

[https://www.apifox.cn/apidoc/shared-cbb5c14c-0faa-4b4d-9f6e-7027cd57c702/api-21636796](https://link.zhihu.com/?target=https%3A//www.apifox.cn/apidoc/shared-cbb5c14c-0faa-4b4d-9f6e-7027cd57c702/api-21636796)

### **最后是将接口的一整条工作链整合到它这一个工具里：**

A. 支持项目层次的协作

每个接口归属于不同的模块，分属到不同的目录之中。 后端、前端、测试可以使用同一套接口数据源，也就是说接口创建出来之后，后端在上面维护，前端使用他做接口 mock，测试用它做接口自动化，数据变更实时同步到各端，不需要切换多个软件。

![](https://picx.zhimg.com/v2-fb438ac6d6abf41eadb67db8b4c74f76_r.jpg?source=1940ef5c)

B. 支持导入 [postman](https://www.zhihu.com/search?q=postman&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2582188768%7D)，swagger 等多达 20 多种格式的接口数据，零成本实现项目迁移

![](https://pica.zhimg.com/v2-48c76adc3865dfa44ae6fd13bf18a286_r.jpg?source=1940ef5c)

C. 支持导出 swagger，html，word 格式的接口文档，也不绑架用户，你想迁移到其他系统也大大方方成全你。

![](https://picx.zhimg.com/v2-26060554a05bcd826065748ad4d14fe0_r.jpg?source=1940ef5c)

这样一套组合拳打下来，基本上你能想到的接口文档该有的功能它都有了。

官网地址：[https://www.apifox.cn/a1evolution](https://link.zhihu.com/?target=https%3A//www.apifox.cn/a1evolution)

**总结**
------

因此，总结下来，接口文档一直以来都在不断地进化，战斗力也越来越强，也给研发人员提供了越来越到位的帮助，让他们能够少写不必要的代码，少做重复的工作。 大家可以根据自己项目的实际情况，选用合适的工具。
# references
[swagger究竟是个什么样的工具？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/63803795)