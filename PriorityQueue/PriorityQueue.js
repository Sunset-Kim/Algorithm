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
    this.queue.push(newNode);

    let currentIndex = this.queue.length - 1;

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parentNode = this.queue[parentIndex];
      const currentNode = this.queue[currentIndex];
      let swap = false;

      if (parentNode.priority > currentNode.priority) {
        this.queue[parentIndex] = currentNode;
        this.queue[currentIndex] = parentNode;
        currentIndex = parentIndex;
        swap = true;
      }

      if (!swap) return this.quque;
    }

    return this.queue;
  }
}

const priorityQueue = new PriorityQueue();

console.log(priorityQueue.enqueue(10, 1));
console.log(priorityQueue.enqueue(8, 1));
console.log(priorityQueue.enqueue(6, 1));
console.log(priorityQueue.enqueue(7, 1));
console.log(priorityQueue.enqueue(5, 1));
console.log(priorityQueue.enqueue(3, 1));
console.log(priorityQueue.enqueue(1, 1));
