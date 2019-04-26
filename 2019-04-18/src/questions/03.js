//实现几种排序算法

//快速排序法

// let arrs = [2, 3, 7, 2, 9, 5, 6];

// const getMiddle = (array, left, right) => {
//   let l = left,
//     r = right,
//     mid = array[Math.floor((left + right) / 2)];

//   while (l <= r) {
//     while (array[l] < mid) {
//       l++;
//     }

//     while (mid < array[r]) {
//       r--;
//     }

//     if (l <= r) {
//       [array[l], array[r]] = [array[r], array[l]];
//       l++;
//       r--;
//     }
//   }

//   console.log(l, "l");

//   return l;
// };

// const quickSort = (arrs, left, right) => {
//   console.log(arrs);
//   if (arrs.length > 1) {
//     const middle = getMiddle(arrs, left, right);

//     if (left < middle - 1) {
//       quickSort(arrs, left, middle - 1);
//     }

//     if (middle < right) {
//       quickSort(arrs, middle, right);
//     }
//   }
// };

// quickSort(arrs, 0, arrs.length - 1);

// console.log(arrs);

let arrs = [2, 3, 7, 2, 9, 5, 6];

//冒泡排序法

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    //改进冒泡排序，减少内循环
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

//冒泡排序法   时间复杂度 O(n^2)
// let newArgs = bubbleSort(arrs);

//选择排序法
function selectSort(array) {
  let length = array.length,
    indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i + 1; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
  }

  return array;
}

//选择排序发  时间复杂度 O(n^2)
// let newArgs = selectSort(arrs);

//插入排序法
function insertSort(array) {
  let length = array.length,
    index,
    tem;

  for (let i = 1; i < length; i++) {
    (index = i), (tem = array[i]);

    while (index > 0 && tem < array[index - 1]) {
      array[index] = array[index - 1];
      index--;
    }

    array[index] = tem;
  }

  return array;
}

//插入排序法 时间复杂度 O(n^2)
// let newArgs = insertSort(arrs);

// console.log(newArgs);

//归并排序法

//合并
function merge(left, right) {
  let l = 0,
    r = 0,
    array = [];

    console.log("left",left);

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      array.push(left[l++]);
    } else {
      array.push(right[r++]);
    }
  }

  while (l < left.length) {
    array.push(left[l++]);
  }

  while (r < right.length) {
    array.push(right[r++]);
  }

  return array;
}

//拆分开
function divide(array) {
  let length = array.length;

  if (length === 1) {
    return array;
  }

  let mid = Math.floor(length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid, length);

  return merge(divide(left), divide(right));
}

function mergeSort(array) {
  return divide(array);
}

//归并排序法

let newArgs = mergeSort(arrs);

console.log(newArgs);
