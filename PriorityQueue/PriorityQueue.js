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
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentNode = this.queue[parentIndex];
      const currentNode = this.queue[currentIndex];
      let swap = false;

      if (parentNode.priority > currentNode.priority) {
        this.queue[parentIndex] = currentNode;
        this.queue[currentIndex] = parentNode;
        currentIndex = parentIndex;
        swap = true;
      }

      if (!swap) return this.queue;
    }

    return this.queue;
  }

  dequeue() {
    const max = this.queue[0];
    const newRoot = this.queue.pop();
    if (this.queue.length === 0) return;

    this.queue[0] = newRoot;

    let currentIndex = 0;
    const length = this.queue.length;
    const currentNode = this.queue[currentIndex];

    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let leftNode, rightNode;
      let swap = false;

      if (leftIndex < length) {
        leftNode = this.queue[leftIndex];
        if (currentNode.priority > leftNode.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightNode = this.queue[rightIndex];
        if (
          (!swap && currentNode.priority > rightNode.priority) || //
          (swap && leftNode.priority > rightNode.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (!swap) break;

      this.queue[currentIndex] = this.queue[swap];
      this.queue[swap] = currentNode;
      currentIndex = swap;
    }

    return max;
  }
}

// test
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(10, 1);
priorityQueue.enqueue(8, 1);
priorityQueue.enqueue(6, 1);
priorityQueue.enqueue(7, 1);
priorityQueue.enqueue(5, 1);
priorityQueue.enqueue(3, 1);
priorityQueue.enqueue(1, 1);

console.log(priorityQueue.queue);

priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();

console.log(priorityQueue.queue);
