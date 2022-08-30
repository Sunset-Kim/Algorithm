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
}

const g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

g.removeVertex("Hong Kong");

console.log(g);
