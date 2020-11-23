const path = require('path')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 根据打包过程中遇到文件路径匹配是否使用这个loader
        use: [
          'style-loader',
          'css-loader'
        ] // 制定具体的loader 默认从后往前执行
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          './markdown-loader'
        ] // 这里的 use 中不仅可以使用模块名称，还可以使用模块文件路径，这点与 Node 中的 require 函数是一样的
      }
    ]
  }
}

/**
 * webpack内部默认只能处理js模块代码 css代码不符合js语法 报模块解析错误
 * 加载器的使用方式 css加载器 css-loader
 * npm install css-loader --save--dev
 * css-loader 只会把 CSS 模块加载到 JS 代码中，而并不会使用这个模块 需要在添加额外的style-loader才能正常工作
 * style-loader 的作用总结一句话就是 将 css-loader 中所加载到的所有样式模块，通过创建 style 标签的方式添加到页面上
 */