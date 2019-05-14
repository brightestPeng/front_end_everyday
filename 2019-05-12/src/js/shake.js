//函数防抖
function debounce(fuc, time, immediate) {
  var timer, result;

  var debounced = function() {
    var context = this;

    if (timer) clearTimeout(timer);
    if (immediate) {
      var canNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, time || 1000);

      if (canNow) result = fuc.apply(context, arguments);
    } else {
      timer = setTimeout(() => {
        fuc.apply(context, arguments);
      }, time || 1000);
    }
    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}

//函数节流
function throttle(fuc, time, options) {
  var timer,
    previous = 0,
    time = time || 1000;
  if (!options) options = {};

  // return function() {
  //   if (timer) {
  //     return;
  //   } else {
  //     timer = setTimeout(() => {
  //       fuc.apply(this, arguments);
  //       timer = null;
  //     }, time || 1000);
  //   }
  // };

  var throttled = function() {
		var now = +new Date(),
			context = this,
			args = arguments;

		if (!previous && options.pre === false) previous = now;
		var remaining = time - (now - previous);

    if (remaining <= 0 || remaining > time) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fuc.apply(context, args);
			previous = now;
			if(!timeout) context = args = null;
    } else if (!timer && options.final !== false) {
      timer = setTimeout(() => {
        previous = options.pre === false ? new Date().getTime() : 0;
        fuc.apply(context, args);
				timer = null;
				if(!timeout) context = args = null;
      }, time);
    }
	};
	
	throttled.cancel = function(){
		clearTimeout(timer);
		timer = null;
		previous = 0;
	}

  return throttled;
}

export { debounce, throttle };
