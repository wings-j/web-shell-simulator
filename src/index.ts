/**
 * @name index
 */

/* private */

import Config, { preset as configPreset } from './core/config'
import Style, { preset as stylePreset } from './core/style'

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
  constructor(config: Config = {}, style: Style = {}) {
    let conbimedConfig = Object.assign({}, configPreset, config)
    let conbimedStyle = Object.assign({}, stylePreset, style)

    let dom = document.createElement('div')
    dom.style.overflowX = 'hidden'
    dom.style.boxSizing = 'border-box'
    Object.assign(dom.style, conbimedStyle)

    this.dom = dom
  }
}

export default WebShellSimulator
