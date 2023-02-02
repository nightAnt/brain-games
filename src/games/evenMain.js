import runGame from '../index.js';
import { getRandomNumbers } from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  
function getNumberAndRightAnswer() {
  const randomNumber = getRandomNumbers(1, 100, 1);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  
  return [randomNumber, rightAnswer];
}

export function main() {
  runGame(question, getNumberAndRightAnswer);
}
