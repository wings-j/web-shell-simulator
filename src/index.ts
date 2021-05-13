/**
 * @name index
 */

/* private */

import Context from './core/context'
import Config, { preset as configPreset } from './core/config'
import Style, { preset as stylePreset } from './core/style'
import Line, { LineConfig } from './component/line'
import Blank from './component/blank'

/* public */

/**
 * @name 网页Shell模拟器
 */
class WebShellSimulator {
  dom: HTMLElement
  config: Config

  /**
   * @name 构造方法
   * @param config 选项
   */
  constructor(config: Config = {}, style: Style = {}) {
    this.config = Object.assign({}, configPreset, config)

    let dom = document.createElement('div')
    dom.style.overflowX = 'hidden'
    dom.style.boxSizing = 'border-box'
    Object.assign(dom.style, Object.assign({}, stylePreset, style))

    this.dom = dom
  }

  private get context(): Context {
    return { dom: this.dom, config: this.config }
  }

  /**
   * @name 滚动至底部
   */
  private scroll() {
    setTimeout(() => {
      this.dom.scrollTo({
        behavior: 'smooth',
        top: this.dom.scrollHeight
      })
    })
  }

  /**
   * @name 添加空行
   */
  addBlank() {
    let blank = new Blank(this.context)

    this.dom.appendChild(blank.dom)

    this.scroll()
  }
  /**
   * @name 添加行
   * @param text 文本
   * @param config 配置
   */
  addLine(text: string, config?: LineConfig) {
    let line = new Line(this.context, text, config)

    this.dom.appendChild(line.dom)

    this.scroll()

    return line
  }
}

export default WebShellSimulator
