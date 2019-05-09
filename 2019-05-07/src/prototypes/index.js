import { func } from "prop-types";

// function Foo() {}

// Foo.prototype.add = () => {
//   console.log("add");
// };

// const foo = new Foo();

// console.log(foo);

// let dom = document.createElement("ul");

// for (let i = 1; i <= 10; i++) {
//   (function(num) {
// 		let li = document.createElement("li");
//     li.innerHTML = num;
//     dom.appendChild(li);
//   })(i);
// }

// document.body.appendChild(dom);

// //获取父节点
// dom.childNodes.forEach((index,key)=>{
// 	if((key+1)%2 !== 0){
// 		index.className = "odd";
// 	}
// });

// let oddDom = dom.getElementsByClassName("odd");
// console.log(oddDom);

// for(let i=oddDom.length - 1;i>=0;i--){
// 	dom.removeChild(oddDom[i]);
// }

// function getRequest() {
//   let request = null;

//   return function() {
//     if (request === null) {
// 			console.count("执行次数");
//       if (window.ActiveXObject) {
//         request = new ActiveXObject("Microsoft.XMLHTTP");
//       } else {
//         request = new XMLHttpRequest();
//       }
// 		}
//     return request;
//   };
// }

// const createRequest = getRequest();
// let request = createRequest();

// request.open("GET","http://localhost:3000/info");

// request.onreadystatechange = ()=>{
// 	if(request.readyState === 4){
// 		if(request.status === 200 || request.status === 0){
// 			console.log(request.responseText);
// 		}else{
// 			alert(`出现异常，错误代码为${request.status}`)
// 		}
// 	}
// };

// request.send(null);


//实现深拷贝
let types = {
	normalType:['[object Number]','[object Null]','[object Undefined]','[object Boolean]','[object String]'],
	spicalType:['[object Date]','[object RegExp]','[object Set]','[object Map]','[object weakMap]','[object weakSet]']
}

function cloneDate(obj){
	return new Date(obj.valueOf())
}

function cloneRegExp(obj){
	return new RegExp(obj.source,obj.flags);
}

function cloneMap(obj){
	let map = new Map();
	obj.entries()

	for(let [key,value] of obj.entries()){
		map.set(key,value);
	}
	return map;
}

function cloneSet(obj){
	return new Set(obj.values());
}

function specialClone(obj,type){
	switch(type){
		case '[object Data]':
			return cloneDate(obj);
		case '[object RegExp]':
			return cloneRegExp(obj);
		case '[object Map]':
			return cloneMap(obj);
		case '[object Set]':
			return cloneSet(obj);
		default:
			return obj;
	}
}


function deepClone(obj){
	let isObject = typeof obj === "object";
	if(!isObject){
		return obj;
	}

	let	result = Object.prototype.toString.call(obj) === "[object Object]"?[]:{};

	Object.keys(obj).forEach(index=>{
		let type = Object.prototype.toString.call(obj[index]);
		if(types.spicalType.includes(type)){
			result[index] = specialClone(obj[index],type);
		}else{
			result[index] = deepClone(obj[index]);
		}
	})

}


let map = new Map();

map.set("a",1);
map.set("b",2);

for(let [key,value] of map.entries()){
	console.log(key);
	console.log(value);
}



// function initEvent(element,action,fuc){

// 	let event = null;

// 	return function(){

// 		if(window.attachEvent){
// 			return element.attachEvent("on"+action,fuc);
// 		}else{
// 			return element.addEventListener(action,fuc,false);
// 		}
// 	}
// }

let test1 = {"test1":1};

class Person{
	constructor(name){
		this.name = name;
	}

	changeName(name){
		this.name = name;
	}

	sayName(){
		console.log("my name is "+this.name);
	}
}

let ming = new Person("ming");

console.log(ming);

// let uzi = Object.create(ming);

function objCreate(obj,properties){
	let F = function(){};
	F.prototype = obj;
	if(properties){
		Object.defineProperties(F,properties);
	}
	return new F();
}

function newObj(){
	let obj = new Object();

	let _self  = Array.prototype.shift.call(arguments);
	obj.__proto__ = _self.prototype;
	let ret =	_self.apply(obj,arguments);

	//如果构造函数有返回,则返回ret,否则返回对象
	return typeof ret === "object"?ret:obj;
}

let uzi = newObj(Person,"123");

console.log(uzi);


function newPromise(fuc){
	let bool = false;

	let resolve = (data)=>{
		bool = true;
	};
	let	reject = (data)=>{
		bool = true;
	};
	

	while(!bool){
		fuc(resolve,reject);
	}
}

console.log(1);

let promise = new Promise((resolve,reject)=>{
		console.log(2);

		resolve();
}).then(()=>{
	console.log(4);
});

setTimeout(()=>{
	console.log(3);
},0)

// setTimeout(()=>{
// 	console.log(222);
// },1000)