//冒泡排序法  时间复杂度  O(n ^ 2)

let args = [];
for(let i=1000;i>0;i--){
    args.push(i);
}

function bubbleSort(args) {
  for (let m = 0; m < args.length; m++) {
    for (let n = 0; n < args.length - 1 - m; n++) {
      if (args[n] > args[n+1]) {
        //ES5
        // let tem = args[m];
        // args[m] = args[n];
        // args[n] = tem;

        //ES6
        [args[n],args[n+1]] = [args[n+1],args[n]];
      }
    }
  }

  return args;
}

console.time();
console.log(bubbleSort(args),"冒泡排序");
console.timeEnd();