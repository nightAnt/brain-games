import runGame from '../index.js';
import { getRandomNumbers, getProgression } from '../utils.js';

const mainQuestion = 'What number is missing in the progression?';

function getExpressionAndRightAnswer() {
  const [from, step, lengthProgression] = getRandomNumbers(1, 10, 3);
  const numberSpace = getRandomNumbers(0, lengthProgression);
  let progression = getProgression(from, step, lengthProgression);
  const rightAnswer = progression[numberSpace];

  progression.splice(numberSpace, 1, '...');
  const expression = progression.join(' ');

  return [expression, rightAnswer];
}

export function main() {
  runGame(mainQuestion, getExpressionAndRightAnswer);
}
