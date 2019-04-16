
let items = [];

class Queue{
	enqueue(element){
		items.push(element);
	}

	dequeue(){
		return items.shift();
	}

	isEmpty(){
		return items.length === 0;
	}

	toSting(){
		let str = ""
		for(let i=0;i<items.length;i++){
			str += `${items[i]}-`
		};
		
		return str.slice(0,str.length);
	}
}

export default Queue;