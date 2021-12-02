import RollupPluginBabel from '@rollup/plugin-babel'
import RollupPluginNodeResolve from '@rollup/plugin-node-resolve'
import RollupPluginCommonjs from '@rollup/plugin-commonjs'
import RollupPluginTypescript2 from 'rollup-plugin-typescript2'
import PackageJson from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(PackageJson.dependencies || {}),
    plugins: [RollupPluginTypescript2(), RollupPluginNodeResolve(), RollupPluginCommonjs()],
    output: {
      file: PackageJson.module,
      sourcemap: true
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      RollupPluginTypescript2(),
      RollupPluginNodeResolve(),
      RollupPluginCommonjs(),
      RollupPluginBabel({
        babelHelpers: 'bundled',
        exclude: ['node_modules']
      })
    ],
    output: {
      file: PackageJson.main,
      format: 'umd',
      name: 'WebShellSimulator',
      sourcemap: true
    }
  }
]
