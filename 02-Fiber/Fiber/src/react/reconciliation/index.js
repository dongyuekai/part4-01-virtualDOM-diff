import { createTaskQueue, arrified, createStateNode, getTag } from '../Misc'

const taskQueue = createTaskQueue()
let subTask = null

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
    child: null
  }
}
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
  let prevFiber = null

  while (index < numberOfElements) {
    element = arrifiedChildren[index]
    // console.log('element--', element)
    newFiber = {
      type: element.type,
      props: element.props,
      tag: getTag(element), // 普通节点
      effects: [],
      effectTag: 'placement',
      parent: fiber
    }

    newFiber.stateNode = createStateNode(newFiber)

    // fiber遍历的规则 如果是第一个节点 就是子节点 不是第一个子节点就是下一个兄弟节点
    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevFiber.sibling = newFiber
    }

    // 保存上一个Fiber节点
    prevFiber = newFiber

    index++
  }

}
// fiber参数就是根节点fiber对象
const executeTask = fiber => {
  // 第一个参数为根节点的fiber 第二个参数为子节点的virtualDOM对象
  reconcileChildren(fiber, fiber.props.children)
  // console.log('构建子节点后fiber---', fiber)
  if (fiber.child) {
    return fiber.child
  }
  console.log(fiber)
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
}
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