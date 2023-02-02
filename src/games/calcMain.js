import runGame from '../index.js';
import { getRandomNumbers, getRandomSymbol } from '../utils.js';

const mainQuestion = 'What is the result of the expression?';

function getExpressionAndRightAnswer() {
  const [number1, number2] = getRandomNumbers(1, 10, 2);
  const symbol = getRandomSymbol();
  let rightAnswer = 0;

  const expression = `${number1} ${symbol} ${number2}`;

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

  return [expression, rightAnswer];
}

export function main() {
  runGame(mainQuestion, getExpressionAndRightAnswer);
}
