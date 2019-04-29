# router

##### 只需要装 react-router-dom 其中自己包含 react-router

### react router 三类组件：

> 1.router (BrowserRouter,HashRouter) //前者 history 模式，后者 hash 模式
> 2.route matching 组件（Route, Switch）
> 3.navigation 组件（Link）

路由匹配是通过将 Route 组件的 path 属性于当前的 location 的 pathname 进行比较完成的，如果 Route 组件没有 path，他的组件对应的内容将一直被渲染出来

### switch

> 多组件一起使用，不强制用 Switch，但会很方便，它会迭代包含的所有的 Route 组件，并只渲染第一个路径匹配的 Route

```javascriptReact
<Switch>
  //exact 只有完全匹配才会渲染对应的组件 一般用于 ‘/’
  <Route exact path="/" exact component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  // 如果上面的 Route 的路径都没有匹配上，则 <NoMatch>被渲染，我们可以在此组件中返回 404
  <Route component={NoMatch} /> //这个叫无属性组件
</Switch>
```

### Route 组件加载子组件 Dom 有三种写法：

> 1.component 直接传组件名 不要将 component 属性设置为一个函数，然后在其内部渲染组件。这样会导致已经存在的组件被卸载，然后重写创建一个新组件，而不是仅仅对组件进行更新。

> 2.render 以函数的方式渲染组件，这里可以进行身份确认、拦截等操作

> 3.children

##### 1.component

```javascriptReact
<Route path="/user/:username" component={User} />;

function User({ match }) {
    return <h1>Hello {match.params.username}!</h1>;
}
```

##### 2.render

```javascriptReact
<Switch>
    <Route exact path="/" component={Home} />

    <Route path="/about"
        render={props => <About {...props} extra={someVariable} />}
    />

    <Route path="/contact"
        component={props => <Contact {...props} extra={someVariable} />}
    />
</Switch>
```

##### 3.children

```javascriptReact
const ListItemLink = ({ to, ...rest }) => (
    <Route path={to}
        children={({ match }) => (
            <li className={match ? "active" : ""}>
                <Link to={to} {...rest} />
            </li>
        )}
    />
);
```

### Navigation

> Navigation 可以添加 className
> <NavLink>组件是一个特殊的<Link>组件。当它的 path 与当前 location 匹配时，可以自定义其样式来表示当前页面位置。

```javascriptReact
// location = { pathname: '/react' }

<NavLink to="/react" activeClassName="hurray"> React </NavLink>

 <a href='/react' className='hurray'>React</a>

// Redirect
<Route exact path="/"
    render={() => (loggedIn ? ( <Redirect to="/dashboard"/> ) : (        <PublicHomePage/> )
    )}
/>
```
