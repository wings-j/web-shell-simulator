/**
 * @name 行
 */

/* private */

const preset = {
  typing: false,
  blink: false
}

/* public */

/**
 * @name 配置
 */
interface Config {
  color?: string
  typing?: boolean
  blink?: boolean
}

/**
 * @name 行
 */
class Line {
  /* private */

  dom: HTMLElement

  /**
   * @name 构造方法
   * @param text 文本
   * @param config 配置
   */
  constructor(text: string, config: Config = {}) {
    let combinedConfig = Object.assign({}, preset, config)

    let dom = document.createElement('div')
    dom.style.boxSizing = 'border-box'

    this.dom = dom
  }
}

/* construct */

export default Line
