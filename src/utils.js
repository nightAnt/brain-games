function getRandomNumbers(min, max, quantity = 1) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(Math.floor(min + Math.random() * (max + 1 - min)));
  }

  return result;
}

function getRandomSymbol(symbols = ['+', '*', '-']) {
  const symbol = Math.floor(Math.random() * symbols.length);

  return symbols[symbol];
}

function getArrayDivisors(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
}

function getProgression(from, step, lengthProgression) {
  let result = [from];
  for(let i = 0; i <= lengthProgression; i++) {
    result.push(result[i] + step);
  };

  return result;
}

export { getRandomNumbers };
export { getRandomSymbol };
export { getArrayDivisors };
export { getProgression };
