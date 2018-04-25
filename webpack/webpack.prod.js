const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const baseConf = require('./webpack.base.js');
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = merge(baseConf, {
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ]
});