/**
 * @name 配置
 */

/* private */

/**
 * @name CSS样式属性
 */
interface Style {
  [index: string]: number | string | 'auto' | 'hidden' | undefined

  width?: number
  height?: number
  overflow?: 'auto' | 'hidden'
  color?: string
  padding?: string
  background?: string
  fontSize?: string
  fontFamily?: string
  lineHeight?: number | string
}

/* public */

/**
 * @name 配置
 */
interface Config {
  style?: Style
  animate?: boolean
}

const preset: Config = {
  style: {
    width: undefined,
    height: undefined,
    overflow: 'auto',
    color: '#333',
    padding: '1em',
    background: 'white',
    fontSize: '14px',
    fontFamily: '"Courier New", Courier, monospace',
    lineHeight: 1.5
  },
  animate: false
}

/* construct */

export default Config
export { preset }
