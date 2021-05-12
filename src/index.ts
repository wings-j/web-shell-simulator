/**
 * @name index
 */

/* private */

import Config, { preset } from './type/config'

/* public */

/**
 * @name 网页Shell模拟器
 */
class WebShellSimulator {
  dom: HTMLElement

  /**
   * @name 构造方法
   */
  constructor(config: Config = {}) {
    config = Object.assign({}, preset, config)

    let dom = document.createElement('div')
    dom.style.overflowX = 'hidden'

    this.dom = dom
  }
}
