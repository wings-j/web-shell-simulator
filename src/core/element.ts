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
   * 删除
   */
  remove() {
    this.dom.remove()
  }
}

export default Element
