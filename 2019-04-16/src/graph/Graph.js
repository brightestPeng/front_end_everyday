/**
 * 基本概念
 *
 * 1、为非线性数据结构，任何二元关系都能用图来表示;
 * 2、由边与节点组成;
 * 3、边两边的顶点，为相邻顶点;
 * 4、顶点的度为相邻顶点的数量;
 * 5、图分为有向图与无向图、加权图与未加权图。
 */

//引入字典类数据结构
import Dictionary from "../dictionary/index";

//引入队列数据结构
import Queue from "../queue/index";

//引入栈结构
import Stack from "../stack/index";

//保存所有顶点
let vertices = [];
//保存所有顶点对应的相邻顶点  邻接表
let adjList = new Dictionary();

const initColors = () => {
  let colors = {};
  for (let i = 0; i < vertices.length; i++) {
    colors[vertices[i]] = "white";
  }
  return colors;
};

class Graph {
  //添加顶点，并初始化
  addVertex(key) {
    vertices.push(key);
    adjList.set(key, []);
  }

  //添加边
  addEdge(v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }

  toString() {
    for (let i = 0; i < vertices.length; i++) {
      console.log(`${vertices[i]} => ${adjList.get(vertices[i]).join(" ")}`);
    }
  }

  //遍历算法  分为 BFS(Breath-First Search)广度优先搜索 与 DFS(Depth-First Search)深度优先搜索
  //BFS算法
  //从一个点开始，依次探索其相邻顶点  采用队列方式
  BFS(v, callback) {
    let colors = initColors();
    let queue = new Queue();
    colors[v] = "gray";
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let otherVertices = adjList.get(u);
      for (let i = 0; i < otherVertices.length; i++) {
        let w = otherVertices[i];
        if (colors[w] === "white") {
          queue.enqueue(w);
          colors[w] = "gary";
        }
      }
      colors[u] = "black";

      if (callback) {
        callback(u);
      }
    }
  }

	minDistancesToAllVertices(v){
		const { predecessors } = this.distanceParams(v);
		let stack = new Stack();
		
		for(let i=0;i<vertices.length;i++){	
			let w = vertices[i];
			if(w === v)	{
				continue;
			};

			while(predecessors[w] !== null){
				stack.append(w);
				w = predecessors[w];
			}
			stack.append(w);
			let str = stack.pop();
			while(!stack.isEmpty()){
				str += `-${stack.pop()}`;
			}
			console.log(str);
		}
	}

  //最短路径
  distanceParams(v) {
    let colors = initColors();
    let queue = new Queue();
    queue.enqueue(v);
    colors[v] = "gray";

    let d = {};
    let pre = {};

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pre[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
			let otherVertices = adjList.get(u);

      for (let i = 0; i < otherVertices.length; i++) {
				let w = otherVertices[i];
        if (colors[w] === "white") {
					colors[w] = "gray";
					d[w] = d[u] + 1;
					pre[w] = u;
          queue.enqueue(w);
        }
      }
		}
		
		return {
			distances:d,
			predecessors:pre
		}
  }
}

export default Graph;
