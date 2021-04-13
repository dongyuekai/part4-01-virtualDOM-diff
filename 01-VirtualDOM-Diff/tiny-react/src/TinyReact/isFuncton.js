// 判断是否是函数
export default function isFunction(virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === "function"
}