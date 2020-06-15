const domainName = (url) => {
  if (!url.length) {
    return null;
  }
  const [, withoutProtocol] = url.split('//');
  const [withoutWWW] = withoutProtocol.split('.').filter((str) => !str.includes('www'));
  return withoutWWW;
};

export default domainName;
