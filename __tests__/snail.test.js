import snail from '../src/snail';


const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
const expectMatrix1 =  [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
const expectMatrix2 =  [1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10];

const matrix3 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
];
const expectMatrix3 =  [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  20, 30, 40, 39, 38, 37, 36, 35,
  34, 33, 32, 31, 21, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 29, 28,
  27, 26, 25, 24, 23, 22
];

describe('test snail', () => {
  test('text empty matrix', () => {
    expect(snail([])).toEqual([]);
  });
  test('text short matrix', () => {
    expect(snail([[1]])).toEqual([1]);
  });
  test('text matrix1', () => {
    expect(snail(matrix1)).toEqual(expectMatrix1);
  });
  test('text matrix2', () => {
    expect(snail(matrix2)).toEqual(expectMatrix2);
  });
  test('text matrix3', () => {
    expect(snail(matrix3)).toEqual(expectMatrix3);
  });
});