class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element to the top of the stack
  push(element) {
    this.stack.push(element);
    console.log(`${element} pushed to stack.`);
  }

  // Pop an element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      console.log('Stack is empty.');
      return null;
    }
    const poppedElement = this.stack.pop();
    console.log(`${poppedElement} popped from stack.`);
    return poppedElement;
  }

  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      console.log('Stack is empty.');
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stack.length;
  }

  // Print the stack elements
  printStack() {
    console.log('Stack:', this.stack.join(' '));
  }
}

// Example usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

myStack.printStack(); // Output: Stack: 10 20 30

myStack.pop();        // Output: 30 popped from stack.
myStack.peek();       // Output: 20
myStack.printStack(); // Output: Stack: 10 20
