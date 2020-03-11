/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-03-04 16:01:56
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-03-11 10:15:55
 */
const path =  require("path") ;
const HtmlWebpackPlugin = require('html-webpack-plugin') ;//生成打包文件中的index.html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') ;//每次打包时清理上次打包生成的目录
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css分离



function webpackCommonConfigCreator(options){
  /**
  * options: 
  *      mode // 开发模式
  */
  return {
    mode: options.mode,
    entry: "./src/index.js",
    output: {
        // filename: "js/bundle.js",
        path: path.resolve(__dirname, "../build"),
        publicPath: "/",
    } ,
    module : {
      rules : [
        {
          test: /\.(js|jsx)$/ ,
          include : path.resolve(__dirname, "../src") ,
          use : [
            {
              loader: "babel-loader" ,
              options : {
                presets : ['@babel/preset-react'] ,    
                plugins:['react-hot-loader/babel'] ,  //热模块替换
              }
            } 
          ]
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'tslint-loader'
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.(js|jsx)$/],
          }
        },
        {
          test : /\.(css|scss)$/ ,
          include : path.resolve(__dirname, '../src') ,
          use : ExtractTextPlugin.extract({
            fallback : "style-loader" ,
            use : [
              // {
              //   loader : "css-loader" ,
              //   options : {
              //     modules : {
              //       mode : "local" ,
              //       localIdentName : '[path][name]_[local]--[hash:base64:5]'
              //     },
              //     localsConvention: 'camelCase'
              //   }
              // },
              "css-loader" ,
              "sass-loader" ,
              {
                loader : "postcss-loader" ,//使用postcss对css3属性添加前缀
                options : {
                  ident : 'postcss' ,
                  plugins: loader => [
                    require('postcss-import')({root : loader.resourcePath}) ,
                    require('autoprefixer')()
                  ]
                }
              }
            ]
          })
        },
        {
          test: /\.(css|scss)$/,
          exclude: path.resolve(__dirname, '../src'),
          use: [
              "style-loader",
              {
                loader: 'file-loader',
                options: {
                    name: "css/[name].css",
                    publicPath: "/"
                }
              }
          ]
          },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/ , //字体配置
          use : ['file-loader']
        },
        {
          test: /\.(jpg|png|svg|gif)$/ , //设置图片loader，和limit限制
          use : [
            {
              loader : "url-loader" ,
              options : {
                limit : 10240 ,
                name : 'images/[hash].[ext]' ,
                publicPath: "/"
              }
            }
          ]
        }
      ]
    },
    resolve:{
      extensions: ['.js', '.jsx','.tsx', '.ts'] //引入文件时无需加以上后缀
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../public/index.html"),
          filename: "index.html"
      }),
      // new CleanWebpackPlugin({
      //     cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]
      // }),
      new ExtractTextPlugin({
          filename: "css/[name].css"
      }),
    ],
    optimization: {
      splitChunks: {
          chunks: "all",
          minSize: 30000,
          minChunks: 1,
      }
    }
  }
}

module.exports = webpackCommonConfigCreator