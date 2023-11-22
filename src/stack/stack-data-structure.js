class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === 0) {
      return true;
    } else if (this.stackControl.length === this.MAX_SIZE){
    return false;
  } //or  return this.stackControl.length < this.MAX_SIZE;
  }; 

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
