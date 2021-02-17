const objectBuilder = (initObj, initPath) => {
  const iter = (obj, path) => {
    if (!path.length) {
      return initObj;
    }

    const el = path[0];

    if (el.includes('=')) {
      const [key, value] = el.split('=');
      obj[key] = decodeURIComponent(value);
      return iter(obj[el], path.slice(1));
    } 
    if (Object.prototype.hasOwnProperty.call(obj, el)) {
      return iter(obj[el], path.slice(1));
    }

    obj[el] = {};
    return iter(obj[el], path.slice(1));
    
  };

  return iter(initObj, initPath);
};

const objectifyUrlQueryString = (query) => {
  if (!query.length) {
    return {};
  }

  const arrayWithPaths = query.split('&');
  return arrayWithPaths.reduce((acc, path) => objectBuilder(acc, path.split('.')), {});
};

export default objectifyUrlQueryString;
