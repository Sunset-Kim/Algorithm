class Node {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(priority, value) {
    const newNode = new Node(priority, value);
    if (this.queue.length === 0) return this.queue.push(newNode);

    while (true) {}
  }
}
