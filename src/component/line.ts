/**
 * 行
 */

import Context from '../core/context'
import Element from '../core/element'

/**
 * 配置
 */
interface Config {
  color: string
  typing: boolean
  typingPeriod: number
}

const configPreset = {
  color: '',
  typing: false,
  typingPeriod: 30
}

/**
 * 打字
 * @param dom 元素
 * @param text 文本
 * @param period 单字周期
 */
function type(dom: HTMLElement, text: string, period: number = configPreset.typingPeriod) {
  for (let i = 0; i < text.length + 1; i++) {
    setTimeout(() => {
      dom.innerText = text.slice(0, i)
    }, period * i)
  }
}

/**
 * 行
 */
class Line extends Element {
  private config: Config

  /**
   * 构造方法
   * @param context 上下文
   * @param text 文本
   * @param config 配置
   */
  constructor(context: Context, text: string, config: Partial<Config> = {}) {
    super(context)

    this.config = Object.assign({}, configPreset, config)

    let span = document.createElement('span')
    if (this.config.typing) {
      type(span, text, this.config.typingPeriod)
    } else {
      span.innerText = text
    }
    span.style.color = this.config.color || ''

    this.dom.appendChild(span)
  }
}

export default Line
export { Config }
