// 利用Fiber算法实现将jsx对象 转换成真实dom 显示在页面中
import React, { render } from './react'
const root = document.getElementById("root")
const jsx = (
  <div>
    <p>Hello React</p>
  </div>
)
render(jsx, root)