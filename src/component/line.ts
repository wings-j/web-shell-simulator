/**
 * 行
 */

import Context from '../core/context'
import Element from '../core/element'

const preset = {
  color: '',
  prefix: true,
  typing: false,
  typingPeriod: 30
}

/**
 * 打字
 * @param dom 元素
 * @param text 文本
 * @param period 单字周期
 */
function type(dom: HTMLElement, text: string, period: number = preset.typingPeriod) {
  for (let i = 0; i < text.length + 1; i++) {
    setTimeout(() => {
      dom.innerText = text.slice(0, i)
    }, period * i)
  }
}

/**
 * 配置
 */
interface LineConfig {
  color?: string
  prefix?: boolean // 显示前缀
  typing?: boolean
  typingPeriod?: number
}

/**
 * 行
 */
class Line extends Element {
  config: LineConfig

  /**
   * 构造方法
   * @param context 上下文
   * @param text 文本
   * @param config 配置
   */
  constructor(context: Context, text: string, config: LineConfig = {}) {
    let dom = document.createElement('div')

    super(context, dom)

    this.config = Object.assign({}, preset, config)

    if (context.config.prefix && this.config?.prefix) {
      let prefix = document.createElement('span')
      prefix.innerText = context.config.prefix
      dom.appendChild(prefix)
    }

    let span = document.createElement('span')
    if (this.config.typing) {
      type(span, text, this.config.typingPeriod)
    } else {
      span.innerText = text
    }

    span.style.color = this.config.color || ''

    dom.style.boxSizing = 'border-box'
    dom.appendChild(span)

    this.dom = dom
  }
}

export default Line
export { LineConfig }
