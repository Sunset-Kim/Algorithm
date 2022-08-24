class BinaryHeap {
  constructor() {
    this.array = [];
  }

  insert(value) {
    if (this.array.length === 0) {
      return this.array.push(value);
    }
    this.array.push(value);

    let currentIndex = this.array.length - 1;
    const element = this.array[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parent = this.array[parentIndex];

      if (element <= parent) {
        break;
      }
      this.array[parentIndex] = element;
      this.array[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.array.length === 0) return;
    const max = this.array[0];
    const end = this.array.pop();
    this.array[0] = end;
    this.bubbleDown();

    return max;
  }

  bubbleDown() {
    let index = 0;

    const length = this.array.length;
    const element = this.array[0];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.array[leftChildIdx];

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.array[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.array[index] = this.array[swap];
      this.array[swap] = element;
      index = swap;
    }
  }
}

// 33 39 33 18 27 12

const binaryHeap = new BinaryHeap();

binaryHeap.insert(96);
binaryHeap.insert(74);
binaryHeap.insert(66);
binaryHeap.insert(41);
binaryHeap.insert(44);
binaryHeap.insert(16);
binaryHeap.insert(97);

console.log(binaryHeap);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap);
