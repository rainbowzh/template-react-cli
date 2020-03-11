/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:16:32
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-10 10:30:04
 */
const webpackConfigCreator = require('./webpack.common') ;
const merge = require('webpack-merge') ;
const optimizeCss = require('optimize-css-assets-webpack-plugin') ;//对生产模式下的css进行压缩
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin') ;//每次打包时清理上次打包生成的目录


const config = {
  output: {
    filename: "js/[name].js"
  },
  devtool: "source-map",
  plugins: [
    new optimizeCss({ //css压缩
      cssProcessor : require('cssnano') ,
      cssProcessorOptions: {
        discardComments : {
          removeAll : true
        }
      },
      canPrint : true
    }) ,
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
  ]
} ;

const options = {
  mode: "production"
} ;

module.exports = merge(webpackConfigCreator(options) ,config) ;

