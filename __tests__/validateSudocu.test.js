import validateSudocu from '../src/validateSudocu';

const validSudocu1 = [
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
];

const validSudocu2 = [
  [1,4, 2,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
];

const invalidSudocu1 = [
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9]
];

const invalidSudocu2 = [
  [1,2,3,4,5],
  [1,2,3,4],
  [1,2,3,4],  
  [1]
];

describe('validate sudocu tests', () => {
  test('should valid 9x9', () => {
    expect(validateSudocu(validSudocu1)).toBeTruthy();
  })
  test('should valid 4x4', () => {
    expect(validateSudocu(validSudocu2)).toBeTruthy();
  })
  test('should invalid (repited numbers)', () => {
    expect(validateSudocu(invalidSudocu1)).toBeFalsy();
  })
  test('should invalid (wrong structure)', () => {
    expect(validateSudocu(invalidSudocu2)).toBeFalsy();
  })
  test('should invalid (1x1 wrong value)', () => {
    expect(validateSudocu([ [ '' ] ])).toBeFalsy();
  })
});