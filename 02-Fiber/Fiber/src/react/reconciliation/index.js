import { updateNodeElement } from '../DOM'
import { createTaskQueue, arrified, createStateNode, getTag } from '../Misc'

// 任务队列
const taskQueue = createTaskQueue()

// 要执行的子任务
let subTask = null

// 等待提交
let pendingCommit = null

// 参数fiber就是最终的
// commitAllWork实现dom操作
const commitAllWork = fiber => {
  // console.log(fiber)
  fiber.effects.forEach(item => {
    // 追加操作
    if (item.effectTag === 'placement') {
      let fiber = item
      let parentFiber = item.parent

      // 如果是类组件或者函数组件 就把 parentFiber 赋值为 parentFiber.parent
      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent
      }

      // 最终要进行普通节点渲染
      if (fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(fiber.stateNode)
      }
    }
    // 跟新操作
    if (item.effectTag === 'update') {
      if (item.type === item.alternate.type) {
        // 节点类型相同
        updateNodeElement(item.stateNode, item, item.alternate)
      } else {
        // 节点类型不同 直接替换
        item.parent.stateNode.replaceChild(
          item.stateNode,
          item.alternate.stateNode
        )
      }
    }

  })
  // 备份旧的fiber节点对象
  fiber.stateNode.__rootFiberContainer = fiber

}
// 构建根节点的Fiber对象
const getFirstTask = () => {
  // 从任务队列中获取第一个子任务
  const task = taskQueue.pop()
  // console.log('firstTask---', task)
  // 返回最外层节点的fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer
  }
}
// 构建子节点
const reconcileChildren = (fiber, children) => {
  // children可能是对象 也可能是数组
  // 需要将children转换成数组
  // console.log('before--', children)
  const arrifiedChildren = arrified(children)
  // console.log('after---', arrifiedChildren)

  let index = 0
  let numberOfElements = arrifiedChildren.length
  let element = null
  let newFiber = null

  // 上一个兄弟fiber对象
  let prevFiber = null

  let alternate = null
  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child
  }

  while (index < numberOfElements) {
    // 子级 virtualDOM 对象
    element = arrifiedChildren[index]

    if (element && alternate) {
      // 更新操作
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element), // 普通节点
        effects: [],
        effectTag: 'update',
        parent: fiber,
        alternate
      }
      if (element.type === alternate.type) {
        // 类型相同
        newFiber.stateNode = alternate.stateNode
      } else {
        // 类型不同
        // 为fiber节点添加DOM对象或组件实例对象
        newFiber.stateNode = createStateNode(newFiber)
      }
    } else if (element && !alternate) {
      // 初始渲染
      // 子级fiber对象
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element), // 普通节点
        effects: [],
        effectTag: 'placement',
        parent: fiber
      }

      // 为fiber节点添加DOM对象或组件实例对象
      newFiber.stateNode = createStateNode(newFiber)

      console.log('newFiber-----', newFiber)
    }


    // fiber遍历的规则 如果是第一个节点 就是子节点 不是第一个子节点就是下一个兄弟节点
    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevFiber.sibling = newFiber
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling
    } else {
      alternate = null
    }

    // 保存上一个Fiber节点
    prevFiber = newFiber

    index++
  }

}
// fiber参数就是根节点fiber对象
// 构建fiber
const executeTask = fiber => {
  // 第一个参数为根节点的fiber 第二个参数为子节点的virtualDOM对象

  if (fiber.tag === 'class_component') {
    // 如果是类组件 fiber.stateNode.render() 返回子元素
    reconcileChildren(fiber, fiber.stateNode.render())
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props))
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }

  // console.log('构建子节点后fiber---', fiber)
  if (fiber.child) {
    return fiber.child
  }

  let currentExecutelyFiber = fiber

  while (currentExecutelyFiber.parent) {

    // 将构建好的所有fiber在每一级别effects数组收集 最终合并到最顶层的fiber对象的effects数组中
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([currentExecutelyFiber])
    )

    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling
    }
    currentExecutelyFiber = currentExecutelyFiber.parent
  }

  pendingCommit = currentExecutelyFiber
}

const workLoop = deadline => {

  // 如果子任务不存在 就去获取子任务
  if (!subTask) {
    // subTask是根节点的Fiber对象
    subTask = getFirstTask()
  }

  // 如果任务存在 并且浏览器空闲 就调用executeTask 方法执行任务 并接受任务 返回新任务
  while (subTask && deadline.timeRemaining() > 1) {
    // 如果任务存在 并且浏览器空闲
    subTask = executeTask(subTask)
  }
  if (pendingCommit) {
    commitAllWork(pendingCommit)
  }
}

// requestIdleCallback API操作 空闲执行操作
const performTask = deadline => {

  // 执行任务
  workLoop(deadline)

  // 当任务终止后 如果任务还没执行完
  // 需要再次调用 告诉浏览器 等到空闲的时候需要再次执行任务
  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask)
  }
}

// element为babel通过createElement转移后的virtualDOM对象 dom为root节点
export const render = (element, dom) => {
  // console.log('element----', element)
  // console.log('dom----', dom) // root

  /**
   * 1、向任务队列中添加任务
   * 2、指定在浏览器空闲时执行任务
   */
  /**
   * 任务就是通过 vdom 对象 构建 fiber对象
   */
  taskQueue.push({
    dom,
    props: { children: element }
  })

  // console.log(taskQueue.pop())

  // 调用 requestIdleCallback api
  // 在浏览器有空余时间就执行performTask
  requestIdleCallback(performTask)

}