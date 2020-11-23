module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 压缩输出结果
    minimize: true
  }
}