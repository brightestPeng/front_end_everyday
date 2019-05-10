let spicalDetail = [
  "[object Date]",
  "[object RegExp]",
  "[object Map]",
	"[object Set]",
	"[object weakMap]",
	"[object weakSet]"
];

function getType(obj) {
  return Object.prototype.toString.call(obj);
}

function speicalClone(obj, type) {
  switch (type) {
    case "[object Date]":
			return new Date(obj.getTime());
		case "[object RegExp]":
			return new RegExp(obj.source,obj.flags);
		case "[object Map]":
			let map = new Map();
			for(let [key,value] of obj.entries()){
				map.set(key,value)
			}
			return map;
		case "[object Set]":
			let set = new Set();
			for(let value of obj.values()){
				set.add(value);
			}

			return set;
		default :
			return obj;
  }
}

function deepClone(obj) {
  let isObj = typeof obj === "object";
  if (!isObj) {
    return obj;
  }

  let type = getType(obj),
    result = type === "[object Array]" ? [] : {};

  Object.keys(obj).forEach(key => {
		let keyType = getType(obj[key]);
		
		console.log(keyType);

    if (spicalDetail.includes(keyType)) {
      result[key] = speicalClone(obj[key], type);
    } else {
      result[key] = deepClone(obj[key]);
    }
  });

  return result;
}


let obj = {
	a:{
		b:"peng",
		c:1,
		d:{
			time:new Date()
		}
	}
}

let obj1 = deepClone(obj);

obj1.a.d.time = 100;

console.log(obj1);
console.log(obj);

