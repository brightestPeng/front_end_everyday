//new 方法模拟
function newObj() {
  let obj = {};
  let Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

//call 方法模拟
Function.prototype.myCall = function(context) {
  context = context || window;
  context.fn = this;
  let args = [];

  for (var i = 1; i < arguments.length; i++) {
    args.push("argument[" + i + "]");
  }

  var result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
};

//apply方法模拟
Function.prototype.myApply = function(context, array) {
  context = context || window;
  context.fn = this;

  var result = null;
  if (!array) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0; i < array.length; i++) {
      args.push("array[" + i + "]");
    }

    result = eval("context.fn(" + args + ")");
  }

  return result;
};

//bind方法模拟
Function.prototype.myBind = function(context){
    context = context || window;
    let _self = this;
    let args = [].slice.call(arguments,1);

    var M = function(){};

    var N = function(){
        let newArgs = [].slice.call(arguments);
        return _self.apply(this instanceof M?this : context,args.concat(newArgs));
    }

    M.prototype = this.prototype;
    N.prototype = new M();

    return N;
}

