
//原型继承
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}

function Child(){

}

Child.prototype = new Person("peng");


const child = new Child();
const child1 = new Child();

console.log(child);
console.log(child1);

//借用构造函数
function Child1(name){
    Person.call(this,name);
}

const child2 = new Child1("wen");

console.log(child2);

//组合继承
function Child2(name){
    Person.call(this,name)
}

//重复调用构造函数
Child2.prototype = new Person();

//原型继承
function object(o){
    let obj = function(){};
    obj.prototype = o;
    return new obj();
}

let child3 = object(Person);

console.log(child3);


//寄生组合式继承
function Child3(name){
    Person.call(this);
}


let obj = function(){};
obj.prototype = Person.prototype;
let obj1 = new obj();

Child3.prototype = obj1;
obj1.constructor = Child3;

console.log(new obj());
console.log(new Child3());
