Function.prototype.myCall = function(){
	let _self = arguments[0];
	let _this = this;
	(()=>{
		this = _self;
		_this();
	})()
}


let obj = {
	name:"peng"
}

let name = "wen";

function getName(){
	console.log(this.name);
}

getName.myCall(obj,"a","b","c");
