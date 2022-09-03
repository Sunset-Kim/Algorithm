class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];

    // 초기설정
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // 방문할 노드가 남아있는 한 반복
    while (nodes.values.length) {
      const { value: currentNode } = nodes.dequeue();

      if (currentNode === finish) {
        let vertex = finish;

        while (previous[vertex]) {
          path.push(vertex);
          vertex = previous[vertex];
        }

        break;
      }

      if (currentNode || distances[currentNode] !== Infinity) {
        for (let edge of this.adjacencyList[currentNode]) {
          const nextNode = edge.node;
          const nextNodeWeight = edge.weight;

          let weightSum = distances[currentNode] + nextNodeWeight;

          if (weightSum < distances[nextNode]) {
            distances[nextNode] = weightSum;
            previous[nextNode] = currentNode;
            nodes.enqueue(nextNode, weightSum);
          }
        }
      }
    }

    return path;
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

g.Dijkstra("A", "E");

console.log(g.Dijkstra("A", "E"));
