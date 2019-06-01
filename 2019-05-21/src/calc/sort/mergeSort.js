function merge(left, right) {
  var l = 0,
    r = 0,
    result = [];

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  while (l < left.length) {
    result.push(left[l++]);
  }

  while (r < right.length) {
    result.push(right[r++]);
  }

  return result;
}

function mergeSort(array) {
  var length = array.length;

  if (length === 1) {
    return array;
  }

  var mid = Math.floor(array.length / 2),
    left = array.slice(0, mid - 1),
    right = array.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
