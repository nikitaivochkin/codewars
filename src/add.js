const add = (...n) => {
  const sum = n.reduce((acc, x) => x + acc, 0);
  const f = (...rest) => add(sum, ...rest);
  f.valueOf = () => sum;
  return f;
};

export default add;
