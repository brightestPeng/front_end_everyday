let array = [];

const merge = (left, right) => {
  let li = 0,
    ri = 0,
    results = [];

  while (li < left.length && ri < right.length) {
    if (left[li] > right[ri]) {
      results.push(right[ri++]);
    } else {
      results.push(left[li++]);
    }
  }

  while (li < left.length) {
    results.push(left[li++]);
  }

  while (ri < right.length) {
    results.push(right[ri++]);
  }

  return results;
};

const mergeSortSrc = array => {
  let length = array.length;
  if (length === 1) {
    return array;
  }

  let middle = Math.floor(length / 2),
    left = array.slice(0, middle),
    right = array.slice(middle, array.length);

  return merge(mergeSortSrc(left), mergeSortSrc(right));
};

const getIndex = (array, left, right) => {

	let m = array[Math.floor((left + right) / 2)],
  l=left,r=right;
  
	while(l<=r){
		while(array[l]<m){
			l++;
		}

		while(m<array[r]){
			r--;
		}

		if(l<=r){
			[array[l],array[r]] = [array[r],array[l]];
			l++;
			r--;
		}
	}

	return l;
};

const quick = (array,left,right) => {
	let index;



  if (array.length > 1) {
		index = getIndex(array, left, right);

		if(left<index-1){
			quick(array,left,index-1);
		}

		if(index<right){
			quick(array,index,right);
		}
  }
};

class ArrayList {
  insert(element) {
    array.push(element);
  }

  toString() {
    console.log(array.join());
  }

  //冒泡排序
  bubbleSort() {
    let length = array.length;
    for (let i = 0; i < length; i++) {
      //由 -1 => -1-i 减去不必要的内循环，进行改进
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          //如果前项大于后项，交换两者位置
          // let tem = array[j];
          // array[j] = array[j+1];
          // array[j+1] = tem;

          //ES6写法
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }

  //选择排序
  selectionSort() {
    let indexMin,
      length = array.length;

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
  }

  //插入排序
  insertSort() {
    let length = array.length,
      j,
      tem;

    for (let i = 1; i < length; i++) {
      j = i;
      tem = array[i];
      while (j > 0 && array[j - 1] > tem) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = tem;
    }
  }

  //归并排序  fixfox采用
  mergeSort() {
    array = mergeSortSrc(array);
  }

  //快速排序法
  quickSort() {
		quick(array,0,array.length-1);
	}
}

export default ArrayList;
