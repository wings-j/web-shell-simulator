import Babel from '@rollup/plugin-babel'
import NodeResolve from '@rollup/plugin-node-resolve'
import PackageJson from './package.json'

const extensions = ['.ts']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: PackageJson.main,
      format: 'umd',
      name: 'WebShellSimulator'
    },
    {
      file: PackageJson.module,
      format: 'esm'
    }
  ],
  external: Object.keys(PackageJson.dependencies || {}),
  plugins: [
    NodeResolve({ extensions, preferBuiltins: true }),
    Babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**'],
      extensions
    })
  ]
}
