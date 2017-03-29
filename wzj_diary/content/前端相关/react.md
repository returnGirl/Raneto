#### React 学习历程

###### returnGirl

> 记录在react的学习和开发中遇到的各种问题

#### 1、第一个React程序。ReactDom.render();

```react
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>

```

#### 2、在jsx中插入js语法

```react
<script type="text/babel">

  var todoItems = [{ "owner": 'wzj', "task": '吃饭' }];
  ReactDOM.render(
    <ul>
      {
        todoItems.map(function(item) {
          return <input value={item.owner} />
        })
      }
    </ul>,
    document.getElementById('example')

  );

</script>
```

#### 3、jsx语法简介

HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX，它允许 HTML 与 JavaScript 的混写

```react
var arr = [ 
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
```

jsx会把它解析成为一个数组，里面有两个react的dom对象。

jsx允许将javascript的变量直接插入模板，如果这个变量是一个数组，那么会展开它的所有成员。



#### 4、React组件 React.createClass();

```react
var HelloMsg = React.createClass({
  render: function() {
    return <h1 className={this.props.className}>{this.props.name}</h1>
  }
});

ReactDOM.render(
  <HelloMsg name="wangzhenjia" className="test" />,
  document.getElementById("example")
);
```

React允许将代码封装成组件，React.createClass就是用于生成一个组件类。

1. 组件类的**第一个字母必须大写**。用于区分自定义标签和默认标签。

2. 组件类只能包含一个顶层标签。即不能多个标签并列。除非用一个大标签包起来。

   如`return <h1>{this.props.name}</h1><p></p>`出错。

   ​

模板插入 `<HelloMsg />` 时，会自动生成 `HelloMsg` 的一个实例。

组件的用法类似html的标签。其属性可以在组件类的 this.props对象上获取。

**特例** class属性需要写成className   for属性需要写成htmlFor



#### 5、this.props.children

`this.props` 对象的属性与组件的属性一一对应，但是有一个例外，就是 `this.props.children` 属性。

 `this.props.children` 有可能是undefined 或者 数组

React 提供一个工具方法 [`React.Children`](https://facebook.github.io/react/docs/top-level-api.html#react.children) 来处理 `this.props.children`

```react
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);
```

#### 6、PropTypes 组件类属性--用于验证组件实例是否符合要求

```react
var data = '123';

var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function() {
    return {
      test: 'hello world'
    }
  },
  render: function() {
    return <h1> {this.props.title} {this.props.test} </h1>;
  }
});

ReactDOM.render(
  <MyTitle title={data}/>,
  document.getElementById('example')
);
```

此外 ， `getDefaultProps` 方法可以用来设置组件属性的默认值。



#### 7、获取组件的真实DOM

```react
var MyComponent = React.createClass({
  clickButton: function() {
    this.refs.myInput.value = 'aaa';
  },

  render: function() {
    return (
      <div>
        <input ref="myInput" />
        <button onClick={this.clickButton}>Click me </button>
      </div>
    );
  }
})

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
```



#### 8、this.state

该对象下的属性一旦通过事件被处理（修改），即会自动触发this.render重新渲染组件。

**和this.props的区别：**

`this.props` 表示那些一旦定义，就不再改变的特性，而 `this.state` 是会随着用户互动而产生变化的特性。

`getInitialState` 方法用于定义初始状态。

```react
getInitialState: function() {
    return {liked: false};
},
```



#### 9、实现类似双向数据绑定效果

```react
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
```

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