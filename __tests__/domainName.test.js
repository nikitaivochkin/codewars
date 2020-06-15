import domainName from '../src/domainName';

const url1 = "http://github.com/carbonfive/raygun";
const url2 = "http://www.zombie-bites.com";
const url3 = "https://www.cnet.com";

describe('domainName test', () => {
  test('test url1', () => {
    expect(domainName(url1)).toBe('github');
  });
  test('test url2', () => {
    expect(domainName(url2)).toBe('zombie-bites');
  });
  test('test url3', () => {
    expect(domainName(url3)).toBe('cnet');
  });
  test('test empty str', () => {
    expect(domainName('')).toBeNull();
  });
});