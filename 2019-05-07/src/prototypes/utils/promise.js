MyPromise.Pending = "PENGING";
MyPromise.Fullfilled = "FULLFILLED";
MyPromise.Reject = "REJECT";

class MyPromise {
  constructor(executor) {
    this.status = MyPromise.Pending;
    this.value = null;
    this.reason = null;

    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.init(executor);
  }

  resolve(value) {
    if (this.status === MyPromise.Pending) {
      setTimeout(() => {
        this.status = MyPromise.Fullfilled;
        this.value = value;
        this.resolveCallbacks.forEach(cb => cb(value));
      }, 0);
    }
  }

  reject(reason) {
    if (this.status === MyPromise.Pending) {
      setTimeout(() => {
        this.status = MyPromise.Reject;
        this.reason = reason;
        this.rejectCallbacks.forEach(cb => cb(value));
      }, 0);
    }
  }

  then(resolve, reject) {
    let onResolve = typeof resolve === "function" ? resolve : value => value;
    let onReject =
      typeof reject === "function"
        ? reject
        : error => {
            throw error;
          };

    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.Fullfilled) {
        setTimeout(() => {
          try {
            let x = onResolve(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === MyPromise.Reject) {
        setTimeout(() => {
          try {
            let x = onReject(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === MyPromise.Pending) {
        this.resolveCallbacks.push(value => {
          setTimeout(() => {
            try {
              let x = onResolve(value);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });

        this.rejectCallbacks.push(value => {
          setTimeout(() => {
            try {
              let x = onReject(value);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return promise2;
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
      reject(new Error("type"));
    }
    let called = false;
    if (x !== null && (typeof x === "object" || typeof x === "function")) {
      try {
        x = x.then;
        if (typeof x === "function") {
          x.call(x, y => {
			if(called) return;
			called = true;
			resolvePromise(promise2,y,resolve,reject);
		  }, error => {
			  if(called) return;
			  called = true;
			  reject(error);
		  });
        } else {
          resolve(x);
        }
      } catch (error) {
        if (called) return;
        called = true;
        reject(x);
      }
    } else {
      resolve(x);
    }
  }

  init(executor) {
    executor(this.resolve, this.reject);
  }
}
