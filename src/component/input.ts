/**
 * 输入
 */

import Element from '../core/element'
import Context from '../core/context'

const stylePreset = {
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
  private input: HTMLInputElement

  /**
   * 构造方法
   * @param context 上下文
   */
  constructor(context: Context) {
    super(context)

    let input = document.createElement('input')
    Object.assign(input.style, stylePreset)

    this.input = input
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
