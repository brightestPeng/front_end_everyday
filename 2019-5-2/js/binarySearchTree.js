import Stack from "./stack";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

class BinarySearchTree {
  insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(value) {
    let newNode = new Node(value);
    if (root === null) {
      root = newNode;
    } else {
      this.insertNode(root, newNode);
    }
  }

  order(callback){
    this.inOrderTraverse(root,callback);
  }

  otherSort(node){
    let stack = new Stack();
    let results = [];

    while(!stack.isEmpty() || node){
        if(node){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            results.push(node.value);
            node = node.right;
        }
    }

    return results;
  }

  inOrderTraverse(node,callback){
      if(node !== null){
        this.inOrderTraverse(node.left,callback);
        callback(node.value);
        this.inOrderTraverse(node.right,callback);
      }
  }
}
