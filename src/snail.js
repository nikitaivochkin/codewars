import _ from 'lodash';

const getFirstElements = (matrix) => {
  const mappedElements = matrix.map(([first]) => first);
  return mappedElements.reverse().slice(1, mappedElements.length - 1);
};
const getLastElements = (matrix) => matrix.map((arr) => _.last(arr)).slice(1);
const getFirstArr = ([first]) => first;
const getLastArr = (matrix) => _.last(matrix).reverse().slice(1);

const getFiltredArr = (matrix) => matrix
  .slice(1, matrix.length - 1)
  .map((arr) => arr.filter((el, index) => index !== 0 && index !== arr.length - 1));

const getOutSiadeLvl = (matrix) => [
  ...getFirstArr(matrix),
  ...getLastElements(matrix),
  ...getLastArr(matrix),
  ...getFirstElements(matrix),
];

const snail = (matrix) => {
  if (matrix.length === 1) {
    return matrix[0];
  }
  
  const iter = (acc, inner) => {
    if (inner.length === 0) {
      return acc;
    }

    const insiadeLvl = [...acc, ...getOutSiadeLvl(inner)];
    return iter(insiadeLvl, getFiltredArr(inner));
  };

  return iter([], matrix);
};

export default snail;