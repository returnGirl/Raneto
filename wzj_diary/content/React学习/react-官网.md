## React 学习历程

###### returnGirl

> 记录在react的学习和开发中遇到的各种问题

### 官网学习 v15.4.2

#### 定义组件的方法

```react
// js 函数
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// es6 方法
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 这两种方法  从 react的角度是相同的
// class方法有额外的特性
// Local state is exactly that: a feature available only to classes.

// 而function的写法更为conciseness(简洁)
```

#### 组件的生命周期

组件的生命周期分为三个状态：

1. Mounting
2. Updating
3. Unmounting

对应有五种处理函数

```react
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()
```

#### 第一个计时器组件 - - 利用状态切换自动计时

```jsx
class MyClock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render () {
    return (
      <div>
        <h1>This is a auto Clock Component!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <MyClock />,
  document.getElementById('root3')
)
```



##### tips

1. After compilation, JSX expressions become regular JavaScript objects.

2. If a tag is empty, you may close it immediately with `/>`, like XML

3. Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the attribute as a string literal rather than an expression.

4. Since JSX is closer to JavaScript than HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.

   For example, `class` becomes [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) in JSX, and `tabindex` becomes [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

5. react自带防范xss攻击功能。例如用户评论框，它会转义后输出。

   JS中涉及到修改dom的时候,要考虑清楚，必要的时候需要对数据进行转义。

   在使用框架的时候，eg:React等，在输出数据的时候默认转义。

6. 每次ReactDOM.render() 调用只会更新应该更新的内容。React Only Updates What's Necessary

7. Always start component names with a capital letter.

8. Components must return a single root element. This is why we added a `<div>` to contain all the `<Welcome />` elements.

9. **All React components must act like pure functions with respect to their props.**

    it must never modify its own props.

10. ​



#### react-router

1. 在index文件中把所有的路由都写上去

   然后路由间的跳转使用其Link组件

   `<a><Link to="/index">click me</Link></a>`


2. **hash 和 html5模式**

   使用 hashHistory, browserHistory . 在`<Router history={ browserHistory }>` 传入参数即可。

3. path属性如果使用相对路径（不以/开头），匹配时就会相对于父组件的路径。

4. 父级路由嵌套路由时，app的组件要添加` {this.props.children}`才能正常使用. IndexRoute指定默认路径的类似于Index.html的文件。

   ```react
   render(
     (
     <Router history={ browserHistory }>
       <Route path="/" component={App}>
         <IndexRoute component={MyClock}/>
         <Route path="index" component={MyClock1} />
       </Route>
     </Router> )
     ,
     document.getElementById('root')
   );
   ```

   ​

5. 如果要连接到跟路由，使用IndexLink 而不是 Link组件

6. 如果是点击按钮跳转的话，使用browserHistory.push 或者 context对象

7. ​

#### 资源

1. 阮一峰教程 http://www.ruanyifeng.com/blog/2015/03/react.html
2. React官网 https://facebook.github.io/react/tutorial/tutorial.html
3. ​
