/**
 * 元素
 */

import Context from '../core/context'

/**
 * 元素
 */
abstract class Element {
  context: Context
  dom: HTMLElement

  /**
   * 元素
   */
  constructor(context: Context, dom: HTMLElement) {
    this.context = context
    this.dom = dom
  }

  /**
   * 删除
   */
  remove() {
    this.dom.remove()
  }
}

export default Element
