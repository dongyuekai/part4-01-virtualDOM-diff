import TinyReact from './TinyReact'

const root = document.getElementById('root')

// 1.普通的jsx对象
// const jsx = (
//   <div className="container">
//     <h1>你好 Tiny React</h1>
//     <h2 data-test="test">(编码必杀技)</h2>
//     <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div>
//     <h3>(观察: 这个将会被改变)</h3>
//     {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//     {2 == 2 && <div>2</div>}
//     <span>这是一段内容</span>
//     <button onClick={() => alert("你好")}>点击我</button>
//     <h3>这个将会被删除</h3>
//     2, 3
//     <input type="text" value="13" />
//   </div>
// )

// jsx代码在执行前babel配置项会默认调用React.createElement方法将当前jsx对象返回virtualDOM对象
// 普通jsx对象转换成virtualDOM对象
// TinyReact.render(jsx, root)  TinyReact.render函数把虚拟dom转换成真实的dom
// console.log('jsx--', jsx)

// 2、函数组件类型的jsx对象渲染
// function Demo() {
//   return <div>Hello</div>
// }
// function Heart(props) {
//   return (
//     <div>
//       {props.title}<br />
//       &hearts;
//       <Demo />
//     </div>
//   )
// }
// TinyReact.render(<Heart title='Hello React' />, root)

// 3、类组件的jsx对象渲染  
// class Alert extends TinyReact.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//    return (
//       <div>
//         {this.props.name}
//         {this.props.age}
//       </div>
//     )
//   }
// }
// TinyReact.render(<Alert name='张三' age={20} />, root)

// 4、更新DOM元素之VirtualDOM对比（节点类型相同的情况）
// const virtualDOM = (
//   <div className='container'>
//     {/* <h1>你好 Tiny React</h1> */}
//     <h2 data-test='test'>(编码必杀技)</h2>
//     {/* <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div> */}
//     {/* <h3>(观察：这个将会被改变)</h3> */}
//     {/* { 2 == 1 && <div>如果2和1相等渲染当前内容</div>} */}
//     {/* { 2 == 2 && <div>2</div>} */}
//     <span>这是一段内容</span>
//     <button onClick={() => alert('你好')}>点击我</button>
//     <h3>这个将会被替换</h3>
//     {/* 2, 3 */}
//     {/* <input type="text" value="13" /> */}
//   </div>
// )
// const modifyDOM = (
//   <div className="container">
//     {/* <h1>你好 Tiny React</h1> */}
//     <h2 data-test="test123">(编码必杀技)</h2>
//     {/* <div>
//       嵌套1 <div>嵌套 1.1</div>
//     </div> */}
//     {/* <h3>(观察：这个将会被改变)</h3> */}
//     {/* {2 == 1 && <div>如果2和1相等渲染当前内容</div>} */}
//     {/* {2 == 2 && <div>2</div>} */}
//     {/* <span>这是一段修改后的内容</span> */}
//     {/* <button onClick={() => alert("你好!!!")}>点击我</button> */}
//     {/* <h6>这个将会被替换</h6> */}
//     {/* 2, 3 */}
//     {/* <input type="text" /> */}
//   </div>
// )

// TinyReact.render(virtualDOM, root)

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000);

// 5 setState方法实现类组件更新
// class Alert extends TinyReact.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: 'Default Title'
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState({
//       title: "Changed Title"
//     })
//   }
//   render() {
//     console.log(this.state.title)
//     return (
//       <div>
//         {this.props.name}
//         {this.props.age}
//         <div>
//           {this.state.title}
//           <button onClick={this.handleClick} >改变title</button>
//         </div>
//       </div>
//     )
//   }
// }
// TinyReact.render(<Alert name='张三' age={20} />, root)


// 6 组件更新之不是同一个组件和是同一个组件的情况

// function Heart(props) {
//   return (
//     <div>
//       {props.title}
//       &hearts;
//     </div>
//   )
// }
// class Heart extends TinyReact.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {this.props.title}
//       &hearts;
//       </div>
//     )
//   }
// }


// class Alert extends TinyReact.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: "Default Title"
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState({ title: "Changed Title" })
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps")
//   }
//   componentWillUpdate() {
//     console.log("componentWillUpdate")
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate")
//   }
//   render() {
//     return (
//       <div>
//         {this.props.name}
//         {this.props.age}
//         <div>
//           {this.state.title}
//           <button onClick={this.handleClick}>改变Title</button>
//         </div>
//       </div>
//     )
//   }
// }
// TinyReact.render(<Alert name="张三" age={20} />, root)

// setTimeout(() => {
//   TinyReact.render(<Alert name="李四" age={50} />, root)
//   // TinyReact.render(<Heart title="我是Heart组件" />, root)
// }, 2000)

// 7 实现ref属性获取元素DOM对象 获取组件实例对象
// class Alert extends TinyReact.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {this.props.name}
//         {this.props.age}
//       </div>
//     )
//   }
// }
// class DemoRef extends TinyReact.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     console.log(this.input.value)
//     console.log(this.alert)
//   }
//   componentDidMount() {
//     console.log('componentDidMount---')
//   }
//   render() {
//     return (
//       <div>
//         <input type='text' ref={input => this.input = input} />
//         <button onClick={this.handleClick}>按钮</button>
//         <Alert name='zhangsan' age='20' ref={alert => this.alert = alert} />
//       </div>
//     )
//   }
// }
// TinyReact.render(<DemoRef />, root)

// 8 测试key属性的作用
class KeyDemo extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          id: 1,
          name: "张三"
        },
        {
          id: 2,
          name: "李四"
        },
        {
          id: 3,
          name: "王五"
        },
        {
          id: 4,
          name: "赵六"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const newState = JSON.parse(JSON.stringify(this.state))
    // newState.persons.push(newState.persons.shift())
    // newState.persons.splice(1, 0, { id: 100, name: 'dyk' })
    newState.persons.pop()
    this.setState(newState)
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.persons.map(person => (
              <li key={person.id}>{person.name}</li>
            ))
          }
        </ul>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
// TinyReact.render函数把虚拟dom转换成真实的dom
TinyReact.render(<KeyDemo />, root)