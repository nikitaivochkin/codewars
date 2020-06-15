const validateSudocu = (data) => {
  const l = data.length;
  const isValidStructure = data.every((el) => el.length === l);
  if (!isValidStructure || !Number.isInteger(Math.sqrt(l))) {
    return false;
  }
  if (l === 1)  {
    if (typeof data[0][0] !== 'number') {
      return false;
    }
    if (data[0][0] < 1 || !Number.isInteger(data[0][0])) {
      return false;
    } return true;
  }
  const reducedHorisontal = data.reduce((acc, arr) => {
    const isValidLine = arr.reduce((lineAcc, n) => lineAcc.includes(n) || (!Number.isInteger(n) && n < 0) ? lineAcc : [...lineAcc, n], []);
    return [...acc, isValidLine];
  }, []); 
  const isValidLines = reducedHorisontal.every((el) => el.length === l);
  
  const reducedVertical = data.reduce((acc, arr, i) => {
    const checkVertical = data.reduce((cAcc, arr) => cAcc.includes(arr[i]) ? cAcc : [...cAcc, arr[i]], []);
     return [...acc, checkVertical];
  }, []);
  const isValidColumns = reducedVertical.every((el) => el.length === l);
  
  
  const reducedLittleSqueres = data.reduce((acc, arr, i) => {
    if (i <= Math.sqrt(l) - 1) {
      return [...acc, ...arr.slice(0, Math.sqrt(l))];
    }
    return acc.reduce((cAcc, el) => cAcc.includes(el) ? cAcc : [...cAcc, el], []);
  }, []);
  const isValidLittleSqueres = reducedLittleSqueres.length === l;

  
  return isValidLines && isValidColumns && isValidLittleSqueres;
};

export default validateSudocu;