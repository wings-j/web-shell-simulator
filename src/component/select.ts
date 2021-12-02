/**
 * 单选
 */

import Context from '../core/context'
import Element from '../core/element'

interface Config {
  color: string
  multi: boolean
  singlePositive: string
  singleNegative: string
  multiPositive: string
  multiNegative: string
  padding: number
  callback: (res: string | string[]) => void
  removeOnEnter: boolean
}
type PartialConfig = Partial<Config>

const preset = {
  color: 'inherit',
  multi: false,
  singlePositive: '* ',
  singleNegative: '  ',
  multiPositive: '[*] ',
  multiNegative: '[ ] ',
  padding: 20,
  callback: () => {},
  removeOnEnter: false
}
const style = {
  whiteSpace: 'pre',
  outline: 'none'
}
const class_pointer = 'web-shell-simulator_pointer'
const class_content = 'web-shell-simulator_content'

/**
 * 类
 */
class Select extends Element {
  private config: Config
  private selections: string[] = []
  private $selections: HTMLDivElement[] = []
  private length = 0
  private index = 0
  private indexes: boolean[] = []
  active = true

  /**
   * 构造方法
   * @param context 上下文
   * @param selections 选项
   * @param config 配置
   */
  constructor(context: Context, selections: string[], config?: PartialConfig) {
    super(context)

    this.config = Object.assign({}, preset, config)
    Object.assign(this.dom.style, style, { color: this.config.color, paddingLeft: this.config.padding + 'px' })

    this.length = selections.length
    this.selections = selections
    this.indexes = new Array(selections.length).fill(false)

    for (let a of selections) {
      let div = document.createElement('div')
      let pointer = document.createElement('span')
      pointer.classList.add(class_pointer)
      pointer.innerText = this.config.singleNegative
      let content = document.createElement('span')
      content.classList.add(class_content)
      content.innerText = a

      div.appendChild(pointer)
      div.appendChild(content)
      this.dom.appendChild(div)
      this.$selections.push(div)
    }

    this.render()

    this.dom.tabIndex = -1
    setTimeout(() => {
      this.dom.focus()
    })
    this.dom.onkeyup = this.handle_keyUp.bind(this)
  }

  /**
   * 处理键盘弹起
   * @param ev 事件
   */
  private handle_keyUp(ev: KeyboardEvent) {
    if (this.active) {
      if (ev.code === 'ArrowUp') {
        this.index = Math.max(this.index - 1, 0)
        if (this.config.multi) {
        } else {
        }

        this.render()
      } else if (ev.code === 'ArrowDown') {
        this.index = Math.min(this.index + 1, this.length - 1)
        if (this.config.multi) {
        } else {
        }

        this.render()
      } else if (this.config.multi && ev.code === 'Space') {
        this.indexes[this.index] = !this.indexes[this.index]
        this.render()
      } else if (ev.code === 'Enter') {
        this.config.callback(this.config.multi ? this.indexes.map((a, i) => (a ? this.selections[i] : [])).flat() : this.selections[this.index])
        this.active = false

        if (this.config.removeOnEnter) {
          this.remove()
        }
      }
    }
  }

  /**
   * 渲染
   */
  render() {
    for (let i = 0; i < this.indexes.length; i++) {
      let element = this.$selections[i]

      let content = element.querySelector('.' + class_content) as HTMLSpanElement
      if (content) {
        content.style.textDecoration = i === this.index ? 'underline' : 'none'
      }

      let pointer = element.querySelector('.' + class_pointer) as HTMLSpanElement
      if (pointer) {
        if (this.config.multi) {
          pointer.innerText = this.indexes[i] ? this.config.multiPositive : this.config.multiNegative
        } else {
          pointer.innerText = i === this.index ? this.config.singlePositive : this.config.singleNegative
        }
      }
    }
  }
}

export default Select
export { PartialConfig as Config }
