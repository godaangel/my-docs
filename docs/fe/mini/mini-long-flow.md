# 复杂瀑布流长列表页踩坑记录
这篇文章主要是解决小程序无限滚动瀑布流页面引起的ios内存不足，自动退出问题

## 问题
我们有一个列表展示页，是无限瀑布流式的，展示的元素我们封装成了单个组件，暂且叫它`Item组件`。这个瀑布流包含若干个Item组件，并且这个Item组件也比较复杂，包含各种展示样式（根据不同类型，大概有9种吧，反正渲染节点很多），在进行滑动的过程中，item大概加载30-40个以后，就会造成小程序内存不足而退出，蓝瘦香菇......

## 解决思路
将超出屏幕一定部分的列表内的组件进行不渲染的处理（也就是用wx:if卸载掉组件），当到达渲染临界点时再开始渲染；保证每次少量的数据展示。
> 我们的项目中是保持15条Item，我们是每次分页请求5条，按照前5条，中间5条和后5条来划分，如果不在这个范围，则用一个等高度的骨架代替，并且卸载这些组件

## 实现方式
使用[曝光监听](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html)，当一个Item曝光时，记录Item高度，并放到数组里面，作为骨架的填充高度，如果已经记录了高度，则不再重复记录；曝光时向外传递一个当前渲染范围的中心值（比如当前Item所属页码，或者当前Item索引），以此进行处理；
> *这里有一点要注意，如果你的列表item组件比较复杂，需要在ready的时候将记录的高度设置为item最小高度，不然组件重新装载时会有一定的渲染时间，在临界点会造成跳屏*【此处已经通过骨架组件解决，可以忽略，只是作为踩坑记录】

### 此时优化点
- 为避免频繁setData和渲染，做了防抖函数，时间是600ms

### 此时缺点
- 滑动特别快时，会出现白屏，是因为曝光监听是在组件里面，而超快速滚动时，组件没有装载进来，也无法进行曝光监听，所以无法触发，这里考虑用**骨架组件**进行二次监听曝光

## 优化迭代
- 将骨架组件作为外壳套在Item外面（用`slot`），并对骨架进行监听曝光，可以解决上面缺点
- 给骨架组件做一个常规骨架屏样式，而不是纯白色，看起来更优雅

### 最后，还是尽量减少节点数，优化代码