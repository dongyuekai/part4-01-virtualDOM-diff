const createTeskQueue = () => {
  const taskQueue = []
  return {
    // 先进先出
    push: item => taskQueue.push(item),
    pop: () => taskQueue.shift(),
    // 判断任务队列中是否还有任务
    isEmpty: () => taskQueue.length === 0
  }
}
export default createTeskQueue