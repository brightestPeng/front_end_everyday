
Function.prototype.myCall = function(context){
	context = context || window;
	context.fn = this;
	let args = [];

	for(let i=1;i<arguments.length;i++){
		args.push("arguments["+i+"]");
	}
	eval("context.fn("+args+")");

	delete context.fn;
}

let obj = {
	value:2
}
let value = 1;

function bar(a,b,c){
	console.log(a+b+c);
	console.log(this.value);
}

bar.myCall(obj,"a","b","c");