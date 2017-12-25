/* eslint no-undef:0 */

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          'presets': ['env', 'react', 'stage-0'],
          'plugins': ['transform-react-jsx-source']
        }
      }
    ]
  },
  watch: true
}
