/**
 * 动态导入 实现按需加载
 * 应用运行过程 需要某个资源模块时 才去加载
 * webpack所有动态导入的模块被自动提取到单独bundle 实现分包
 * 
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  // 多入口打包 对象中一个键值对应一个打包入口
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js', // [name]占位符输出动态文件名 [name]最终被替换为入口的名称
  },
  optimization: {
    splitChunks: {
      // 自动提取所有公共模块到单独bundle all表示所有模块都可以被提取
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ // 分别为index和album生成对应html文件
      title: 'multi entry',
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}