class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVetax(key) {
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
}

const g = new Graph();
g.addVetax("tokyo");
console.log(g);
