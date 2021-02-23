import { isValidField, calcShipsCount } from '../src/seaWars';

const validField1 = [
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
];

const validField2 = [
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
];

const validField3 = [
  [1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 1],
];

const invalidField1 = [
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
];

const invalidField2 = [
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
];

// describe('isValidField test', () => {
//   test('test valid field 1', () => {
//     expect(isValidField(validField1)).toBeTruthy();
//   });
//   test('test valid field 2', () => {
//     expect(isValidField(validField2)).toBeTruthy();
//   });
//   test('test invalid field 1', () => {
//     expect(isValidField(invalidField1)).toBeFalsy();
//   });
//   test('test invalid field 2', () => {
//     expect(isValidField(invalidField2)).toBeFalsy();
//   });
// });

describe('calcShipsCount test', () => {
  test('test valid field 1', () => {
    expect(calcShipsCount(validField1)).toBe(3);
  });
  test('test valid field 2', () => {
    expect(calcShipsCount(validField2)).toBe(6);
  });
  test('test valid field 3', () => {
    expect(calcShipsCount(validField3)).toBe(7);
  });
});

