/**
 * @name index
 */

/* private */

import Config, { preset } from './type/config'
import MergeConfig from './util/merge-config'

/* public */

/**
 * @name 网页Shell模拟器
 */
class WebShellSimulator {
  dom: HTMLElement

  /**
   * @name 构造方法
   * @param config 选项
   */
  constructor(config: Config = {}) {
    let setting = MergeConfig(preset, config)

    let dom = document.createElement('div')
    dom.style.overflowX = 'hidden'
    dom.style.boxSizing = 'border-box'
    Object.assign(dom.style, setting.style)

    this.dom = dom
  }
}

export default WebShellSimulator
