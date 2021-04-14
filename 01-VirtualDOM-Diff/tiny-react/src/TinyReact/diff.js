import mountElement from './mountElement'
import updateTextNode from './updateTextNode'
import updateNodeElement from './updateNodeElement'
import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'
import diffComponent from './diffComponent'

// diff和render的函数相同
export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
  const oldComponent = oldVirtualDOM && oldVirtualDOM.component
  // 判断oldDOM是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (virtualDOM.type !== oldVirtualDOM.type
    && typeof virtualDOM.type !== 'function'
  ) {
    // 如果两个元素类型不同 并且不是组件 
    // 就使用virtualDOM生成真实DOM对象 然后替换老的DOM对象
    const newElement = createDOMElement(virtualDOM)
    oldDOM.parentNode.replaceChild(newElement, oldDOM)
  } else if (typeof virtualDOM.type === 'function') {
    // 如果是组件
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    // 如果两个元素类型相同（比如都是div 都是button等）
    // 更新文本节点内容
    if (virtualDOM.type === 'text') {
      // 更新内容 找差异 然后更新oldDOM

      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素节点属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }


    // 1 将拥有key属性的子元素放置在一个单独的对象中
    let keyedElements = {}
    for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
      let domElement = oldDOM.childNodes[i]
      // 元素节点
      if (domElement.nodeType === 1) {
        let key = domElement.getAttribute('key')
        if (key) {
          keyedElements[key] = domElement
        }
      }
    }


    let hasNoKey = Object.keys(keyedElements).length === 0
    if (hasNoKey) {
      // 如果没有key 就用索引对比方式
      // 对比子元素 
      virtualDOM.children.forEach((child, i) => {
        diff(child, oldDOM, oldDOM.childNodes[i])
      })
    } else {
      // 如果有key 就用key来对比
      // 2 循环 virtualDOM的子元素 获取子元素的 key属性
      virtualDOM.children.forEach((child, i) => {
        let key = child.props.key
        if (key) {
          let domElement = keyedElements[key]
          if (domElement) {
            // 3 看看当前位置的元素是不是我们期望的元素
            if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
              oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
            }
          } else {
            // 新增元素
            mountElement(child, oldDOM, oldDOM.childNodes[i])
          }
        }
      })
    }


    // 删除节点（当旧节点的数量大于新节点的数量是要删除多余的旧节点）
    let oldChildNodes = oldDOM.childNodes
    // 判断旧节点的数量
    if (oldChildNodes.length > virtualDOM.children.length) {
      // 有节点需要被删除 
      for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length; i--) {
        unmountNode(oldChildNodes[i])
      }
    }

  }
}