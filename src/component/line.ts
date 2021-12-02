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
type PartialConfig = Partial<Config>

const preset = {
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
function type(dom: HTMLElement, text: string, period: number = preset.typingPeriod) {
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
  private $text: HTMLSpanElement

  /**
   * 构造方法
   * @param context 上下文
   * @param text 文本
   * @param config 配置
   */
  constructor(context: Context, text: string, config?: PartialConfig) {
    super(context)

    this.config = Object.assign({}, preset, config)

    let span = document.createElement('span')
    if (this.config.typing) {
      type(span, text, this.config.typingPeriod)
    } else {
      span.innerText = text
    }
    span.style.color = this.config.color || ''
    this.$text = span

    this.dom.appendChild(span)
  }

  /**
   * 更新
   * @param text 文本
   */
  update(text: string) {
    this.$text.innerText = text
  }
}

export default Line
export { PartialConfig as Config }
