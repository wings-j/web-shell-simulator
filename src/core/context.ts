/**
 * 上下文
 */

import Config from './config'
import Element from '../type/element'

interface Context {
  dom: HTMLElement
  config: Config
  elements: Element[]
}

export default Context
