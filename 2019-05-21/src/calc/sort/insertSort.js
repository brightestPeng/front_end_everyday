function insertSort(array) {
  for (var i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      array[j] = array[j - 1];
      j--;
    }

    if (i <= j) {
      array[j] = array[i];
    }
  }
}

export default insertSort;
