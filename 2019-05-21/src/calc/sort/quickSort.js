function getIndex(array, left, right) {
  var mid = array[Math.floor((left + right) / 2)],
    l = left,
    r = right;

  while (l <= r) {
    while (array[l] < mid) {
      l++;
    }

    while (array[r] > mid) {
      r--;
    }

    if (l <= r) {
      var tem = array[l];
      array[l] = array[r];
      array[r] = tem;

      l++;
      r--;
    }
  }

  return l;
}

function quick(array, left, right) {
  if (array.length > 0) {
    let index = getIndex(array, left, right);

    if (left < index - 1) {
        quick(array,left,index - 1);
    }

    if(right > index){
        quick(array,index,right);
    }
  }
}

function quickSort(array) {
  quick(array, 0, array.length - 1);
}

export default quickSort;
