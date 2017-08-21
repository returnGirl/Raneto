## 移动端开发

#### viewport的使用

**利用meta标签对viewport进行控制**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。也许允不允许用户缩放不同的网站有不同的要求，但让viewport的宽度等于设备的宽度，这个应该是大家都想要的效果，如果你不这样的设定的话，那就会使用那个比屏幕宽的默认viewport，也就是说会出现横向滚动条。



| width         | 设置**layout viewport** 的宽度，为一个正整数，或字符串"width-device" |
| ------------- | ---------------------------------------- |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                   |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                   |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                   |
| height        | 设置**layout viewport**  的高度，这个属性对我们并不重要，很少使用 |
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许 |

user-scalable 在safari的ios10中失效



ios 滚动卡顿

```css
overflow: scroll;
-webkit-overflow-scrolling: touch;
```



安卓没有 append