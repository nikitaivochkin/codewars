import validatePass from '../src/validatePass';

const validPass1 = 'dUoa8tGO';
const validPass2 = '637UUj';
const validPass3 = 'uedjnfhIadk1';

const invalidPass1 = 'da1Ud';
const invalidPass2 = '7dsmdnfhha';
const invalidPass3 = 'UjdndkaJdbdA';
const invalidPass4 = '7JDNSAHDSK21';
const invalidPass5 = 'uedjnf  hIadk1';
const invalidPass6 = 1234567;
const invalidPass7 = 'uedjnfhвIadk1';

describe('validate password tests', () => {
  test('test validPass1', () => {
    expect(validatePass(validPass1)).toBeTruthy();
  });
  test('test validPass2', () => {
    expect(validatePass(validPass2)).toBeTruthy();
  });
  test('test validPass3', () => {
    expect(validatePass(validPass3)).toBeTruthy();
  });

  test('test invalidPass1 (less 6 symbols)', () => {
    expect(validatePass(invalidPass1)).toBeFalsy();
  });
  test('test invalidPass2 (without upperCase)', () => {
    expect(validatePass(invalidPass2)).toBeFalsy();
  });
  test('test invalidPass3 (without numbers)', () => {
    expect(validatePass(invalidPass3)).toBeFalsy();
  });
  test('test invalidPass4 (without lowerCase)', () => {
    expect(validatePass(invalidPass4)).toBeFalsy();
  });
  test('test invalidPass5 (with spaces)', () => {
    expect(validatePass(invalidPass5)).toBeFalsy();
  });
  test('test invalidPass6 (not string)', () => {
    expect(validatePass(invalidPass6)).toBeFalsy();
  });
  test('test invalidPass7 (not alphanumeric)', () => {
    expect(validatePass(invalidPass7)).toBeFalsy();
  });
  test('test empty', () => {
    expect(validatePass('')).toBeFalsy();
  });
});