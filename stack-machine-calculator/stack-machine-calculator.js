function calc(str) {
  let arr = str.split(" ");
  let stack = [];
  // for let x = 0; x < arr.lenght; x++ -> let i = arr[x]
  
  for (i of arr) {
    switch(i) {
      case "+": // ADD
        stack.push(stack.pop() + stack.pop());
        break;
      case "-": // SUB
        stack.push(stack.pop() - stack.pop());
        break;
      default:  // INT
        stack.push(parseInt(i));
        break;
    }
  }

  return stack
}

calc("5 5 3 - + DUP POP")

module.exports = stackMachineCalculator
