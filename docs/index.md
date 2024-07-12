---
home: true
# heroImage: /img/web.png
heroText: Asafield's blog
tagline: 嵌入式学习博客,雄关漫道真如铁, 而今迈步从头越。
# actionText: 立刻进入 →
# actionLink: /web/
bannerBg: '/img/wall.png' # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

# features: # 可选的
#   - title: linux
#     details: u-boot, linux驱动学习
#     link: /linux/ # 可选
#     imgUrl: /img/linux-tux.svg # 可选


#
# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
# hideRightBar: true # 是否隐藏右侧边栏
---
## 几句话
这里是我(Asafield)的个人博客，从本科开始就有写博客的想法，当时用wordpress弄了一下，结果搭好了网站，又不知道写些什么，也是并不清楚未来想要做什么吧，现在好歹有了一直往嵌入式上做下去的想法，也想分享一下自己浅薄的想法，所以又有了这个网站。目前的主要内容有以下几类：
- **零散的学习记录**。对于别人来说并没有什么价值，很多都是一些基础的知识的随手记录，也有一些未经整理的想法，其中还有网上看到的一些有用的技术博客，将这些东西记录下来，也是以对自己学习历程的记录。其实我一直相信，组成一个人的所有，不止是他现在的一切特质，还有他的历史，这部分大概就是我的历史吧！
- **一些项目的分享**。我会将自己做过的一些项目放在这里，同样也是对自己所学的记录，这些项目，有的是为了过程，比如MIT和jyy的操作系统课上的项目，有的是为了结果，比如实验室或者后续工作中一些允许公开分享的项目。后面会跟着做一些有意思的开源项目，也会记录在这里，当然，最好还是希望自己能有一些优秀的开源项目列在这里。
- **技术博客**。不同于学习笔记，这里的内容相对来说更加细致、有逻辑，就算没有很深入，我也会尽力写的完整一点，是对我来说，具有启发性，或者我觉得也许能启发别人的东西。
- **心情日记**。虽然很想说这部分是我的人生感悟，但其实还没到那个程度，就当是回家火车上旁边一个陌生人不知所谓的自言自语吧。

---
**版权说明**
- 本网站使用VuePress网站生成器与Vdoing主题搭建。
- 学习记录部分的博客有内容也许参考了或者是转载了其它文章，一般在文末的`reference`部分说明，如有遗漏，请邮箱联系我。
- 转载请注明出处。
---

<!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->

<!--
## 关于

### 📚Blog
这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/xugaoyi/vuepress-theme-vdoing)点个Star、获取源码，或者交换[友链](/friends/) ( •̀ ω •́ )✧

### 🎨Theme
本站主题是根据[VuePress](https://vuepress.vuejs.org/zh/)的默认主题修改而成。取名`Vdoing`(维度)，旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多[详情](https://github.com/xugaoyi/vuepress-theme-vdoing)。

<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>

</br>


## 特色功能
博客部分特色功能介绍

#### 一站式技术搜索

   博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 `在XXX中搜索“xxx”` 快速到达你想要找的内容。

#### 深色模式与阅读模式
关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~

#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。**示例**：

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;
}
</style>
```
:::


## :email: 联系

- **WeChat or QQ**: <a href="tencent://message/?uin=xxx&Site=&Menu=yesUrl" class='qq'>xxx</a>
- **Email**: <a href="mailto:asafield@qq.com">asafield@qq.com</a>
- **GitHub**: <https://github.com/Asafield>

</br>  -->
