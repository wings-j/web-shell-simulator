/**
 * index
 */

import Context from './core/context'
import Config, { preset as configPreset } from './core/config'
import Style, { preset as stylePreset } from './core/style'
import Element from './core/element'
import Line, { Config as LineConfig } from './component/line'
import Blank from './component/blank'
import Input from './component/input'

/**
 * 网页Shell模拟器
 */
class WebShellSimulator {
  private context: Context
  dom: HTMLElement = document.createElement('div')
  elements: Element[] = []

  /**
   * 构造方法
   * @param config 选项
   */
  constructor(config: Config = {}, style: Style = {}) {
    Object.assign(this.dom.style, Object.assign({}, stylePreset, style))

    this.context = { config: Object.assign({}, configPreset, config), dom: this.dom, elements: this.elements }
  }

  /**
   * 滚动至底部
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
   * 挂载
   * @param selector 选择器
   */
  mount(selector: string) {
    if (this.dom) {
      let parent = document.querySelector(selector)
      if (parent) {
        parent.appendChild(this.dom)
      } else {
        throw Error('没有找到容器元素')
      }
    }
  }
  /**
   * 添加空行
   * @return 元素
   */
  addBlank() {
    let blank = new Blank(this.context)
    blank.mount()
    this.scroll()

    return blank
  }
  /**
   * 添加行
   * @param text 文本
   * @param config 配置
   * @return 元素
   */
  addLine(text: string, config?: LineConfig) {
    let line = new Line(this.context, text, config)
    line.mount()
    this.scroll()

    return line
  }
  /**
   * 添加输入
   */
  addInput() {
    let input = new Input(this.context)
    input.mount()
  }
}

export default WebShellSimulator
