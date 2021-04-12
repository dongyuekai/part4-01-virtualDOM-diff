// 渲染组件
import isFunctionComponent from './isFunctionComponent'
import isFunction from './isFuncton'
import mountNativeElement from './mountNativeElement'

export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null
  // 判断组件是类组件还是函数组件（原型上有没有render函数）
  if (isFunctionComponent(virtualDOM)) {
    console.log('函数组件...')
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
    console.log('nextVirtualDOM---', nextVirtualDOM)
  }
  // 如果函数组件返回的还是一个组件那就重新再递归解析
  if (isFunction(nextVirtualDOM)) {
    console.log('isFunction-----')
    mountComponent(nextVirtualDOM, container)
  } else {
    console.log('notFunction----')
    mountNativeElement(nextVirtualDOM, container)
  }
}
// 得到组件返回的内容
function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}