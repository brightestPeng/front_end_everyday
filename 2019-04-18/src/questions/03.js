//实现几种排序算法

//快速排序法

let arrs = [2, 3, 7, 2, 9, 5, 6];

const getMiddle = (array, left, right) => {
  let l = left,
    r = right,
    mid = array[Math.floor((left + right) / 2)];

  while (l <= r) {
    while (array[l] < mid) {
      l++;
    }

    while (mid < array[r]) {
      r--;
    }

    if (l <= r) {
      [array[l], array[r]] = [array[r], array[l]];
      l++;
      r--;
    }
  }

  console.log(l, "l");

  return l;
};

const quickSort = (arrs, left, right) => {
  console.log(arrs);
  if (arrs.length > 1) {
    const middle = getMiddle(arrs, left, right);

    if (left < middle - 1) {
      quickSort(arrs, left, middle - 1);
    }

    if (middle < right) {
      quickSort(arrs, middle, right);
    }
  }
};

quickSort(arrs, 0, arrs.length - 1);

console.log(arrs);
