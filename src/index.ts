/**
 * index
 */

import Context from './core/context'
import Config, { preset as configPreset } from './core/config'
import Style, { preset as stylePreset } from './core/style'
import Element from './type/element'
import Blank from './component/blank'
import Line, { Config as LineConfig } from './component/line'
import Input, { Config as InputConfig } from './component/input'
import Select, { Config as SelectConfig } from './component/select'
import Table, { Config as TableConfig } from './component/table'

/**
 * 网页Shell模拟器
 */
class WebShellSimulator {
  private context: Context
  dom: HTMLElement = document.createElement('div')
  elements: Element[] = new Proxy([], {
    set(target: Element[], name, value) {
      for (let i = 0; i < target.length - 1; i++) {
        target[i].active = false
      }

      return Reflect.set(target, name, value)
    }
  })

  get current() {
    return this.elements[this.elements.length - 1]
  }

  /**
   * 构造方法
   * @param config 选项
   */
  constructor(config?: Partial<Config>, style?: Style) {
    this.context = { config: Object.assign({}, configPreset, config), dom: this.dom, elements: this.elements }

    Object.assign(this.dom.style, stylePreset, style)

    this.dom.addEventListener('click', this.handle_focus.bind(this))
  }

  /**
   * 聚焦
   */
  private handle_focus() {
    let target = this.elements[this.elements.length - 1]
    if (target && target.active) {
      target.focus()
    }
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
   * 清空
   */
  clear() {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      this.elements[i].remove()
    }
  }
  /**
   * 添加空行
   * @return 元素
   */
  addBlank() {
    let element = new Blank(this.context)
    element.mount()
    this.scroll()

    return { element, promise: Promise.resolve() }
  }
  /**
   * 添加行
   * @param text 文本
   * @param config 配置
   * @return 元素
   */
  addLine(text: string, config?: LineConfig) {
    let element: Line
    let promise = new Promise(resolve => {
      element = new Line(this.context, text, Object.assign({}, config, { typingCallback: resolve }))
      element.mount()
      this.scroll()
    })

    return { element: element!, promise }
  }
  /**
   * 添加输入
   * @param config 配置
   * @return 元素
   */
  addInput(config?: InputConfig) {
    let element
    let promise: Promise<string> = new Promise(resolve => {
      element = new Input(this.context, { ...config, callback: resolve })
      element.mount()
      this.scroll()
    })

    return { element, promise }
  }
  /**
   * 添加选择
   * @param selections 选项
   * @param config 配置
   * @return 元素
   */
  addSelect(selections: string[], config?: SelectConfig) {
    let element

    let promise: Promise<string | string[]> = new Promise(resolve => {
      element = new Select(this.context, selections, { ...config, callback: resolve })
      element.mount()
      this.scroll()
    })

    return { element, promise }
  }
  /**
   * 添加表格
   * @param data 数据
   */
  addTable(data: (string | number)[][], config?: TableConfig) {
    let element = new Table(this.context, data, config)
    element.mount()
    this.scroll()

    return { element }
  }
}

export default WebShellSimulator
export { Blank, Line, Input, Select, Table }
