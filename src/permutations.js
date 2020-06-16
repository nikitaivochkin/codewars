const factorial = (n) => {
  const iter = (acc, counter) => counter === 0 ? acc : iter(counter * acc, counter - 1);
  return iter(1, n);
};

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const permutations = (string) => {
  if (!string.length) {
    return [''];
  } if (string.length === 1 || string.split('').every((el) => el === string[0])) {
    return [string];
  }
  const repeated = {};
  const numbersOfPermutations = (n) => 
    factorial(n)/(Object.values(repeated).reduce((acc, el) => factorial(el) * acc, 1));
  const n = string.length;
  const r = string.split('').reduce((acc, el) => {
    if (acc.includes(el)) {
      repeated[el] += 1;
      return acc;
    } 
    repeated[el] = 1;
    return [...acc, el];
  }, []).length;
  const p = n === r ? factorial(n) : numbersOfPermutations(n);

  let acc = [];
  for (let i = 0; i < p; i += 1) {
    const getRandonStr = () => shuffle(string.split('').map((index) => index)).join('');
    const addNewStr = (random) => acc.includes(random) ? addNewStr(getRandonStr()) : [...acc, random];
    acc = addNewStr(getRandonStr());
  }
  return acc;
};

export default permutations;