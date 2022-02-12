/**
 * 元素
 */

import Context from '../core/context'

/**
 * 元素
 */
abstract class Element {
  protected context: Context
  dom: HTMLElement = document.createElement('div')
  active: boolean = true

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    this.context = context
  }

  /**
   * 销毁
   */
  protected destroy() {}

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
  /**
   * 聚焦
   * @description 重载
   */
  focus() {}
  /**
   * 失焦
   * @description 重载
   */
  blur() {}
}

export default Element
