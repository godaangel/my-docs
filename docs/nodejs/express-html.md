# Express渲染Html

背景：前端使用Vue以及Vue-router打包生成项目，入口是index.html文件。后端使用Express，由于Express默认使用Jade模版引擎，很难配合Webpack打包一键部署到Express项目下，所以需要将Express渲染方式改为渲染Html。

实现方式如下代码：

```js
// express渲染html配置，依赖ejs包，需要npm安装一下ejs
var ejs = require('ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// 访问路径配置
router.get('/', function(req, res, next) {
  res.render('index.html', { title: '我是HTML渲染出来的页面' });
});
```

以上就能实现渲染Html文件。

