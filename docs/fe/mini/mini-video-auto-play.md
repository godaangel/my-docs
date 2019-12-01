# 小程序的视频内容流自动播放

> 啊啊啊，又解决一个问题

## 起因

这个需求产生的起因，是在做内容流（包含文本，图片，视频）的时候，需要如果流里面有视频，则滚动到一定位置时自动播放视频，类似朋友圈、微博等等的自动播放效果。

![](/img/mini-video-auto-play.png)

## 第一版尝试

第一版的思路是：

* 收集当前所有内容流相对于页面头部的高度，做成一个Array
* 滚动过程中，监听页面滚动事件，当达到某个高度要求，则播放对应的索引视频

这个操作缺点太多了，捡几个主要的说

缺点：

* 内容流是一个个的组件，获取距离顶部高度不方便，也不太准。并且组件内需要通过事件传播到列表页，在列表页进行高度Array整理、事件监听、切换索引等等（如果有几种列表页，就要写几遍，很麻烦）
* 监听滚动事件本身就消耗性能，做了节流也不是那么优秀

## 第二版尝试

突然，就发现了`wx.createIntersectionObserver`这个属性，它的作用是：返回`intersectionObserver`对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见（创建一个目标元素，根据目标元素和视窗的相交距离来判断当前页面滚动的情况。通常这个方案也用于页面图片的懒加载）。参考[https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html "微信小程序文档")

怎么解释呢，就是可以理解为，做一个监听，如果当前被监听的元素，进入了你规定的视界或者离开你规定的视界，就触发。

那么，怎么做到监听呢，参考如下代码：

```js
/** 监控视频是否需要播放 */
let {screenWidth, screenHeight} = this.extData.systemInfo //获取屏幕高度
let topBottomPadding = (screenHeight - 80)/2 //取屏幕中间80的高度作为播放触发区域，然后计算上下视窗的高度 topBottomPadding
// 80这个高度可以根据UI样式调整，我这边基本两个视频间隔高度在100左右，超过了两个视频之间的间隔，就会冲突，两个视频会同时播放，不建议过大

const videoObserve = wx.createIntersectionObserver()
videoObserve.relativeToViewport({bottom: -topBottomPadding, top: -topBottomPadding})
    .observe(`#emotion${this.data.randomId}`, (res) => {
        let {intersectionRatio} = res
        if(intersectionRatio === 0) {
            //离开视界，因为视窗占比为0，停止播放
            this.setData({
                playstart: false
            })
        }else{
            //进入视界，开始播放
            this.setData({
                playstart: true
            })
        }

    })
```

其中，`observe` 是对应你需要监听的视频（也就是滚动进入视窗的元素）

那么，为什么选择`relativeToViewport`呢，是因为我们需要对它进入某一个视窗进行监听，而不是对进入整个屏幕视窗监听（因为可能整个视窗里会有多个视频）。

以上，就是整个逻辑思路。

> 最开始用的`relativeTo`监听视频进入某个元素(如`.view-port`)，但是后来发现每个页面都要写这个元素，太麻烦，并且容易遮盖操作区域
```js
// 太麻烦，后来舍弃了这个方案
<view class="view-port" style="height: 100rpx; position: fixed; z-index: 1;width: 100%;letf:0;top:50%;transform: translateY(-50%);"></view>
```

