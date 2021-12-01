/**
 * 元素
 */

import Context from '../core/context'

/**
 * 元素
 */
abstract class Element {
  context: Context
  dom: HTMLElement = document.createElement('div')

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    this.context = context
  }

  /**
   * 销毁
   * @description 重载
   */
  destroy() {}

  /**
   * 挂载
   */
  mount() {
    this.context.dom.appendChild(this.dom)
    this.context.elements.push(this)
  }
  /**
   * 删除
   */
  remove() {
    this.dom.remove()
    this.destroy()
    let i = this.context.elements.indexOf(this)
    if (i > -1) {
      this.context.elements.splice(i, 1)
    }
  }
}

export default Element
