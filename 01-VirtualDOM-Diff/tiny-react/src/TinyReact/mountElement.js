import mountNativeElement from './mountNativeElement'
import isFunction from './isFuncton'
import mountComponent from './mountComponent'
// 渲染组件
export default function mountElement(virtualDOM, container) {
  // component（组件） or NativeElement(普通jsx对象)
  console.log(virtualDOM)
  if (isFunction(virtualDOM)) {
    // 组件
    console.log('---是组件---不确定是函数组件还是类组件---')
    mountComponent(virtualDOM, container)
  } else {
    // NativeElement(普通jsx对象)
    mountNativeElement(virtualDOM, container)
  }
}