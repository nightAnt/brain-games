import runGame from '../index.js';
import { getRandomNumbers, getRandomSymbol } from '../utils.js';

function reuiestQuestion() {
  console.log('What is the result of the expression?');
  const [number1, number2] = getRandomNumbers(0, 10, 2);
  const symbol = getRandomSymbol();

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
