/**
 * @name 配置
 */

/* public */

/**
 * @name 配置
 */
interface Config {
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

const preset: Config = {
  width: undefined,
  height: undefined,
  overflow: 'auto',
  color: '#333',
  padding: '1em',
  background: 'white',
  fontSize: '14px',
  fontFamily: '"Courier New", Courier, monospace',
  lineHeight: 1.5
}

/* construct */

export default Config
export { preset }
