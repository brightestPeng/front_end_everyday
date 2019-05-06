//归并排序法
let args3 = [];
for (let i = 1000; i > 0; i--) {
  args3.push(i);
}

//一个方法合并
function merge(left, right) {
  let args = [],
    l = 0,
    r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] > right[r]) {
      args.push(right[r]);
      r++;
    } else {
      args.push(left[l]);
      l++;
    }
  }

  while (l < left.length) {
    args.push(left[l++]);
  }

  while (r < right.length) {
    args.push(right[r++]);
  }

  return args;
}

//一个方法分开
function divide(args) {
  let length = args.length;

  if (length === 1) {
    return args;
  }

  let mid = Math.floor(length / 2);
  let left = args.slice(0, mid);
  let right = args.slice(mid, length);

  return merge(divide(left) ,divide(right));
}


console.time();
console.log(divide(args3), "归并排序法");
console.timeEnd();
