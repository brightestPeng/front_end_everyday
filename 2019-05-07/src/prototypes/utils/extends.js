
//原型链继承

function Parent(){
	this.name = "peng";
}

Parent.prototype.getName = function(){
	console.log(this.name);
}

function Child1(){

}

Child1.prototype = new Parent();

let obj1 = new Child1();

console.log(obj1);

//构造函数继承
function Child2(){
	Parent.call(this)

	//其他方法会在构造函数中定义，每次实例都会创建
}

//组合继承
function Child3(){
	Parent.call(this)
}

Child3.prototype = new Parent();
Child3.prototype.constructor = Child3;

//原型式继承
function createObj(o){
	function F(){};
	F.prototype = o;
	return new F();
}


//寄生式组合继承
function Child4(age){
	Parent.call(this);
	this.age = age;
}

Child4.prototype = Object.create(Parent.prototype);
Child4.prototype.constructor = Child4;
