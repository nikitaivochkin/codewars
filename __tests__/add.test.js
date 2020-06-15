import add from '../src/add';

describe('test add func', () => {
  test('one call', () => {
    expect(add(1) + 0).toBe(1);
  });
  test('three calls', () => {
    expect(add(1)(2)(3) + 0).toBe(6);
  });
  test('without arguments', () => {
    expect(add() + 0).toBe(0);
  });
});