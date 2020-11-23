
import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 引入node-module中的文件，可以省略node-module
import 'bootstrap/dist/css/bootstrap.css'
$(".list li:odd").css("background-color", "red")
$(".list li:even").css("background-color", "yellow")

class Person {
  static indo = { name:'zs', age: 20 }
}
console.log(Person.info)