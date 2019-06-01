
function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if(array[j] > array[j+1]){
            var tem = array[j];
            array[j] = array[j+1];
            array[j+1] = tem;
        }
    }
  }
}

export default bubbleSort;
