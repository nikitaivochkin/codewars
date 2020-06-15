const validatepassword = (password) => {
  if (password.length < 6 || typeof password !== 'string') {
    return false;
  }
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const hasNumbers = (pass) => pass.split('').some((el) => numbers.includes(el));
  const hasSpaces = (pass) => pass.split('').every((el) => el !== ' ');
  const isAlphanum = (pass) => /^[a-zA-Z0-9_]*$/.test(pass);
  return hasNumbers(password) && isAlphanum(password)
    && hasSpaces(password) && password !== password.toUpperCase()
    && password !== password.toLowerCase();
};

export default validatepassword;