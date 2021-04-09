import mountNativeElement from './mountNativeElement'
export default function mountElement(virtualDOM, container) {
  // component（组件） or NativeElement(普通jsx对象)
  mountNativeElement(virtualDOM, container)
}