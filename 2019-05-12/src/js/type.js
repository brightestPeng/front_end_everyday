let typeObj = {};

"Object Array Boolean Number String Function Null Undefined Date RegExp Error"
  .split(" ")
  .forEach(index => {
    typeObj["[object " + index + "]"] = index.toLowerCase();
  });

function type(obj) {
  if (obj == null) {
    return obj + "";
  } else {
    return typeof obj === "object" || typeof obj === "function"
      ? typeObj[Object.prototype.toString.call(obj)] || "object"
      : typeof obj;
  }
}


console.log(typeof NaN);