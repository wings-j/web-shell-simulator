/**
 * 输入
 */

import Element from '../core/element'
import Context from '../core/context'

interface Config {
  color: string
  prefix: string
}

const configPreset = {
  prefix: '',
  color: 'inherit'
}
const style = {
  display: 'flex',
  alignItems: 'center'
}
const spanStyle = {
  flexShrink: '0',
  whiteSpace: 'pre'
}
const inputStyle = {
  width: '100%',
  border: 'none',
  outline: 'none',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  wordSpacing: 'inherit',
  letterSpacing: 'inherit'
}

/**
 * 类
 */
class Input extends Element {
  private config: Config
  private input: HTMLInputElement

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context, config?: Partial<Config>) {
    super(context)

    this.config = Object.assign({}, configPreset, config)

    let span = document.createElement('span')
    span.innerText = this.config.prefix
    Object.assign(span.style, spanStyle, { color: this.config.color })
    let input = document.createElement('input')
    Object.assign(input.style, inputStyle)
    this.input = input

    Object.assign(this.dom.style, style)
    this.dom.appendChild(span)
    this.dom.appendChild(input)
  }

  /**
   * 挂载
   */
  mount() {
    super.mount()

    setTimeout(() => {
      this.input.focus()
    })
  }
}

export default Input
export { Config }
