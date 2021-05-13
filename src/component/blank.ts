/**
 * @name 空行
 */

/* private */

import Element from '../core/element'
import Context from '../core/context'

/* public */

/**
 * @name 空行
 */
class Blank extends Element {
  /**
   * @name 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    let dom = document.createElement('br')

    super(context, dom)

    dom.innerText = ' '
  }
}

/* construct */

export default Blank
