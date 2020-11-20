let allParens = ['(', '{', '[', ')', '}', ']'];

const parensAreBalanced = (input) => {
  let parens = [];
  for(let i = 0; i < input.length; i++) {
    if (allParens.indexOf(input[i]) > -1) {
      parens.push(input[i]);
    }
  }
  if (parens.length % 2 !== 0) {
    return false;
  }
  // while(parens.length > 0) {
  //   if (parens[0] === '(' && parens[1] === ')') {
  //     parens.splice(0, 2);
  //   }
  
  // }
  return true;
}



// const str = '()))';
// const parensAreBalanced = str => {
//    let paren = [];
//    for (let i = 0; i < str.length; i++) {
//       if (str[i] === "(") {
//          paren.push(str[i]);
//       } else if (str[i] === ")") {
//          if (paren[paren.length - 1] === "("){
//             paren.pop();
//          }else {
//             paren.push("#");
//          };
//       };
//    }
//    return paren.length;
// }
// console.log(parensAreBalanced(str));

module.exports = parensAreBalanced
