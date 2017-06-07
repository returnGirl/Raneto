#### 1、CSS优先级
>（外部样式）External style sheet <（内部样式）Internal style sheet <（内联样式）Inline style

```html
<head>
    <style type="text/css">
      /* 内部样式 */
      h3{color:green;}
    </style>

    <!-- 外部样式 style.css -->
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <!-- 设置：h3{color:blue;} -->
</head>
<body>
    <h3>测试！</h3>
</body>
``` 
对于常见的选择器，其优先级是由权值决定的。

1.  内联样式表的权值最高 1000；

2.  ID 选择器的权值为 100

3.  Class 类选择器的权值为 10

4.  HTML 元素选择器的权值为 1

**CSS 优先级法则：**

A  选择器都有一个权值，权值越大越优先；

B  当权值相等时，后出现的样式表设置要优于先出现的样式表设置；

C  创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；

D  继承的CSS 样式不如后来指定的CSS 样式；

E  在同一组属性设置中标有“!important”规则的优先级最大


#### 2、子串匹配属性选择器
[foo^="bar"] 选择属性值以bar开头的所有元素。
[foo$="bar"] 选择属性值以bar结尾的所有元素。
[foo*="bar"] 选择属性值包含bar的所有元素。

#### 3、选择器
```css
h1 em {
  /*后代选择器*/
};
h1.className {
  /*类选择器*/
}
h1 > span {
  /* 选择h1下为span的子元素(第一层子元素) */
}
h1 + p {
  /* 所有紧接着在h1后的第一个p元素(兄弟节点) */
}

```

#### 伪类 pseudo-class
1. 链接伪类
- :link
- :visited
2. 动态伪类 -- 动态伪类可以作用到任何元素上
-   :hover

-   :focus

-   :active

    伪类可以结合使用。

#### 伪元素选择器
css2.1中定义了四个伪元素
为：设置首字母样式、设置第一行样式、设置之前和之后元素的样式。

伪元素选择器
还有
1. :first-letter
2. :first-line
3. :before
4. :after

#### 长度单位
1. 绝对长度单位：英寸(in) 厘米(cm) 毫米(mm) 点(pt) 派卡(pc)
2. 相对长度单位：em ex 和 px

相对长度单位更为合适，而其中，em是最灵活的。因为它随字体大小缩放，所以元素和元素操作能够更为一致。


#### CSS实现多行文本省略号
传统的单行文本省略号
```css
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

两列布局；右侧固定60px;左侧自适应；案例：搜索框

```css
#left{ 
  float: left; 
  width: 100%; 
  background: orange;
  padding-right: 60px;
}
#right{ 
  float: left; 
  width: 60px; 
  margin-left: -60px; 
  background: #ccc;
}
```

自适应居中
```css
// 父元素
text-align: center;
// 子元素
display: inline-block;
// 不设置宽度和margin居中
```


