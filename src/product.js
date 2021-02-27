// recursion process
const product = (num1, num2, func) => {
  if (num1 === num2) {
    return num1;
  }

  return func(product(num1, num2 - 1, func), num2)
};

export default product;

// iteration process
// const product = (num1, num2, func) => {
//   const iter = (n1, n2, acc, f) => {
//     console.log(n1, n2, acc)
//     if (n2 === n1) {
//       return acc;
//     }
    
//     return iter(n1 + 1, n2, f(acc, n1 + 1), f);
//   };
  
//   return iter(num1 + 1, num2, func(num1, num1 + 1), func);
// };