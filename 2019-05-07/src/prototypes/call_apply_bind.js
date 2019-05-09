Function.prototype.myCall = function(context){
	context = context || window;
	context.fn = this;
	let args =[];

	for(let i=1;i<arguments.length;i++){
		args.push("arguments["+i+"]");
	}

	let result = eval("context.fn("+args+")");

	delete context.fn;
	return result;
}

Function.prototype.myApply = function(context,arr){
	context = context || window;
	context.fn = this;
	let args = [],
		result;

	if(arr instanceof Array){
		for(var i=0;i<arr.length;i++){
			args.push('arr['+i+']');
		}
		result = eval("context.fn("+args+")");
	}else{
		result = context.fn();
	}

	delete context.fn;
	return result;
}


// Function.prototype.bind = function(context){
// 	let _self = this;
// 	return function(){
// 		_self.apply(context,arguments);
// 	}
// }


// let obj = {
// 	name:"peng"
// }

// let name = "wen";

// function getName(a,b,c){
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);

// 	console.log(this.name);
// }

// getName.myApply(obj,["a","b","c"]);

// console.log(a);

// // var a = "bb";
// function a(){

// }

var foo = 1;

var fooReference = {
    base: EnvironmentRecord,
    name: 'foo',
    strict: false
};

GetValue(fooReference) 