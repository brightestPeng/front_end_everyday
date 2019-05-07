//冒泡排序法

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
	}
	return array;
}

//选择排序

function selectSort(array) {
	let index,j;
  for (let i = 0; i < array.length; i++) {
     	index = i;
      j = i;

    while (j < array.length - 1) {
			if(array[index] > array[j + 1]){
				index = j + 1;
			}
			j++;
		}	
		
    if (i !== index) {
      [array[i],array[index]] = [array[index],array[i]];
    }
  }
}

//插入排序

function insertSort(array){
	let index,tem;

	for(let i=1;i<array.length;i++){
		index = i;
		tem = array[i];

		while(index > 0 && tem < array[index -1]){
			array[index] = array[index-1];
			index--;
		}

		if(i !== index){
			array[index] = tem;
		}
	}
}

//归并排序

function merge(left,right){
	let result = [],
		l = 0,
		r = 0;

	while(l<left.length && r<right.length){
		if(left[l] < right[r]){
			result.push(left[l++])
		}else{
			result.push(right[r++])
		}
	}

	while(l<left.length){
		result.push(left[l++]);
	}

	while(r<right.length){
		result.push(right[r++]);
	}

	return result;
}

//归并排序法
function mergeSort(array){
	let length = array.length;

	if(length === 1){
		return array
	}

	let mid = Math.floor(length/2);
	let left = array.slice(0,mid);
	let right = array.slice(mid,length);

	return merge(mergeSort(left),mergeSort(right));
}

//快速排序法
function getIndex(array,left,right){
	let mid = array[Math.floor((left+right)/2)],
		l = left,
		r = right;

	while(l <= r){
		while(array[l] < mid){
			l++;
		}

		while(array[r] > mid){
			r--;
		}

		if(l <= r){
			[array[l],array[r]] = [array[r],array[l]];
			l++;
			r--;
		}
	}	

	return l;
}

function quickSort(array,left,right){
	let index;

	if(array.length > 1){
		index = getIndex(array,left,right);

		if(left < index-1){
			quickSort(array,left,index-1);
		}

		if(right > index){
			quickSort(array,index,right);
		}
	}
}

//tree遍历   递归实现、栈实现



//插入node节点
function insertNode(node,newNode){
	if(node.value > newNode.value){
		if(node.left === null){
			node.left = newNode;
		}else{
			insertNode(node.left,newNode);
		}
	}else{
		if(node.right === null){
			node.right = newNode
		}else{
			insertNode(node.right,newNode);
		}
	}
}

//先序遍历  打印文档结构
function preOrderTraverSearch(node,callback){
	if(node !== null){
		callback(node.value);
		preOrderTraverSearch(node.left,callback);
		preOrderTraverSearch(node.right,callback);
	}
}

//中序遍历  从小到大排序
function midOrderTraverSearch(node,callback){
	if(node !== null){
		midOrderTraverSearch(node.left,callback);
		callback(node.value);
		midOrderTraverSearch(node.right,callback);
	}
}

//后序遍历  用来统计目录下文件的大小
function postOrderTraverSearch(node,callback){
	if(node !== null){
		postOrderTraverSearch(node.left,callback);
		postOrderTraverSearch(node.right,callback);
		callback(node.value);
	}
}


let items = []

class Stack{
	push(value){
		items.push(value);
	}

	pop(){
		return items.pop();
	}

	isEmpty(){
		return items.length === 0;
	}

	//获得第一个出栈的元素
	getFirstElement(){
		return items[items.length-1];
	}

}

//初始化node节点
class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

let root = null;

//二叉搜索树
class BinarySearchTree{
	insert(value){
		let node = new Node(value);
		if(root === null){
			root = node
		}else{
			insertNode(root,node);
		}
	}

	//先序遍历
	preOrderTraver(callback){
		preOrderTraverSearch(root,callback);
	}

	//栈实现先序遍历
	preOrderTraverStack(callback){
		let stack = new Stack(),
			node =root;

		stack.push(node);

		while(!stack.isEmpty()){
			node = stack.pop();
			callback(node.value);
			
			if(node.right !== null){
				stack.push(node.right);
			}

			if(node.left !== null){
				stack.push(node.left);
			}
		}
	}

	//中序遍历
	midOrderTraver(callback){
		midOrderTraverSearch(root,callback);
	}

	//栈实现中序遍历
	midOrderTraverStack(callback){
		let stack = new Stack(),
			node = root;

		while(node !== null || !stack.isEmpty()){
			if(node !== null){
				stack.push(node);
				node = node.left
			}else{
				node = stack.pop();
				callback(node.value);
				node = node.right;
			}
		}
	}

	//后序遍历
	postOrderTraver(callback){
		postOrderTraverSearch(root,callback);
	}

	//栈实现后序遍历
	postOrderTraverStack(callback){
		let stack = new Stack(),
			parentNode = root,
			childNode = null;
		
		stack.push(parentNode);

		while(!stack.isEmpty()){
			parentNode = stack.getFirstElement();
			if(parentNode.left !== null && parentNode.left !== childNode && parentNode.right !== childNode){
				stack.push(parentNode.left);
			}else if(parentNode.right !== null && parentNode.right !== childNode){
				stack.push(parentNode.right);
			}else{
				childNode = stack.pop();
				callback(childNode.value);
			}
		}
	}
}

//测试

let tree = new BinarySearchTree();

tree.insert(4);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(5);
tree.insert(7);

//先序遍历
let preStr1 = "";
let preStr2 = "";
tree.preOrderTraver((value)=>{
	preStr1 += `${value}-`
});
preStr1 = preStr1.slice(0,preStr1.length - 1);

console.log(preStr1);

tree.preOrderTraverStack((value)=>{
	preStr2 += `${value}-`
});
preStr2 = preStr2.slice(0,preStr2.length - 1);

console.log(preStr2);

//中序遍历
let midStr1 = "";
let midStr2 = "";
tree.midOrderTraver((value)=>{
	midStr1 += `${value}-`
});
midStr1 = midStr1.slice(0,midStr1.length - 1);

console.log(midStr1);

tree.midOrderTraverStack((value)=>{
	midStr2 += `${value}-`
});
midStr2 = midStr2.slice(0,midStr2.length - 1);

console.log(midStr2);

//后序遍历
let postStr1 = "";
let postStr2 = "";
tree.postOrderTraver((value)=>{
	postStr1 += `${value}-`
});
postStr1 = postStr1.slice(0,postStr1.length - 1);

console.log(postStr1);

tree.postOrderTraverStack((value)=>{
	postStr2 += `${value}-`
});
postStr2 = postStr2.slice(0,postStr2.length - 1);

console.log(postStr2);


//排序算法
let args = [2,21,84,5,3,9,32,11];

// console.log(bubbleSort(args));
// console.log(selectSort(args));
// console.log(insertSort(args));
// console.log(mergeSort(args));

console.log(quickSort(args,0,args.length-1));
console.log(args);

//新建字典类数据结构
let obj = {};

class Dictionary{

	set(key,value){
		obj[key] = value;
	}

	get(key){
		return obj[key]
	}
}
//新建一个队列数据结构
let queue = [];

class Queue{
	queue(value){
		queue.push(value);
	}

	dequeue(){
		return queue.shift();
	}

	isEmpty(){
		return queue.length === 0;
	}
}


let points = [];
let lines = new Dictionary();

function initColor(){
	let colors = {};

	for(let i=0;i<points.length;i++){
		colors[points[i]] = "white";
	}

	return colors;
}

class Graph{

	addPoint(v){
		points.push(v);
		lines.set(v,[]);
	}

	addLine(v,w){
		//无向图
		lines.get(v).push(w);
		lines.get(w).push(v);
	}

	//广度优先算法
	bfs(v,callback){
		let colors = initColor(),
			queue = new Queue(),
			u;

		queue.queue(v);

		while(!queue.isEmpty()){
			u = queue.dequeue();
			let uPoints = lines.get(u);
			colors[u] = "gray";

			for(let i=0;i<uPoints.length;i++){
				if(colors[uPoints[i]] === "white"){
					colors[uPoints[i]] = "gray";
					queue.queue(uPoints[i]);
				}
			}

			colors[u] = "black";
			if(callback){
				callback(u);
			}
		}
	}


	//深度优先算法
	dfs(callback){
		var colors = initColor();

		
		let disVisit = (u,colors,callback)=>{
			if(callback){
				callback(u);
			}
			colors[u] = "gray";
			let uPoints = lines.get(u);

			for(let i=0;i<uPoints.length;i++){
				if(colors[uPoints[i]] === "white"){
					disVisit(uPoints[i],colors,callback);
				}
			}

			colors[u] = "black";
		}

		for(let i=0;i<points.length;i++){
			if(colors[points[i]] === "white"){
				disVisit(points[i],colors,callback);
			}
		}


	}
}


let graph = new Graph();
let graphs = ["A","B","C","D","E","F"];

for(let i=0;i<graphs.length;i++){
	graph.addPoint(graphs[i]);
}

graph.addLine("A","B");
graph.addLine("A","C");
graph.addLine("B","E");
graph.addLine("B","D");
graph.addLine("C","E");
graph.addLine("D","F");
graph.addLine("E","F");

graph.bfs("A",(point)=>{
	console.log(point);
});

graph.dfs((point)=>{
	console.log(point);
});