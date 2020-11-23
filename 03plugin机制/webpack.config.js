const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin.js')

const path = require('path')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(),'dist'), // 如果不配置 clean-webpack-plugin: options.output.path not defined. Plugin disabled...
  },
  devtool: 'source-map', // source map 设置
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: ['public']  // 需要拷贝的目录或者路径通配符
    }),
    new HtmlWebpackPlugin({
      title: '欢迎光临我的家1', // 动态生成打包的html文件title
      meta: {
        viewport: 'width=device-width'
      }
      // title: '欢迎光临我的家',
      // template: './index.html'
    }),
    // // 用于生成 about.html
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // }),
    new RemoveCommentsPlugin()
  ],
  devServer: {
    proxy: {
      '/api': {
        // http://localhost:8080/api/users -> https://api.github.com/api/users
        target: 'https://api.github.com',
        // http://localhost:8080/api/users -> https://api.github.com/users
        pathRewrite: {
          '^/api': ''
        },
        // 不能使用 localhost:8080 作为请求 GitHub 的主机名
        changeOrigin: true
      }
    }
  }
}

/**
 * CleanWebpackPlugin 自动清除dist目录
 * HtmlWebpackPlugin html文件中自动注入所需要的js文件
 */