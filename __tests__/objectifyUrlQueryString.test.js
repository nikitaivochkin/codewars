import objectifyUrlQueryString from '../src/objectifyUrlQueryString';

const nestedStr1 = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';
const nestedStr2 = 'user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie';

const str1 = 'a=1&b=2';
const str2 = 'a=1%202';
const str3 = 'a=a%26b%3Dc%3F';

const nestedObj1 = {
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};
const nestedObj2 = { 
  user: {
    '1': { name: 'Alice' },
    '2': { name: 'Bob' },
    '3': { name: 'Charles' },
    '4': { name: 'Debbie' }
  }
};

const obj1 = { a: '1', b: '2' };
const obj2 = { a: '1 2' };
const obj3 = { a: 'a&b=c?' };

describe('objectifyUrlQueryString test', () => {
  test('test empty query string', () => {
    expect(objectifyUrlQueryString('')).toEqual({});
  });

  test('simple test1', () => {
    expect(objectifyUrlQueryString(str1)).toEqual(obj1);
  });

  test('simple test2', () => {
    expect(objectifyUrlQueryString(str2)).toEqual(obj2);
  });

  test('simple test3', () => {
    expect(objectifyUrlQueryString(str3)).toEqual(obj3);
  });

  test('nested test1', () => {
    expect(objectifyUrlQueryString(nestedStr1)).toEqual(nestedObj1);
  });

  test('nested test2', () => {
    expect(objectifyUrlQueryString(nestedStr2)).toEqual(nestedObj2);
  });
});