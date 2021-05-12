/**
 * @name 行
 */

/* private */

import Config from '../type/config'

/* public */

/**
 * @name 行
 */
class Line {
  /* private */

  dom: HTMLElement

  /**
   * @name 构造方法
   */
  constructor(config: Config = {}) {
    let dom = document.createElement('div')
    dom.style.boxSizing = 'border-box'

    this.dom = dom
  }
}

/* construct */

export default Line
