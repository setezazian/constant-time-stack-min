const Stack = require('./index');

describe('Test the implementation of stack', () => {
  it('should return zero for the size of a new stack', () => {
    const stack = Stack();
    expect(stack.size()).toBe(0);
  });

  it('should return one for size after pushing an item into the stack', () => {
    const stack = Stack();
    stack.push(23);
    expect(stack.size()).toBe(1);
  });

  it('should return zero for size after poping all items in the stack', () => {
    const stack = Stack();
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it('should return the last item that was pushed to the stack', () => {
    const stack = Stack();
    stack.push(4);
    stack.push(23);
    expect(stack.pop()).toBe(23);
  });

  it('should return the minimum value in the stack', () => {
    const stack = Stack();
    stack.push(3);
    stack.push(2);
    stack.push(2);
    expect(stack.min()).toBe(2);
  });

  it('should return the correct minimum value after removing the smallest value in the stack', () => {
    const stack = Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.pop();
    expect(stack.min()).toBe(2);
  });
});
