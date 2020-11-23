##### 现代化项目

- 要求前端有独立的项目
- 采用数据驱动开发的方式增强可维护性
- 复杂项目结构必须进行模块化管理
- 重复规律性工作必须采取自动化工具实现

##### `webpack`与模块化开发

大多数人直接使用官方`cli`，通用配置，奉行“够用就行”；对于优秀开发人员，应学会因地治宜，灵活应用

使用高度集成的`cli`对特殊资源加载、打包过程优化、资源代码分块、Tree-shaking这样相对复杂的需求无从下手

模块化：复杂的代码按照功能的不同划分为不同的模块，提高开发效率、降低维护成本

两大核心特性：Loader机制和插件机制

#### `webpack`究竟解决了什么问题

如何在前端项目中更高效地管理和维护项目中每一个资源

#### 模块化的演进过程

1. 文件划分方式

   `web`最原始的模块系统，每个功能及相关状态数据单独放在不同`js`文件中，约定每个文件是一个独立的模块

       ├── module-a.js
       ├── module-b.js
       └── index.html

   缺点：

   - 模块直接在全局工作，污染全局作用域
   - 没有私有空间，模块内成员可以在外部被访问或修改
   - 模块增多，容易产生命名冲突
   - 无法管理模块与模块之间依赖关系
   - 维护过程中很难分辨每个成员所属的模块

2. 命名空间方式

   约定每个模块只暴露一个全局对象，将每个模块包裹到一个全局对象

   ```js
   window.moduleA = {
   	method1() {
   		console.log('a')
       }
   }
   ```

   只解决了命名冲突问题，其他问题依旧存在

3. `IIFE`

   立即执行函数为模块提供私有空间，将每个模块放在立即执行函数形成的私有作用域，需暴露的成员，通过全局对象挂载

   ```js
   (function() {
   	const name = 'a'
       function method1 () {
   		console.log('a')
       }
       window.moduleA = {
   		method1
       }
   })()
   ```

   解决全局污染和命名冲突问题

4. `IIFE`依赖参数

   使用`IIFE`参数作为依赖声明使用 使模块之间依赖关系更明显

   ```js
   (function ($) { // 通过参数明显表明这个模块的依赖
     var name = 'module-a'
     function method1 () {
       console.log(name + '#method1')
       $('body').animate({ margin: '200px' })
     }
     window.moduleA = {
       method1: method1
     }
   })(jQuery)
   ```

##### 模块加载问题

时间久、项目大时难维护

更为理想的页面引入一个`JS`文件入口，用到的模块通过代码控制、按需加载

##### 模块化标准规范

- `nodejs`中遵循`commonJS`规范来组织模块
- 浏览器环境中遵循ES Modules规范

##### 模块打包工具出现

随着模块化思想引入 产生一些新的问题

- 首先 `ES Modules`存在环境兼容问题，用户浏览器不统一
- 其次 模块化划分出的模块文件过多，前端频繁请求，影响工作效率
- 最后 `JS`模块化基础上的发散 `HTML`、`CSS`等需要模块化
#### 如何使用`webpck`实现模块化打包

*   `webpack`作为模块打包工具，可以实现模块化代码打包的问题

*   对于有环境兼容问题的代码：可以在打包过程中通过`Loader`机制对其进行编译转换，在进行打包

*   对于不同种类的前端模块，支持在`javaScript`中以模块化的方式载入任意类型的资源文件：例如可以通过`webpack`实现在`JavaSCript`中加载`css`文件，被加载的`css`文件通过`style`的方式工作

*   具备代码拆分能力 项目所有模块按需分块打包，按需加载

##### `webpack`快速上手

##### 配置`webpack`打包过程

`webpack.config.js`运行在`nodejs`环境，可以直接在文件中使用`path`之类的`nodejs`内置模块

[例子](https://github.com/wang1xiang/webpack-tutorial/tree/main/01entry-output)

##### `webpack`工作模式

针对不同环境的三组预设配置

*   `production`模式 启动内置优化插件，自动优化打包结果，打包速度较慢（默认）

*   `development`模式 自动优化打包速度，添加一些调试过程中的辅助插件以便于更好的调试错误

*   `none`模式 运行最原始的打包，不做任何额外处理，分析模块打包结果

修改方式

*   通过`cli --mode`参数传入

*   通过配置文件设置`mode`属性
#### 通过Loader实现特殊资源加载

`loader`是`webpack`实现整个项目的模块化,项目中各种资源都需要被管理

实现不同资源加载的核心是loader

##### 如何加载模块

通过`css-loader`加载`css`资源，`webpack`使用`loader`处理模块，内部loader只能处理`js`模块

`css`文件经过`css-loader`打包之后再由`webpack`打包

`css-loader` 只会把 `CSS` 模块加载到 `JS` 代码中，而并不会使用这个模块，需要在添加额外的`style-loader`才能正常工作

![image-20201112104146536.png](https://upload-images.jianshu.io/upload_images/24129137-28bf2406a531e3c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
`loader`是`webpack`实现前端模块化的核心，只有通过不同的`loader`，才能实现任何类型资源的加载

##### 通过`js`加载资源模块

一般`webpack`入口都是`js`文件，打包入口就是应用的运行入口

##### 开发一个 Loader

深入了解`loader`的工作原理

开发`markdown`文件转换为`html`

`webpack`资源加载类似工作管道，可以使用多个`loader`，输出结果必须是标准的`js`代码
![image-20201112120025547.png](https://upload-images.jianshu.io/upload_images/24129137-3da8ca1cd22daac7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 多个`loader`配合

首先使用自己的`loader`转换为`html`文件，再次使用`html-loader`转换为`js`代码
[例子](https://github.com/wang1xiang/webpack-tutorial/tree/main/02Loader%E6%9C%BA%E5%88%B6)
