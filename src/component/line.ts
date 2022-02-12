/**
 * 行
 */

import Context from '../core/context'
import Element from '../type/element'

const preset = {
  color: '',
  typing: false,
  typingPeriod: 30,
  typingCallback: () => {},
  html: false
}
type Config = typeof preset
type PartialConfig = Partial<Config>

/**
 * 打字
 * @param dom 元素
 * @param text 文本
 * @param period 单字周期
 */
async function type(dom: HTMLElement, text: string, period: number = preset.typingPeriod): Promise<void> {
  return new Promise(resolve => {
    for (let i = 0; i <= text.length; i++) {
      setTimeout(() => {
        dom.innerText = text.slice(0, i)

        if (i === text.length) {
          resolve()
        }
      }, period * i)
    }
  })
}

/**
 * 行
 */
class Line extends Element {
  name = 'line'
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
      type(span, text, this.config.typingPeriod).then(() => {
        config?.typingCallback?.()
      })
    } else {
      if (this.config.html) {
        span.innerHTML = text
      } else {
        span.innerText = text
      }
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
