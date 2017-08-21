## web 图像处理入坑

> 引言：前阵子因为需求，需要前端在图像中圈出一个人脸，服务端返回的是坐标像素点位置以及长宽，因为图片过大不能直接从服务端发送处理后的。

前端web图像处理解决方案。



### Jimp

```javascript
Jimp.read('/images/shujuyuan.jpeg').then(function (image) {
  // 画框
  for (var i = 0; i < len; i++) {
    image.setPixelColor(0xFF0000FF, centerPoint_x + i, centerPoint_y);
  }
  for (var i = 0; i < len; i++) {
    image.setPixelColor(0xFF0000FF, centerPoint_x + i, centerPoint_y + len);
  }
  for (var i = 0; i < len; i++) {
    image.setPixelColor(0xFF0000FF, centerPoint_x, centerPoint_y + i);
  }
  for (var i = 0; i < len; i++) {
    image.setPixelColor(0xFF0000FF, centerPoint_x + len, centerPoint_y + i);
  }
  image.getBase64(Jimp.MIME_JPEG, function (err, src) {
    // var img = document.createElement("img");
    var img = document.getElementById('sourceImg');
    img.setAttribute("src", src);
    // document.body.appendChild(img);
   });
});
```



## 双指缩放

特别想实现的功能是图片的缩放功能，现有是有一些能用的库，能够支持图片的缩放的。但是大多数都是基于canvas实现的。



找到了一个不是使用canvas的，能够监听双指缩放事件。

百度的touch.js。

该项目好像已经没有在维护了的样子。



```javascript
touch.on(‘#btn-ok’,’pinchin’,function(ev){
 
//这里是你想要执行的操作，随便写
})
```

http://www.h5w3.com/?p=263

api手册  http://cloudajs.org/docs/step4_API_Documentation#h2_7