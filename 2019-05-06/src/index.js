
// 158

// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1 < 10 ? "0"+(date.getMonth() + 1):date.getMonth() + 1;

// //为getDate
// let day = date.getDate() < 10 ? "0"+date.getDate():date.getDate();

// console.log(`${year}-${month}-${day}`);

// 159

// let str = "<tr><td>{$id}</td><td>{$name}</td></tr>";

// function format(tpl,data){
// 	//括号很重要  提取那一部分
// 	return tpl.replace(/{\$(\w+)}/g,(match,$1)=>{
// 		return data[$1] || ""
// 	})
// }

// console.log(format(str,{
// 	id:10,
// 	name:"Tony"
// }));

// 163
// let args = [];

// function getRandom(end,start){
// 	return Math.floor(Math.random() * (end - start + 1) + start);
// }

// for(let i =0 ;i<10;i++){
// 	args.push(getRandom(10,100));
// }

// args.sort((a,b)=> a - b);

// console.log(args);

// 164

// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];

// let newArr1 = arr1.concat(arr2);

// newArr1.splice(1,1);

// console.log(newArr1);

//邮箱的正则表达式

// let qqMail = "997450807@qq.com";

// /^[\w_-]+@[\w_-]+\.[\w]{2,4}$/.test(qqMail);

// console.log(/^[\w_-]+@[\w_-]+\.[\w]{2,4}$/.test(qqMail));

//180

// String.prototype.trim = String.prototype.trim || function(){
// 	return this.replace(/^\s+|\s+$/,"");
// }

//冒泡排序

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

// 选择排序

function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        index = j;
      }
    }
    if (index !== i) {
      [array[i], array[index]] = [array[index], array[i]];
    }
  }

  return array;
}

// 插入排序

function insertSort(array) {
  let j, temp;

  for (let i = 1; i < array.length; i++) {
    j = i;
    temp = array[i];
    while (j > 0 && temp < array[j - 1]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }

  return array;
}

//归并排序

function merge(left, right) {
  let i = 0,
    j = 0,
    results = [];

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      results.push(right[j++]);
    } else {
      results.push(left[i++]);
    }
  }

  while (i < left.length) {
    results.push(left[i++]);
  }

  while (j < right.length) {
    results.push(right[j++]);
  }

  return results;
}

function divide(array) {
  if (array.length === 1) {
    return array;
  }

  let length = array.length;

  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);

  return merge(divide(left), divide(right));
}

//快速排序
function getIndex(array, left, right) {
  let mid = array[Math.floor((left + right) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (array[i] < mid) {
      i++;
    }

    while (array[j] > mid) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(array, left, right) {
	let index;

  if (array.length > 1) {
		index = getIndex(array, left, right);

    if (left < index -1)  {
      quickSort(array, left, index - 1);
    }

    if (right > index) {
      quickSort(array, index, right);
    }
  }
}

let args = [3, 1, 2, 6, 3, 9, 0];

//冒泡排序
// console.log(bubbleSort(args));

//选择排序
// console.log(selectSort(args));

//插入排序

// console.log(insertSort(args));

//归并排序

// console.log(divide(args));

//快速排序

console.log(quickSort(args,0,args.length-1));

console.log(args);


//二分搜索法
let args1 = [];

for(let i=0;i<100;i++){
	args1.push(Math.floor(Math.random() * (100 + 1)))
}

function doubleSearch(args,item){
	//先进行排序
	args.sort((a,b) => a - b);

	let low = 0,
		high = args.length,
		mid,element;

	while(low <= high){
		mid = Math.floor((low+high)/2);
		element = args[mid];
		if(element > item){
			high = mid - 1;
		}else if(element < item){
			low = mid + 1;
		}else{
			return mid;
		}
	}
	return -1;
}



console.log(doubleSearch(args1,50));

class Node{
	constructor(element){
		this.element = element;
		this.left = null;
		this.right = null;
	}
}

let root = null;

function insertNode(node,newNode){

	if(newNode.element > node.element){
		if(node.right === null){
			node.right = newNode;
		}else{
			insertNode(node.right,newNode);
		}
	}else{
		if(node.left === null){
			node.left = newNode
		}else{
			insertNode(node.left,newNode);
		}
	}
}

//递归实现先序遍历
function preOrderTraverNode(node,callback){
  if(node){
    callback(node.element);
    preOrderTraverNode(node.left,callback);
    preOrderTraverNode(node.right,callback);
  }
}

//递归实现中序遍历
function inOrderTraverNode(node,callback){
	if(node !== null){
		inOrderTraverNode(node.left,callback);
		callback(node.element);
		inOrderTraverNode(node.right,callback);
	}
}

//递归实现后续遍历
function postOrderTraverNode(node,callback){
  if(node !== null){
    postOrderTraverNode(node.left,callback);
    postOrderTraverNode(node.right,callback);
    callback(node.element);
  }
}

let items = [];

class Stack{
	push(element){
		items.push(element);
	}

	pop(){
		return items.pop();
  }
  
  isEmpty(){
    return items.length === 0;
  }

  getLastElement(){
    return items[items.length - 1];
  }
}


class BinarySearchTree{

	insert(element){
		let node = new Node(element);
		if(!root){
			root = node;
		}else{
			insertNode(root,node);
		}
	}

	inOrderTraver(callback){
		inOrderTraverNode(root,callback);
	}

	//利用栈进行中序遍历
	inOrderTraverStack(callback){
		let node = root,
			stack = new Stack();

    while(!stack.isEmpty() || node){
      if(node){
        stack.push(node);
        node = node.left;
      }else{
        node = stack.pop();
        callback(node.element);
        node = node.right;
      }
    }
  }
  
  //先序遍历  用于打印文档结构
  preOrderTraver(callback){
    preOrderTraverNode(root,callback);
  }

  preOrderTraverStack(callback){
    let stack = new Stack(),
      node = root;
    stack.push(root);

    while(!stack.isEmpty()){
      node = stack.pop();
      callback(node.element);

      if(node.right !== null){
        stack.push(node.right);
      }

      if(node.left !== null){
        stack.push(node.left);
      }
    }
  }

  //后序遍历   用于计算文件夹下文件大小
  postOrderTraver(callback){
    postOrderTraverNode(root,callback);
  }

  postOrderTraverStack(callback){
    let stack = new Stack();
    let node = root;
    let parentNode = null;


    stack.push(node);

    while(!stack.isEmpty()){

      parentNode = stack.getLastElement();

      if(parentNode.right !== null && node !== parentNode.left && node !== parentNode.right){
        stack.push(parentNode.right);
      }else if(parentNode.left !== null && parentNode.left !== node){
        stack.push(parentNode.left);
      }else{
         node = stack.pop();
         callback(node.element);
      }
    }
  }
}

//中序遍历

const tree = new BinarySearchTree();

tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(5);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(10);

// tree.inOrderTraver((element)=>{
// 	console.log(element);
// })

// tree.preOrderTraver((element)=>{
// 	console.log(element,"a");
// })

// tree.preOrderTraverStack((element)=>{
// 	console.log(element,"b");
// })

tree.postOrderTraver((element)=>{
	console.log(element,"aaa");
})

tree.postOrderTraverStack((element)=>{
	console.log(element,"bbb");
})