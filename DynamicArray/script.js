class DynamicArray {
    constructor(capacity = 1) {
      this.capacity = capacity;
      this.length = 0;
      this.array = new Array(capacity);
    }
  
    add(data) {
      if (this.length === this.capacity) {
        this.growSize();
      }
      this.array[this.length++] = data;
    }
  
    remove() {
      if (this.length > 0) {
        this.length--;
        this.array[this.length] = undefined;
      }
    }
  
    removeAt(index) {
      if (index >= 0 && index < this.length) {
        for (let i = index; i < this.length - 1; i++) {
          this.array[i] = this.array[i + 1];
        }
        this.length--;
        this.array[this.length] = undefined;
      }
    }
  
    growSize() {
      this.capacity *= 2;
      const newArray = new Array(this.capacity);
      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }
  
    set(index, data) {
      if (index >= 0 && index < this.length) {
        this.array[index] = data;
      }
    }
  
    clean() {
      this.length = 0;
      this.capacity = 1;
      this.array = new Array(this.capacity);
    }
  
    contains(data) {
      return this.array.includes(data);
    }
  
    isEmpty() {
      return this.length === 0;
    }
}
  
const dynamicArray = new DynamicArray(3);
dynamicArray.add(1);
dynamicArray.add(2);
dynamicArray.add(3);
console.log(dynamicArray.array);
dynamicArray.remove();
console.log(dynamicArray.array);
dynamicArray.removeAt(0);
console.log(dynamicArray.array);
dynamicArray.growSize();
console.log(dynamicArray.capacity);
dynamicArray.set(0, 5);
console.log(dynamicArray.array);
dynamicArray.clean();
console.log(dynamicArray.isEmpty());
