/**
 * 去掉一组整型数组的重复值
 */
let items = {};

class Set{
	add(value){
		if(!items[value]){
			items[value] = value;
			return true;
		}
		return false;
	}

	values(){
		let args = [];

		Object.keys(items).forEach(key=> args.push(items[key]))

		return args;
	}
}

let arr = [1,13,24,11,11,14,1,2];

let set = new Set();

arr.forEach(value=> set.add(value));

console.log(set.values());