class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    return this.keyMap[index]?.find((arr) => arr[0] === key)?.[1];
  }

  keys() {
    const result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          result.push(this.keyMap[i][j][0]);
        }
      }
    }
    return result;
  }

  values() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!result.includes(this.keyMap[i][j][1])) {
            result.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return result;
  }
}

const hash = new HashTable(4);

hash.set("dog", 100);
hash.set("cat", 200);
hash.set("bear", 400);
