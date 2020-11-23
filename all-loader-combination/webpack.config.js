const path = require('path')
const webpack = require('webpack')

//自动在内存中根据指定页面生成内存中的页面 自动把打包好的bundle.js追加到页面
const htmlWebpackPlugin = require('html-webpack-plugin')

//node模块操作，向外暴露一个配置对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test:  /\.css$/, use: ['style-loader', 'css-loader'] },
      { test:  /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test:  /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test:  /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=295&name=[hash:8]-[name].[ext]' },// 处理图片路径的loader limit值为图片大小，如果大于就不会转换为base64编码291,806 
      { test:  /\.(ttf|eot|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude:/node-moduels/ }
    ]
  }
}