import babel from 'rollup-plugin-babel';
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import cssnext from 'postcss-cssnext';
import mixins from 'postcss-cssnext';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import globals from 'rollup-plugin-node-globals'


export default {
  entry: 'src/index.js',
  format: 'iife',
  dest: 'dist/bundle.js',
  plugins: [
    postcss({
      plugins: [
        cssnext(),
        mixins()
      ],
      extensions: ['.css']
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ 'react' ],
    }),
    commonjs({
      include: [
        'node_modules/**'
      ]
    }),
    globals(),
    nodeResolve({
      browser: true,
      main: true
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    serve({
      open: true,
      contentBase: ['', 'dist', 'src'],
      historyApiFallback: false,
      host: 'localhost',
      port: 9000,
    }),
    livereload(),
  ],
  sourceMap: true,
};