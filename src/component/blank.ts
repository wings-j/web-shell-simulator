/**
 * 空行
 */

import Element from '../type/element'
import Context from '../core/context'

/**
 * 类
 */
class Blank extends Element {
  name = 'blank'

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    super(context)

    let br = document.createElement('br')
    this.dom.appendChild(br)
  }
}

export default Blank
