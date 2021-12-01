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
  mulitNegative: string
  padding: number
}
type PartialConfig = Partial<Config>

const preset = {
  color: 'inherit',
  multi: false,
  singlePositive: '* ',
  singleNegative: '  ',
  multiPositive: '[*] ',
  mulitNegative: '[ ] ',
  padding: 20
}
const style = {
  whiteSpace: 'pre'
}
const class_pointer = 'web-shell-simulator_pointer'

/**
 * 类
 */
class Select extends Element {
  private config: Config
  private $selections: HTMLDivElement[] = []
  private length = 0
  private index = 0
  active = true

  /**
   * 构造方法
   * @param selections 选项
   */
  constructor(context: Context, selectons: string[], config?: PartialConfig) {
    super(context)

    this.config = Object.assign({}, preset, config)
    Object.assign(this.dom.style, style, { color: this.config.color, paddingLeft: this.config.padding + 'px' })

    this.length = selectons.length

    for (let a of selectons) {
      let div = document.createElement('div')
      let pointer = document.createElement('span')
      pointer.classList.add(class_pointer)
      pointer.innerText = this.config.singleNegative
      let content = document.createElement('span')
      content.innerText = a

      div.appendChild(pointer)
      div.appendChild(content)
      this.dom.appendChild(div)
      this.$selections.push(div)
    }

    this.select()

    this.handle_window_keyUp = this.handle_window_keyUp.bind(this)
    window.addEventListener('keyup', this.handle_window_keyUp)
  }

  /**
   * 处理键盘弹起
   * @param ev 事件
   */
  private handle_window_keyUp(ev: KeyboardEvent) {
    if (this.active) {
      if (this.config.multi) {
        if (ev.code === 'ArrowUp') {
        } else if (ev.code === 'ArrowDown') {
        } else if (this.config.multi && ev.code === 'Space') {
        }
      } else {
        if (ev.code === 'ArrowUp') {
          this.index = Math.max(this.index - 1, 0)

          this.select()
        } else if (ev.code === 'ArrowDown') {
          this.index = Math.min(this.index + 1, this.length - 1)

          this.select()
        }
      }
    }

    if (ev.code === 'Enter') {
    }
  }

  /**
   * 销毁
   */
  protected destroy() {
    window.removeEventListener('keyup', this.handle_window_keyUp)
  }

  /**
   * 选择
   * @param index 目标索引
   */
  select(index?: number) {
    index = index ?? this.index

    if (this.config.multi) {
    } else {
      for (let i = 0; i < this.length; i++) {
        let target = this.$selections[i].querySelector('.' + class_pointer) as HTMLSpanElement
        if (target) {
          if (i === this.index) {
            target.innerText = this.config.singlePositive
          } else {
            target.innerText = this.config.singleNegative
          }
        }
      }
    }
  }
}

export default Select
export { PartialConfig as Config }
