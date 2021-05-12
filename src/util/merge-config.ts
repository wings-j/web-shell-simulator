/**
 * @name 合并选项
 */

/* private */

import Config from '../type/config'

/* public */

/**
 * @name 合并选项
 * @param configs 选项
 * @return 合并后的选项
 */
function mergeConfig(...configs: Config[]): Config {
  let styles = configs.map(a => a.style).filter(a => a && typeof a === 'object')
  let style = Object.assign({}, ...styles)

  let config = Object.assign({}, ...configs)
  config.style = style

  return config
}

/* construct */

export default mergeConfig
