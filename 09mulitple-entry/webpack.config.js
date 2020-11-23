const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  // 多入口打包 对象中一个键值对应一个打包入口
  entry: {
    index: './src/index.js',
    album: './src/album.js'
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
    new HtmlWebpackPlugin({ // 分别为index和album生成对应html文件
      title: 'multi entry',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'] // 指定使用index.bundle.js
    }),
    new HtmlWebpackPlugin({
      title: 'multi entry',
      template: './src/album.html',
      filename: 'album.html',
      chunks: ['album']
    }),
  ]
}