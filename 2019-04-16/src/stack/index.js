//栈  数据结构  后进先出

let items = [];

class Stack{

	//增
	append(key){
		items.push(key);
	}

	//删除栈顶元素
	pop(){
		return items.pop();
	}

	//是否为空
	isEmpty(){
		return items.length === 0;
	}

	toString(){
		let str = '';

		items.forEach(index=>{
			str += `-${index}`
		});

		console.log(str);
	}
}

export default Stack;