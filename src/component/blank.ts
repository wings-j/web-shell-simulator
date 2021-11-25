/**
 * 空行
 */

import Element from '../core/element'
import Context from '../core/context'

/**
 * 类
 */
class Blank extends Element {
  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    let dom = document.createElement('br')

    super(context, dom)

    dom.innerText = ' '
  }
}

export default Blank
