// 渲染组件
import isFunctionComponent from './isFunctionComponent'
import isFunction from './isFuncton'
import mountNativeElement from './mountNativeElement'

export default function mountComponent(virtualDOM, container, oldDOM) {
  let nextVirtualDOM = null
  let component = null
  // 判断组件是类组件还是函数组件（原型上有没有render函数）
  if (isFunctionComponent(virtualDOM)) {
    console.log('函数组件...')
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
    console.log('nextVirtualDOM---', nextVirtualDOM)
  } else {
    console.log('类组件...')
    nextVirtualDOM = buildClassComponent(virtualDOM)
    component = nextVirtualDOM.component
  }

  // 如果函数组件返回的还是一个组件那就重新再递归解析
  if (isFunction(nextVirtualDOM)) {
    console.log('isFunction-----')
    mountComponent(nextVirtualDOM, container, oldDOM)
  } else {
    console.log('notFunction----')
    mountNativeElement(nextVirtualDOM, container, oldDOM)
  }

  // 处理ref获取组件的实例
  if (component) {
    component.componentDidMount()
    if (component.props && component.props.ref) {
      component.props.ref(component)
    }
  }
}
// 得到函数组件返回的内容
function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}
// 得到类组件返回的内容
function buildClassComponent(virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props || {})
  const nextVirtualDOM = component.render()
  // 将component实例挂载到nextVirtualDOM对象上 便于mountNativeElement通过第一个参数拿到component实例 从而调用setDOM方法
  nextVirtualDOM.component = component
  return nextVirtualDOM
}
