/**
 * 输入
 */

import Element from '../core/element'
import Context from '../core/context'

const stylePreset = {
  width: '100%'
}

/**
 * 类
 */
class Input extends Element {
  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    super(context)

    let input = document.createElement('input')
    Object.assign(input.style, stylePreset)

    this.dom.appendChild(input)
  }
}

export default Input
