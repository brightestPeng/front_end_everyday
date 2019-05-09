class MyPromise {
  constructor(exector) {
    this.status = MyPromise.PENDING;
    this.value = null;
    this.reason = null;

    this.resolveCallback = [];
    this.rejectCallback = [];

    this.initBind();
    this.init(exector);
  }

  resolve(value) {
    if (this.status === MyPromise.PENDING) {
      setTimeout(() => {
        this.status = MyPromise.FULFILLED;
        this.value = value;
        this.resolveCallback.forEach(cb => cb(value));
      });
    }
  }

  reject(reason) {
    if (this.status === MyPromise.PENDING) {
      setTimeout(() => {
        this.status = MyPromise.REJECT;
        this.reason = reason;
        this.rejectCallback.forEach(cb => cb(reason));
      });
    }
  }

  then(resolve, reject) {
    let onResolve = typeof resolve === "function" ? resolve : () => {};
    let onReject = typeof reject === "function" ? reject : () => {};

    if (this.status === MyPromise.FULFILLED) {
      return new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onResolve(this.value);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        });
      });
    }

    if (this.status === MyPromise.REJECT) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onReject(this.reason);
            reject(x);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    }

    if (this.status === MyPromise.PENDING) {
      this.resolveCallback.push(value => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
							let x = onResolve(value);
							resolve(x);
            } catch (e) {
              reject(e);
            }
          });
        });
      });

      this.rejectCallback.push(reason => {
				return new Promise((resolve,reject)=>{
					setTimeout(()=>{
						try {
							let x = reject(reason);
							resolve(x);
						} catch (error) {
							reject(error);
						}
					})
				});
      });
    }
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  init(exector) {
    exector(this.resolve, this.reject);
  }
}

MyPromise.PENDING = "pending";
MyPromise.FULFILLED = "fulfilled";
MyPromise.REJECT = "reject";

console.log(1);

let test = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log("执行");
    resolve("resolve");
  });
}).then(data => {
  console.log(data);
});

console.log(2);
