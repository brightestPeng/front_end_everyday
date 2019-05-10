


MyPromise.Pending = "PENGING";
MyPromise.Fullfilled = "FULLFILLED";
MyPromise.Reject = "REJECT";

class MyPromise{
	constructor(executor){	
		this.status = MyPromise.Pending;
		this.value = null;
		this.reason = null;

		this.resolveCallbacks = [];
		this.rejectCallbacks = [];

		this.resolve = this.resolve.bind(this);
		this.reject = this.reject.bind(this);
		this.init(executor);
	}

	resolve(value){
		if(this.status === MyPromise.Pending){
			setTimeout(()=>{
				this.status = MyPromise.Fullfilled;
				this.value = value
			},0)
		}
	}

	reject(reason){
		if(this.status === MyPromise.Pending){
			setTimeout(()=>{
				this.status = MyPromise.Reject;
				this.reason = reason;
			},0)
		}
	}

	then(resolve,reject){
		if(this.status === MyPromise.Fullfilled){
			this.resolveCallbacks.push(resolve);
		}else if(this.status === MyPromise.Reject){
			this.rejectCallbacks.push(reject);
		}else{

			this.rejectCallbacks.push(reject);
		}
	}

	init(executor){
		executor(this.resolve,this.reject);
	}

}