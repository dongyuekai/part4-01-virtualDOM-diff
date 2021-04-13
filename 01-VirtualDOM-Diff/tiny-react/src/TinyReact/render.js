
import diff from './diff'
export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild  // 默认值取当前元素的firstChild  获取旧的DOM作为默认值 这里是第二次render的时候
) {
  diff(virtualDOM, container, oldDOM)
}