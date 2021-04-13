import diff from './diff'
export default class Component {
  constructor(props) {
    this.props = props
  }
  setState(state) {
    // this.state是子类的 当前this表示的是Alert类
    this.state = Object.assign({}, this.state, state)
    // 获取最新的要渲染的 virtualDOM对象
    let virtualDOM = this.render()
    // 获取旧的 virtualDOM 对象 进行比对
    let oldDOM = this.getDOM()
    // console.log('oldDOM--', oldDOM)
    // 获取容器
    let container = oldDOM.parentNode
    // 实现对象
    diff(virtualDOM, container, oldDOM)
  }
  setDOM(dom) {
    this._dom = dom
  }
  getDOM() {
    return this._dom
  }
}