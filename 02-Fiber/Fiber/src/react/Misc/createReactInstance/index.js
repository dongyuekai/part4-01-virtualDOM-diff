export const createReactInstance = fiber => {
  let instance = null
  if (fiber.tag == 'class_component') {
    // 如果是类组件 那么fiber.type就是组件的构造函数
    instance = new fiber.type(fiber.props)
  } else {
    instance = fiber.type
  }
  return instance
}