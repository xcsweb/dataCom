# 查看内容
---
```
import ViewContent from "common/ViewContent"
查看内容

<ViewContent v-model="dialogVisible" :content="formData.des"></ViewContent>

一般的图片视频文本都显示

<ViewContent v-model="dialogVisible" :content="formData.content" :imgList="formData.imgfiles" :videoList="formData.videoList"></ViewContent>

```
图片视频隐藏
:imgHidden=’true’
:videoHidden=’true’
图片视频文本框标题文字
imgTitle=’图片’
videoTitle=’视频’
```
<ViewContent v-model="dialogVisible1" :imgHidden="true" :videoHidden="true" :content="formData.content"></ViewContent>
```