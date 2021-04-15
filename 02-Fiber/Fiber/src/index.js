// 利用Fiber算法实现将jsx对象 转换成真实dom 显示在页面中
import React, { render, Component } from './react'
const root = document.getElementById("root")

// jsx对象
// const jsx = (
//   <div>
//     <p>Hello React</p>
//     <p>Hi React</p>
//   </div>
// )
// render(jsx, root)


// 类组件
// class Greating extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {this.props.name}
//         123344443
//       </div>
//     )
//   }
// }
// render(<Greating name='dyk'/>, root)

// 函数组件
function FnComponent(props) {
  return (
    <div>
      {props.title}
      FnComponent
    </div>
  )
}
render(<FnComponent title="hello" />, root)