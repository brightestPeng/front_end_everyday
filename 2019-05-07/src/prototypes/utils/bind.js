Function.prototype.myBind = function(context) {
  context = context || window;
  var _self = this;
  var args = [].slice.call(arguments, 1);

	//使用空对象进行转接，避免修改fn.prototype影响到原函数原型
	 let mn = function(){};

  let fn = function() {
    let args1 = [].slice.call(arguments);
    return _self.apply(this instanceof mn ? this : context, args.concat(args1));
  };

	mn.prototype = _self.prototype;
	
	fn.prototype = new mn();

  return fn;
};

// return function(){
// 	let result,
// 		args1 = [].slice.call(arguments);

// 	result =  _self.apply(context,args.concat(args1));

// 	return result;
// }

let obj = {
  value: 2
};

let value = 1;

function Bar(name, age) {
  this.name = name;
  this.age = age;
}

Bar.prototype.getName = function(){
	console.log(this.name);
}

let fuc = Bar.myBind(obj);

console.log(new fuc("peng", "25"));
console.log(new Bar("peng", "26"));

function createFactory() {
  let obj = {};
  let _self = [].prototype.shift.call(arguments);

  obj.__proto__ = _self.prototype;

  let ret = _self.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

