import mountElement from './mountElement'
import updateTextNode from './updateTextNode'
import updateNodeElement from './updateNodeElement'
import createDOMElement from './createDOMElement'

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
    // 更新文本节点内容
    if (virtualDOM.type === 'text') {
      // 更新内容 找差异 然后更新oldDOM

      // console.log('更新后virtualDOM---', virtualDOM)
      // console.log('更新后oldVirtualDOM---', oldVirtualDOM)
      // console.log('更新后oldDOM---', oldDOM)

      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素节点属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }
    // 循环子元素
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    })
  } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM !== 'function') {
    // 如果两个元素类型不同 就使用virtualDOM生成真实DOM对象 然后替换老的DOM对象
    const newElement = createDOMElement(virtualDOM)
    oldDOM.parentNode.replaceChild(newElement, oldDOM)
  }
}