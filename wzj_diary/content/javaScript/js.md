### JSONP的使用---解决跨域请求问题 
JSON with Padding 填充式JSON  
```javascript
function handle(res) { alert("your ip" + res.ip + res.city); }
//创建script标签
var script = document.createElement('script');
script.src = 'http://freegeoip.net/json/?callback=handle';
document.body.insertBefore(script, document.body.firstChild);
```
这样，就能注入脚本。


### promise
promise链如何中断或者取消.在一定条件下，我不想执行接下来的promise了。

可以抛出error, catch到不作为。
```javascript
return Promise.reject({
  notRealPromiseException: true,
}); // p2
.catch(ex => {
  console.log('ex: ', ex);
  if (ex.notRealPromiseException) {
    // 一切正常，只是通过 catch 方法来中止 promise chain
    // 也就是中止 promise p2 的执行
    return true;
  }
  // 真正发生异常
  return false;
});
```
详见[Promise 的链式调用与中止](http://www.tuicool.com/articles/eERRZjA)

关于promise的一些说明：
+ promise 的 then 方法里面可以继续返回一个新的 promise 对象  

+ 下一个 then 方法的参数是上一个 promise 对象的 resolve 参数  

+ catch 方法的参数是其之前某个 promise 对象的 rejecte 参数  

+ 一旦某个 then 方法里面的 promise 状态改变为了 rejected，则promise 方法连会跳过后面的 then 直接执行 catch

+ catch 方法里面依旧可以返回一个新的 promise 对象