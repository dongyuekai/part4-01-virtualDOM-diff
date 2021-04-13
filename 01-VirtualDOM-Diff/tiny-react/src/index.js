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
// TinyReact.render(jsx, root)
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
const virtualDOM = (
  <div className='container'>
    {/* <h1>你好 Tiny React</h1> */}
    <h2 data-test='test'>(编码必杀技)</h2>
    {/* <div>
      嵌套1 <div>嵌套 1.1</div>
    </div> */}
    {/* <h3>(观察：这个将会被改变)</h3> */}
    {/* { 2 == 1 && <div>如果2和1相等渲染当前内容</div>} */}
    {/* { 2 == 2 && <div>2</div>} */}
    <span>这是一段内容</span>
    <button onClick={() => alert('你好')}>点击我</button>
    {/* <h3>这个将会被删除</h3> */}
    {/* 2, 3 */}
    {/* <input type="text" value="13" /> */}
  </div>
)
const modifyDOM = (
  <div className="container">
    {/* <h1>你好 Tiny React</h1> */}
    <h2 data-test="test123">(编码必杀技)</h2>
    {/* <div>
      嵌套1 <div>嵌套 1.1</div>
    </div> */}
    {/* <h3>(观察：这个将会被改变)</h3> */}
    {/* {2 == 1 && <div>如果2和1相等渲染当前内容</div>} */}
    {/* {2 == 2 && <div>2</div>} */}
    <span>这是一段修改后的内容</span>
    <button onClick={() => alert("你好!!!")}>点击我</button>
    {/* <h3>这个将会被删除</h3> */}
    {/* 2, 3 */}
    {/* <input type="text" /> */}
  </div>
)

TinyReact.render(virtualDOM, root)

setTimeout(() => {
  TinyReact.render(modifyDOM, root)
}, 2000);
