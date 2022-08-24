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

      const temp = this.array[parentIndex];
      this.array[parentIndex] = element;
      this.array[currentIndex] = parent;
      currentIndex = parentIndex;
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
// binaryHeap.insert(97);

console.log(binaryHeap);
