# 装饰器Decorator

装饰器是属于JS的语言新特性，目前如果要在代码中使用，需要使用babel进行转义，配置方式如下（基于webpack工程）：

##### 1、首先，安装babel插件

```
npm install babel-plugin-transform-decorators-legacy --save
```

##### 2、配置.babelrc文件

在`plugins`一栏进行配置，Babel 会在正在被转录的文件的当前目录中查找一个` .babelrc `文件。 如果不存在，它会遍历目录树，直到找到一个` .babelrc` 文件，或一个` package.json` 文件中有` "babel": {} `。在选项中使用` "babelrc": false` 来停止查找行为，或者提供`--no-babelrc` CLI 标志。

```
"plugins": [[
    "transform-decorators-legacy"
 ]]
```

##### 3、配置webpack

在`babel-loader`下加入`plugins`。

```js
module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-3'],
        plugins: ['transform-decorators-legacy'], //此处加入装饰器的babel支持
      }
    }]
  },
```

##### 4、装饰器的简单示例

目前暂时加入简单示例，在之后的学习中再持续补充学习记录以及装饰器所用的范围。

```js
/**
 * 装饰器调用示例
 */
import Ctp from '@/lib/console-to-page';

function readonly(target, name, descriptor) {
  console.log(target, name, descriptor)
  descriptor.writable = false; //设置为不可更改模式
  return descriptor;
}
class Cat {
  @readonly
  say() {
    Ctp("meow ~");
  }
}
var kitty = new Cat();
kitty.say = function() {
  Ctp("woof !");
}
kitty.say(); //此时会报错，因为say不可以更改
```



