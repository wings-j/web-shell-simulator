/**
 * 样式
 */

/**
 * 样式
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

const preset: Style = {
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

export default Style
export { preset }
