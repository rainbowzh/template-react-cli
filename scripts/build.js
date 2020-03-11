/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:00:57
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-05 10:23:43
 */
const webpack = require('webpack') ;
const webpackConfig = require('../config/webpack.prod.js') ;

webpack(webpackConfig ,(err, stats) => {
  if(err || stats.hasErrors()) {
    console.log('编译失败~',stats.hasErrors);
  }
})