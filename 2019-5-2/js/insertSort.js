//插入排序法
let args2 = [];
for (let i = 1000; i > 0; i--) {
  args2.push(i);
}

function insertSort(args) {
  for (let m = 1; m < args.length; m++) {
    let n = m;
    let tem = args[m];

    while (n > 0 && args[n - 1] > tem) {
        args[n] = args[n-1];
        n--;
    }

    args[n] = tem;
  }
  return args;
}

console.time();
console.log(insertSort(args2), "插入排序");
console.timeEnd();
