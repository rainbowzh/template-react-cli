/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:19:05
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-09 17:20:30
 */
const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path') ;

const config = {
  output: {
    filename: "js/[name].[hash].js" ,
    path: path.resolve(__dirname, "../build"),
  },
  devtool: "inline-source-map",
  devServer : {
    contentBase : path.join(__dirname,"../dist") , //server模式下的output,
    hot : true , //模块热替换
  }
}

const options = {
    mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);