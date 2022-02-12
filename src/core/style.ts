/**
 * 样式
 */

/**
 * 样式
 */
interface Style {
  [index: string]: number | string | undefined
}

const preset: Style = {
  overflow: 'auto',
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
