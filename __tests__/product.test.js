import product from '../src/product';

const sum = (n1, n2) => n1 + n2;
const multi = (n1, n2) => n1 * n2;
const pow = (n1, n2) => n1 ** n2;

describe('product test', () => {
  test('test empty', () => {
    expect(product(1, 1, sum)).toEqual(1);
  });
  test('test summ1', () => {
    expect(product(1, 5, sum)).toEqual(15);
  });
  test('test multi1', () => {
    expect(product(2, 4, multi)).toEqual(24);
  });
  test('test multi2', () => {
    expect(product(1, 3, multi)).toEqual(6);
  });
  test('test pow', () => {
    expect(product(2, 4, pow)).toEqual(4096);
  });
});