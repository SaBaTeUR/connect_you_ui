const merge    = require('webpack-merge');
const baseConf = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseConf, {
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    historyApiFallback: true, // for a react-router
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
});