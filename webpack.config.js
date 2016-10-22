var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
      { test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/ }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
};