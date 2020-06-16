import permutations from '../src/permutations';

describe('permutations test', () => {
  test('without args', () => {
    expect(permutations('')).toEqual(['']);
  });

  test('one letter', () => {
    expect(permutations('a')).toEqual(['a']);
  });

  test('4 letter by 2', () => {
    expect(permutations('aabb').sort()).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
  });

  test('3 letter by 1', () => {
    expect(permutations('abc').sort()).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort());
  });

  test('dublicate', () => {
    expect(permutations('aaa').sort()).toEqual(['aaa'].sort());
  });

  test('dublicate2', () => {
    expect(permutations('aaab').sort()).toEqual(['aaab', 'aaba', 'abaa', 'baaa'].sort());
  });
});