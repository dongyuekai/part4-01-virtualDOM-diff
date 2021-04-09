import isFunction from "./isFuncton"

// 判断是否是函数组件 (是否有render，有就不是 没有就是)
export default function isFunctionComponent(virtualDOM) {
  const type = virtualDOM.type
  return (
    type && isFunction(virtualDOM) &&
    !(type.prototype && type.prototype.render)
  )
}