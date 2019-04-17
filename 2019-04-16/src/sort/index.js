
import ArrayList from "./ArrayList";

let arr = new ArrayList();

let others = [2,1,5,4,6,3];

for(let i=0;i<others.length;i++){
	arr.insert(others[i]);
}

// let arrs = [];

// function testSort(num){
// 	for(let i=num;i>0;i--){
// 		let key = parseInt(Math.random() * num);
// 		arr.insert(key);
// 		arrs.push(key);
// 	}
// }

// testSort(1000000);

arr.toString();

console.time();

//经过冒泡排序 10000条  27s
// arr.bubbleSort();

//选择排序  10000条  4.5s
// arr.selectionSort();

//插入排序 10000  2.4s
// arr.insertSort();

//归并排序 fixfox 自带sort  10000  28ms
// arrs.sort((a,b)=>a<b);
// arr.mergeSort();

//快速排序  chrome 自带sort 10000 2ms
// arrs.sort((a,b)=>a<b);
arr.quickSort();

console.timeEnd();

arr.toString();