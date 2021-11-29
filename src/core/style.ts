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
  overflow?: string
  color?: string
  padding?: string
  boxSizing?: string
  background?: string
  fontSize?: string
  fontFamily?: string
  lineHeight?: number | string
}

const preset: Style = {
  width: undefined,
  height: undefined,
  overflow: 'hidden',
  color: '#333',
  padding: '1em',
  boxSizing: 'border-box',
  background: 'white',
  fontSize: '14px',
  fontFamily: '"Courier New", Courier, monospace',
  lineHeight: 1.5
}

export default Style
export { preset }
