class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVetax(key) {
    if (this.adjacencyList[key]) return;
    this.adjacencyList[key] = [];
  }
}

const g = new Graph();
g.addVetax("tokyo");
console.log(g);
