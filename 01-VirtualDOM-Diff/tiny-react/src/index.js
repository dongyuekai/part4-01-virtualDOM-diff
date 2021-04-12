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

// jsx是被bable转换成React.createElement方法后返回的virtualDOM对象 普通jsx对象转换成的virtualDOM对象
// TinyReact.render(jsx, root)
// jsx代码在执行前会被bable转换成React.createElement方法的调用，React.createElement方法在调用后会返回vitualDom对象
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
class Alert extends TinyReact.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
      </div>
    )
  }
}
TinyReact.render(<Alert name='张三' age={20} />, root)
