import runGame from '../index.js';

function getNumbers() {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  return [number1, number2];
}

function getSymbol() {
  const symbols = ['+', '*', '-'];
  const symbol = Math.floor(Math.random() * symbols.length);

  return symbols[symbol];
}

function reuiestQuestion() {
  console.log('What is the result of the expression?');
  const [number1, number2] = getNumbers();
  const symbol = getSymbol();

  console.log(`Question: ${number1} ${symbol} ${number2} `);

  return [number1, number2, symbol];
}

function getRightAnswerOn(question) {
  let rightAnswer = 0;
  const [number1, number2, symbol] = question;

  switch (symbol) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
  }

  return rightAnswer;
}

export function main() {
  runGame(reuiestQuestion, getRightAnswerOn);
}
