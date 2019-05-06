

class Subject{
	constructor(){
		this.observer_list = [];
	}

	add_observer(obj){
		this.observer_list.push(obj);
	}

	remove_observer(obj){
	 	return this.observer_list.filter(index=> index !== obj);
	}

	notify(){
		this.observer_list.forEach(handler=> {
			handler.update.apply(handler,arguments);
		})
	}
}

let Observer = new Subject();

export default Observer;