# Less的绝对路径引入

> 需求点：需要通过命令行建立通用文件，此时对于less文件来说，less文件中需要import一个通用的less变量库fn.less，此时需要通过绝对路径引入该通用fn.less

### 实现方式

> 有两种方式，一是配置modules，二是配置alias，推荐第二种方法。

一、通过webpack的配置`resolve.modules`来配置less的通用库fn.less

配置如下，此处一定要写上`node_modules`，不然可能会造成其他的npm模块无法使用。

该配置表示告诉`webpack`解析模块时应该搜索的目录。该配置默认值是`['node_modules']`，所以在添加其他文件夹时千万要带上`node_modules`，且搜索目录顺序是按照配置顺序进行搜索，下方配置将优先搜索`src`文件夹下的文件路径。

```
resolve: {
  modules: [
    'src',
    'node_modules'
  ]
}
```

配置完成后，如果`src`文件夹下有`styles`文件夹，`styles`文件夹内含有`fn.less`文件，则在其他less文件中可以如下方式填写绝对引入【~表示src/】。

```
@import '~styles/fn.less';
```

二、通过webpack的配置`resolve.alias`来配置

该配置表示配置引入路径的别名，还是以上面的路径为例，在less文件中引入`/src/styles/fn.less`，如果在webpack中配置如下：

```
resolve: {
  alias: [
    '@': resolve('src')
  ]
}
```

则在文件中引入方式为:

```
@import '~@/styles/base/fn.less';
```

Over~~

