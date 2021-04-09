// 渲染组件
import isFunctionComponent from './isFunctionComponent'
export default function mountComponent(virtualDOM, container) {
  // 判断组件是类组件还是函数组件（原型上有没有render函数）
  if (isFunctionComponent(virtualDOM)) {
    console.log('函数组件...')
  }
}