/**
 * @name 元素
 */

/* private */

import Context from '../core/context'

/* public */

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

/* construct */

export default Element
