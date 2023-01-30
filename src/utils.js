function getRandomNumbers(min, max, quantity) {
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

export { getRandomNumbers };
export { getRandomSymbol };
