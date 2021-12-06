// Stack Class
const Stack = () => {
  const stack = [];
  const min = [];

  // add an item to the top of the stack
  this.push = (value) => {
    stack.push(value);
    if (min.length === 0 || value < min[min.length - 1]) {
      min.push(value);
    }
  };

  // remove an item from the top of the stack
  this.pop = () => {
    const lastItem = stack[stack.length - 1];
    const minValue = min[min.length - 1];

    stack.splice(stack.length - 1, 1);

    if (lastItem === minValue) {
      min.splice(min.length - 1, 1);
    }

    return lastItem;
  };

  // return the number of items in the stack
  this.size = () => stack.length;

  // return the minimum value in the stack
  this.min = () => min[min.length - 1];

  return this;
};

module.exports = Stack;
