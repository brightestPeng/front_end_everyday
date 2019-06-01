function binarySearch(array, index) {
  //先对数组进行排序
  array.sort((a, b) => b - a);

  var left = 0,
    right = array.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (index === array[mid]) {
      return mid;
    } else if (index > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
