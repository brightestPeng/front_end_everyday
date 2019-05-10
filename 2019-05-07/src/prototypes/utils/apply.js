Function.prototype.myApply = function(context, arr) {
  context = context || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (let i = 0; i < arr.length; i++) {
      args.push("arr[" + i + "]");
    }

    result = eval("context.fn(" + arg + ")");
  }

	delete context.fn;
	return result;
};

let obj = {
  value: 2
};

let value = 1;

function bar() {
  console.log(this.value);
}

bar.myApply(obj);
