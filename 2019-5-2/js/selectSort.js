//选择排序法  时间复杂度  O(n ^ 2)
let args1 = [];
for(let i=1000;i>0;i--){
    args1.push(i);
}


function selectSort(args) {
  for (let m = 0; m < args.length; m++) {
    let indexMin = m;
    for (let n = m+1; n < args.length; n++) {
        if(args[n] < args[indexMin]){
            indexMin = n;
        }
        if(indexMin > m){
            [args[m],args[indexMin]] = [args[indexMin],args[m]]
        }
    }
  }
  return args;
}

console.time();
console.log(selectSort(args1),"选择排序");
console.timeEnd();