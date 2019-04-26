
/**
 * 1、在对象的方法内调用，指向对象本身
 */
let person = {
    name:"peng",
    say:function(){
        //this指向对象本身
        console.log(this.name);
    }
}

person.say();

/**
 * 2、普通函数调用，指向window
 */

say = person.say;
say(); //此时this指向window

/**
 * 3、在构造器函数内使用，指向返回的对象
 */
class Animal{
    constructor(name){
        //this指向返回的对象本身
        this.name = name;
    }
}

let animal = new Animal("dog");
console.log(animal);

/**
 * 4、在call和apply中使用this,可以动态改变this的指向
 */
let obj1 = {
    name:"peng",
    say:function(){
        //此时this指向obj2
        console.log(this);
        console.log(this.name);
    }
}

let obj2 = {
    name:"wen"
}

obj1.say.call(obj2);