class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (this.adjacencyList[key]) return;
    this.adjacencyList[key] = [];
  }

  /**
   * 2. adding an edge
   * - 두개의 vertex를 받음
   * - vertex1을 list에서 찾아서 vertex2의 키를 push
   * - vertex2을 list에서 찾아서 vertex1의 키를 push
   */

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Removig an edge
   * - 2개의 vertex를 받음
   * - vertex1 list : reassign vertex2를 제외한 배열
   * - vertex2 list : reassign vertex1를 제외한 배열
   */

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  /**
   * Removing vertex
   * - input : 제거해야하는 vertex를 받음
   * - list에 다른 정점들이 있다면 ? 해당하는 정점을 순회하면서 다 삭제 해야함.
   * - removeEdge를 사용한다
   */

  removeVertex(key) {
    if (!this.adjacencyList[key].length) return;

    this.adjacencyList[key].forEach((v) => {
      this.removeEdge(key, v);
    });

    delete this.adjacencyList[key];
  }

  /**
   * Graph DFS
   * 1. 재귀
   * 2. 순환
   */

  /**
   * input : start node
   * result list
   * visited vertices object
   *
   * create helper
   * helper early retrun vertex is empty
   *
   * @param {*} vertex 처음방문하는 node
   */
  DFS(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    helper(start);

    function helper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return helper(neighbor);
        }
      });
    }

    return result;
  }

  DFS_while(start) {
    const result = [];
    const visited = {};
    const stack = [];

    stack.push(start);
    visited[start] = true;
    let currentVertex = stack.pop();
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList(currentVertex).forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFS("A"));
