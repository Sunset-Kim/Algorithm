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
    while (true) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.array[parentIndex] < this.array[currentIndex]) {
        const temp = this.array[parentIndex];
        this.array[parentIndex] = this.array[currentIndex];
        this.array[currentIndex] = temp;
        currentIndex = parentIndex;
      } else {
        return;
      }
    }
  }
}

const binaryHeap = new BinaryHeap();

binaryHeap.insert(96);
binaryHeap.insert(74);
binaryHeap.insert(66);
binaryHeap.insert(41);
binaryHeap.insert(44);
binaryHeap.insert(16);
binaryHeap.insert(97);

console.log(binaryHeap);
