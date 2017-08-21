```javascript
  var centerPoint_x = 100;
  var centerPoint_y = 100;
  var len = 100;

  Jimp.read('/images/shujuyuan.jpeg').then(function (image) {
    console.log(image);
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

使用 Jimp库，下载地址：

wget https://raw.githubusercontent.com/oliver-moran/jimp/master/browser/lib/jimp.min.js

github: https://github.com/oliver-moran/jimp