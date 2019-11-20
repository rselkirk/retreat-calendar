const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
}