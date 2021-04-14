import { createTaskQueue } from '../Misc'

const taskQueue = createTaskQueue()
let subTask = null

// 构建根节点的Fiber对象
const getFirstTask = () => {
  // 从任务队列中获取第一个子任务
  const task = taskQueue.pop()
  console.log('firstTask---', task)
  // 返回最外层节点的fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null
  }
}
const executeTask = fiber => {
  
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

export const render = (element, dom) => {
  console.log('element----', element)
  console.log('dom----', dom) // root

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