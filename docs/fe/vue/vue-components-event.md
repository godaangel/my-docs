# 自定义组件绑定事件

在组件绑定`@on-xxx`事件，可以在组件内部使用`$emit(‘on-xxx’,…)`调用，这样可以保证每个组件独立触发，如果使用`vue-bus`进行开发，则需要考虑多个重复组件触发时触发多次问题。例子如下。

## 父级调用方式

```js
<my-component @on-my-handler="clickHandler"></my-component>
```

在父级所在单元（vue文件）中的methods设置如下

```js
methods: {
    // 父级里的处理逻辑（也就是操作完my-component组件后，你需要的业务逻辑）
    clickHandler(res){
        console.log(res); //res为子组件的传参,会输出someParams对象
    }
}
```

## 子组件编写方式

```js
<template>
    <div @click="childClick">点击我可以触发my-handler事件</div>
</template>

exprot default {
    ... ...
    methods: {
        childClick() {
            let someParams = {...};
            //触发当前操作的组件绑定的事件，该例为父级的clickHandler
            //保证了组件触发的正确性，并且多个重复组件只触发操作的那个，vue-bus就需要额外设定参数区分
            this.$emit('on-my-handler', someParams); 
        }
    }
}
```



