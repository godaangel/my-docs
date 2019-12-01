# Vue图片懒加载

Vue的生态环境逐渐的好起来，所以出现了很多好用的插件，下面这款图片懒加载插件就非常好用。

> 图片懒加载主要用来提高页面加载效率，控制图片的加载，优先加载了曝光图片，根据用户访问需求再加载后续的图片。

### vue-lazyload

github地址：[https://github.com/hilongjw/vue-lazyload](https://github.com/hilongjw/vue-lazyload)

#### 安装和使用

在项目中运行 `npm install vue-lazyload --save`即可。

在全局使用，具体参数参考文档介绍，这里只做简单示例。

```js
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://mat1.gtimg.com/auto/2017/wiife/1512357627305/imgs/375x190.svg', // 出错时加载的图片
  loading: 'http://mat1.gtimg.com/auto/2017/wiife/1512357627305/imgs/375x190.svg', // 图片加载中的过渡图片
  attempt: 1
})
```

然后在需要的地方使用`v-lazy`替代`src`。

```html
<!-- 普通图片使用, image_url为变量 -->
<img v-lazy="image_url" alt="">

<!-- 背景图片使用 -->
<div class="bg" v-lazy:background-image="bg_url"></div>
```



