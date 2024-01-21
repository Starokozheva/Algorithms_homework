class SpecialStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
  
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return undefined;
      }
  
      const poppedValue = this.stack.pop();
  
      if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return poppedValue;
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return undefined;
      }
  
      const min = this.minStack[this.minStack.length - 1];
  
      const tempStack = [];
      while (!this.isEmpty()) {
        tempStack.push(this.pop());
      }
  
      while (tempStack.length > 0) {
        this.push(tempStack.pop());
      }
  
      return min;
    }
}

const specialStack = new SpecialStack();
specialStack.push(3);
specialStack.push(5);
specialStack.push(2);
specialStack.push(1);

console.log(specialStack.getMin());
specialStack.pop();
console.log(specialStack.getMin());