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

// quickSort(arrs, 0, arrs.length - 1);

//选择排序法
const selectSort = arrs => {
  for (let i = 0; i < arrs.length; i++) {
    let j = i,
			index = 0;
			
    while (j-- > 0) {
      if (arrs[i] < arrs[j]) {
        index = j;
      }
    }



		if(index < i){
			[arrs[index], arrs[i]] = [arrs[index], arrs[i]];
		}

    
  }
};

selectSort(arrs);

console.log(arrs);
