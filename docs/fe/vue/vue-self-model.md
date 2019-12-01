# 自定义组件v-model

对于自定义组件，如何实现数据双向绑定呢？

VueJS提供了一种机制，通过在组件内部`$emit`触发`input`事件来实现数据的双向绑定，此时组件需要配合`props: [value]`来使用。如下所示。

## 子组件

功能是点击来激活不同的块级元素。同时需要跟父组件传过来的数据双向绑定。

```js
<template>
  <div class="self-components">
    <div class="item" :class="{'active':item.value==value}" @click="chosedOne(item.value)" :key="item.value" v-for="item in list">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelfComponents',
  props: ['value'],
  data () {
    return {
      list: [{
        name: '1',
        value: 1
      },{
        name: '2',
        value: 2
      },{
        name: '3',
        value: 3
      }]
    }
  },
  methods: {
    chosedOne(value){
      this.$emit('input', value);
    }
  }
}
</script>

<style lang="less">
.self-components{
  .item{
    line-height: 40px;
    width: 120px;
    margin: 0 auto;
    background: #e5e8ef;
    margin-bottom: 10px;
    &.active{
      background: #fc4548;
      color: #fff;
    }
  }
}
</style>
```

## 父级

调用子组件，并监听value变化，实时输出。

```js
<template>
  <div class="v-model">
    <self-components v-model="value"></self-components>
  </div>
</template>

<script>
import SelfComponents from '@/components/SelfComponents';
export default {
  name: 'TestModel',
  components: {
    SelfComponents
  },
  data () {
    return {
      value: 1
    }
  },
  // 监听点击后的value变化
  watch: {
    value(newVal, oldVal){
      console.log(newVal);
    }
  }
}
</script>
```



