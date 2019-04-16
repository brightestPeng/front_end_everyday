//引入图标数据结构
import Graph from "./Graph";


let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("B","E");
graph.addEdge("C","D");
graph.addEdge("C","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

graph.toString();

graph.minDistancesToAllVertices("C");

// console.log(graph.minDistance("C"));

// const { predecessors,distances } = graph.minDistance("C");


// //利用栈寻找最短距离
// let stack = new Stack();





