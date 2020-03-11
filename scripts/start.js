/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:01:04
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-04 16:35:38
 */
const webpack = require('webpack') ;
const webpackDevServer = require('webpack-dev-server') ;
const webpackConfig = require('../config/webpack.dev.js') ;

const compiler = webpack(webpackConfig) ;

const options =  Object.assign({} ,webpackConfig.devServer ,{
  open : true
}) ;

const server = new webpackDevServer(compiler , options) ;

server.listen(3000,'127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080') ;
})