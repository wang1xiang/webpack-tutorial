/**
 * 需要导出一个函数 对应对资源的处理过程
 * 输入 加载的资源文件内容
 * 输出 加工后的结果
 */
const marked = require('marked')

module.exports = source => {
  // 加载到的模块内容
  console.log(source)
  // 1.将markdown转换为html字符串
  const html = marked(source)
  return html
  // 2.将html字符串拼接为一段导出字符串的hs代码
  // const code = `module.exports = ${JSON.stringify(html)}`
  // return code
  // 返回值就是最终被打包的内容
  // return 'hello loader ~'
  // 返回的结果会添加到打包的文件中 打包结果必须为js代码 否则需要其他loader继续去转换
  // return `console.log('hello')`
}