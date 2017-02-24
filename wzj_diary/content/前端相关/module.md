#### NodeJS exports 和 module.exports的区别

> 本文旨在通过一些简单的例子说明CommonJS 模块规范中，exports和module.exports的区别和联系。

##### 1、模块变量

在编译过程中，Node对获得的JavaScript文件内容进行包装。每个模块文件中存在```require, exports, module, __filename, __dirname 这五个变量```.

编译过程一个正常的javascript文件会被包装成：

```javascript
(function (exports, require, module, __filename, __dirname) {
  var math = require = ('math');
  export.area = function (radius) { return Math.PI * radius * radius; };
});

```

##### 2、JS的形参引用问题

在上面代码中，exports是通过形参的形式传入的，直接赋值形参能够改变形参的引用，但不能改变作用域外的值。

例子如下: 

```javascript

function test(a) {
  a = 100;
  console.log('in function test ' + a);
}

var a = 10;
test(a);
console.log('out function test ' + a);


function test1(obj) {
  obj.b = 100;
  console.log('in function test1 ' + obj.b);
}

var obj = {};
obj.b = 10;
test1(obj);

console.log(obj.b);

```

运行结果如下: 

```
in function test 100
out function test 10
in function test1 100
100
```



##### 3、赋值给module.exports对象

所以，如果要达到require引入一个类的效果，要赋值给module.exports对象。

我们经常看到一些写法为: 

```javascript
exports = module.exports = { ... };
```

##### 4、覆盖问题

虽然我们不能通过exports直接引入一个对象，但是我们可以给exports的子对象赋值。

因为exports 和 module.exports 初始是指向同一个空对象 {}。

所以在不使用module.exports 的时候，如```exports.test = function ( ) { … } ```同样能达到引入的效果。



但是如果我们使用了module.exports指向新的对象，这时候exports断开了与 module.exports 的引用。

那么通过exports = module.exports 能够让exports重新指向module.exports 对象。

```javascript
exports = module.exports = { a: 1 };
exports.test = { b : 1 };
```



当然笔者觉得弄得这么麻烦还不如全都用module.exports.prop 来写。





— returnGirl