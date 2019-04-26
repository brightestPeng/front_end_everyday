
//call与apply  为Function对象原型上定义的两个方法

/**
 * call 传入不定参数  
 * 1、第一个参数为函数内部this的指向
 * 2、其他的参数，为传入函数内部的参数
 */

 /**
  * apply 传入两个参数
  * 1、第一个参数为函数内部this的指向
  * 2、第二个参数，为数组或类数组（arguments）
  */

  /**
   * 当第一个参数传入null,this默认指向默认的宿主对象,浏览器中为Window
   * 
   * 主要用途
   * 1、改变this的指向
   * 2、实现Function.prototype.bind
   * 3、借用其他对象的方法
   */

let obj = {
    name:"peng",
    say:function(language){
        //this指向Window  严格模式下 this === null
        console.log(this);
        console.log(language);
    }
}

obj.say.call(null,"猪");


