class Queue {
  constructor() {
    this.items = [];
  }

  queue(point) {
    this.items.push(point);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.lines = new Map();
  }

  add(point) {
    this.vertices.push(point);
    this.lines.set(point, []);
  }

  addLines(start, end) {
    //无向图
    this.lines.get(start).push(end);
    this.lines.get(end).push(start);
  }

  getPoint() {
    return this.vertices;
  }

  getLines() {
    return this.lines;
  }

  bfsSearch(point, colors, callback) {
    colors[point] = "gray";
    var queue = new Queue();
    queue.queue(point);

    while (!queue.isEmpty()) {
      var index = queue.dequeue();
      var points = this.lines.get(index);

      for (var i = 0; i < points.length; i++) {
        if (colors[points[i]] === "white") {
          colors[points[i]] = "gray";
          queue.queue(points[i]);
        }
      }

      colors[index] = "black";
      if (callback) {
        callback(index);
      }
    }
  }

  //广度优先搜索
  BFS(point, callback) {
    let vertices = graph.getPoint();
    var colors = {};

    for (let i = 0; i < vertices.length; i++) {
      colors[vertices[i]] = "white";
    }

    this.bfsSearch(point, colors, callback);
  }


  dfsSearch(point,colors,callback){
    colors[point] = "gray";
    var points = this.lines.get(point);

    for(var i=0;i<points.length;i++){
        if(colors[points[i]] === "white"){
            this.dfsSearch(points[i],colors,callback); 
        }
    }
    
    colors[point] = "black";
    if(callback){
        callback(point);
    }
  }

  //深度优先搜索
  DFS(callback){
    let vertices = graph.getPoint();
    var colors = {};

    for (let i = 0; i < vertices.length; i++) {
      colors[vertices[i]] = "white";
    }

    for(let i = 0; i < vertices.length; i++){
        if(colors[vertices[i]] === "white"){
            this.dfsSearch(vertices[i],colors,callback);
        }
    }
  }
}

var graph = new Graph();

graph.add("A");
graph.add("B");
graph.add("C");
graph.add("D");
graph.add("E");
graph.add("F");
graph.add("G");

graph.addLines("A", "B");
graph.addLines("A", "C");
graph.addLines("A", "D");
graph.addLines("B", "E");
graph.addLines("C", "F");
graph.addLines("F", "G");

graph.BFS("A",(point)=>{
    console.log(point);
})

graph.DFS((point)=>{
    console.log(point);
})