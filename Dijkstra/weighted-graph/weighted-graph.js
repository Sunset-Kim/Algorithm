class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  removeVertex(vertex) {
    for (const key in this.adjacencyList) {
      this.adjacencyList[key] = this.adjacencyList[key].filter((junction) => junction.node !== vertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((junction) => junction.node !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((junction) => junction.node !== vertex1);
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");

g.addEdge("A", "B", 8);

console.dir(g);
