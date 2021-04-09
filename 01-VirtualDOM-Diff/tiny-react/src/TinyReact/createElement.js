export default function createElement(type, props, ...children) {

  // const childElements = [].concat(...children).map(child => {
  //   if (child instanceof Object) {
  //     return child
  //   } else {
  //     return createElement('text', { textContent: child })
  //   }
  // })

  // return {
  //   type,
  //   props,
  //   children: childElements
  // }

  // bool值为false的节点不显示
  const childElements2 = [].concat(...children).reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child)
      } else {
        result.push(createElement('text', { textContent: child }))
      }
    }
    return result
  }, [])
  
  return {
    type,
    // 在props中添加children属性
    props: Object.assign({ children: childElements2}, props),
    children: childElements2
  }
}