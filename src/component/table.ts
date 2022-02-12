/**
 * 表格
 */

import Context from '../core/context'
import Element from '../type/element'

interface Config {
  color: string
  padding: number
}
type PartialConfig = Partial<Config>

const preset = {
  color: 'inherit',
  padding: 10
}

const tableStyle = {
  verticalAlign: 'top',
  wordBreak: 'break-all'
}
const tbodyStyle = {
  verticalAlign: 'inherit'
}

/**
 * 类
 */
class Table extends Element {
  name = 'table'
  private config: Config

  /**
   * 构造方法
   * @param context 上下文
   * @param data 数据
   */
  constructor(context: Context, data: (string | number)[][], config?: PartialConfig) {
    super(context)

    this.config = Object.assign({}, preset, config)
    Object.assign(this.dom.style, { color: this.config.color })

    let table = document.createElement('table')
    Object.assign(table.style, tableStyle)
    let tbody = document.createElement('tbody')
    Object.assign(tbody.style, tbodyStyle)
    table.appendChild(tbody)
    for (let a of data) {
      let tr = document.createElement('tr')
      for (let b of a) {
        let td = document.createElement('td')
        td.innerText = b.toString()
        td.style.paddingRight = this.config.padding + 'px'
        tr.appendChild(td)
      }
      tbody.appendChild(tr)
    }

    this.dom.appendChild(table)
  }
}

export default Table
export { PartialConfig as Config }
