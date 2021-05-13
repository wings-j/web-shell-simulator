/**
 * @name 上下文
 */

/* private */

import Config from './config'

/* public */

interface Context {
  dom: HTMLElement
  config: Config
}

/* construct */

export default Context
