export const calcShipsCount = (field) => {
  let result = 0;

  if (!field.length) {
    return result;
  }
  
  for(let i = field.length - 1; i >= 0; i -= 1) {
    const line = field[i];

    for(let j = line.length - 1; j >= 0; j -= 1) {
      const cell = field[i][j];

      if (cell) {
        const nextOnRow = field[i][j - 1];
        const prevOnRow = field[i][j + 1];
        const nextOnLine = field[i - 1] && field[i - 1][j];
        const prevOnLine = field[i + 1] && field[i + 1][j];
        
        if (nextOnLine && !nextOnRow && !prevOnLine && !prevOnRow) {
          result += 1;
        } if (nextOnRow && !prevOnLine && !prevOnRow && !nextOnLine) {
          result += 1;
        } if (!nextOnRow && !nextOnLine && !prevOnRow && !prevOnLine) {
          result += 1;
        }
      }
    }
  }
  
  return result;
};

export const isValidField = (field) => {
  let result = true;

  if (!field.length) {
    return result;
  }
  
  for(let i = field.length - 1; i >= 0; i -= 1) {
    const line = field[i];

    for(let j = line.length - 1; j >= 0; j -= 1) {
      const cell = field[i][j];

      if (cell) {
        const diagonalLeftNextRow = field[i - 1] && field[i - 1][j - 1];
        const diagonalRightNextRow = field[i - 1] && field[i - 1][j + 1];
        const diagonalLeftPrevRow = field[i + 1] && field[i + 1][j - 1];
        const diagonalRightPrevRow = field[i + 1] && field[i + 1][j + 1];
        
        if (diagonalLeftNextRow || diagonalRightNextRow || diagonalLeftPrevRow || diagonalRightPrevRow) {
          result = false;
        }
      }
    }
  }
  
  return result;
};
