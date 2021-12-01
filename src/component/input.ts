/**
 * 输入
 */

import Element from '../core/element'
import Context from '../core/context'

interface Config {
  color: string
  prefix: string
  padding: number
  value: string
  fixOnBlur: boolean
  callback: (v: string) => void
}
type PartialConfig = Partial<Config>

const preset = {
  color: 'inherit',
  prefix: '>',
  padding: 10,
  value: '',
  fixOnBlur: true,
  callback: () => {}
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
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  wordSpacing: 'inherit',
  letterSpacing: 'inherit',
  backgroundColor: 'inherit'
}

/**
 * 类
 */
class Input extends Element {
  private config: Config
  private input: HTMLInputElement
  active: boolean = true

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context, config?: PartialConfig) {
    super(context)

    this.config = Object.assign({}, preset, config)

    let span = document.createElement('span')
    span.innerText = this.config.prefix
    Object.assign(span.style, spanStyle, { color: this.config.color })
    let input = document.createElement('input')
    Object.assign(input.style, inputStyle, { marginLeft: this.config.padding + 'px' })
    input.value = this.config.value
    input.onfocus = () => {
      this.active = true
    }
    input.onblur = () => {
      if (this.config.fixOnBlur) {
        input.disabled = true
      }

      this.active = false
    }
    input.onkeyup = ev => {
      if (ev.code === 'Enter') {
        input.blur()

        this.config.callback(input.value)
      }
    }
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
export { PartialConfig as Config }
