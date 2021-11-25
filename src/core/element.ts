/**
 * @name 元素
 */

import Context from '../core/context'

/**
 * @name 元素
 */
abstract class Element {
  context: Context
  dom: HTMLElement

  /**
   * @name 元素
   */
  constructor(context: Context, dom: HTMLElement) {
    this.context = context
    this.dom = dom
  }

  /**
   * @name 删除
   */
  remove() {
    this.dom.remove()
  }
}

export default Element
