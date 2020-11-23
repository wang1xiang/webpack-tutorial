/**
 * webpack要求插件必须是一个函数或一个包含apply的方法
 * 使用时 通过这个类型来创建一个实例对象去使用这个插件
 */
class RemoveCommentsPlugin {
  // webpack启动时被调用 compiler包含构造的所有配置信息 通过这个对象去注册钩子函数
  // 明确任务的执行时机 到底应该把这个任务挂载到哪个钩子上
  // 需求是删除bunble中的注释 所以在生成后才能实施
  // emit钩子会在webpack即将向输出目录输出文件时执行
  apply (compiler) {
    console.log('RemoveCommentsPlugin启动')
    // tap注册钩子函数 param(插件名称, 挂在到钩子上的函数)
    // compilation 此次运行打包的上下文
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      for (const name in compilation.assets) {
        // console.log(compilation.assets[name].source()) // 打包后文件内容
        if (name.endsWith('.js')) {
          const content = compilation.assets[name].source()
          const noComments = content.replace(/\/\*{2,}\/\s?/g, '')
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
  }
}
module.exports = RemoveCommentsPlugin