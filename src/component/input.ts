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
  callback: (v: string) => void
  removeOnEnter: boolean
  allowEmpty: boolean
}
type PartialConfig = Partial<Config>

const preset = {
  color: 'inherit',
  prefix: '>',
  padding: 10,
  value: '',
  callback: () => {},
  removeOnEnter: false,
  allowEmpty: false
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
  private _active: boolean
  private config: Config
  private $input: HTMLInputElement

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context, config?: PartialConfig) {
    super(context)

    this._active = this.active
    this.config = Object.assign({}, preset, config)
    Object.assign(this.dom.style, style)

    let span = document.createElement('span')
    span.innerText = this.config.prefix
    Object.assign(span.style, spanStyle, { color: this.config.color })
    let input = document.createElement('input')
    Object.assign(input.style, inputStyle, { marginLeft: this.config.padding + 'px' })
    input.value = this.config.value
    input.addEventListener('keyup', this.handle_keyup.bind(this))
    this.$input = input

    this.dom.appendChild(span)
    this.dom.appendChild(input)

    Object.defineProperty(this, 'active', {
      set(v: boolean) {
        this._active = v
        this.$input.disabled = !v
      },
      get() {
        return this._active
      }
    })
  }

  /**
   * 处理键盘弹起
   * @param ev 事件
   */
  private handle_keyup(ev: KeyboardEvent) {
    if (ev.code === 'Enter' && (this.$input.value || this.config.allowEmpty)) {
      this.enter()
    }
  }

  /**
   * 挂载
   */
  mount() {
    super.mount()

    setTimeout(() => {
      this.$input.focus()
    })
  }
  /**
   * 聚焦
   */
  focus() {
    this.$input.focus()
  }
  /**
   * 失焦
   */
  blur() {
    this.$input.blur()
  }
  /**
   * 回车
   */
  enter() {
    this.active = false
    this.config.callback(this.$input.value.trim())

    if (this.config.removeOnEnter) {
      this.remove()
    }
  }
}

export default Input
export { PartialConfig as Config }
