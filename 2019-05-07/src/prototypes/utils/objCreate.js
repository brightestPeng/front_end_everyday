
//工厂模式

function createObject(name){
	var o = new Object();
	o.name = name;
	o.getName = function(){
		console.log(this.name);
	}

	return o;
}


//构造函数模式

function Person1(name){
	this.name = name;
	this.getName = function(){
		console.log(this.name);
	}
}

//原型模式

function Person2(){

}

Person2.prototype.name = "name";
Person2.prototype.getName = function(){
	console.log(this.name);
}

//组合模式

function Person3(name){
	this.name = name;
}

Person3.prototype.getName = function(){
	console.log(this.name);
}

// 稳妥构造函数模式

function Person4(name){
	let o = new Object();
	o.name = name;

	o.getName = function(){
		console.log(o.name);
	}

	return o;
}

console.log(new Person4("peng"));