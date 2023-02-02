import runGame from '../index.js';
import { getRandomNumbers, getArrayDivisors } from '../utils.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getExpressionAndRightAnswer() {
  const expression = getRandomNumbers(1, 10, 1);
  const rightAnswer = getArrayDivisors(expression).length <= 2 ? 'yes' : 'no';

  return [expression, rightAnswer];
}

export function main() {
  runGame(mainQuestion, getExpressionAndRightAnswer);
}
