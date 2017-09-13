import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import cssnext from 'postcss-cssnext';
import mixins from 'postcss-cssnext';

export default {
  moduleName: 'wcplayground',
  entry: 'src/index.js',
  plugins: [
    postcss({
      plugins: [
        cssnext(),
        mixins()
      ],
      extensions: ['.css']
    }),
    babel(),
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),
    serve({
      open: true,
      contentBase: ['', 'dist', 'src'],
      historyApiFallback: false,
      host: 'localhost',
      port: 9000,
    }),
    livereload(),
  ],
  format: 'umd',
  dest: 'dist/bundle.js',
  sourceMap: true,
};