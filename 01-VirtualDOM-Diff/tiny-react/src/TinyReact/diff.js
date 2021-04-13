import mountElement from './mountElement'
import updateTextNode from './updateTextNode'

export default function diff(virtualDOM, container, oldDOM) {
  // console.log('更新前---virtualDOM---', virtualDOM)
  // console.log('更新前---container---', container)
  // console.log('更新前---oldDOM---', oldDOM)
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
  // 判断oldDOM是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    // 如果两个元素类型相同（比如都是div 都是button等）
    if (virtualDOM.type === 'text') {
      // 更新内容 找差异 然后更新oldDOM

      // console.log('更新后virtualDOM---', virtualDOM)
      // console.log('更新后oldVirtualDOM---', oldVirtualDOM)
      // console.log('更新后oldDOM---', oldDOM)

      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素属性

    }
    // 循环子元素
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    })
  }
}