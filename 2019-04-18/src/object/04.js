//函数与闭包

/**
 * 1、闭包
 * 
 * 1、变量的作用域
 * 2、变量的生命周期
 */

let type = ["String","Number","Boolean"]

let Type = {};

for(let i=0;i<type.length;i++){
    (function(type){
        Type[`is${type}`] = (obj)=>{
            return Object.prototype.toString.call(obj) === `[object ${type}]`
        }
    })(type[i])
}


console.log(Type.isString(123));

/**
 * 高阶函数
 * 1、函数能作为参数传递
 * 2、函数可以作为返回值输出
 */