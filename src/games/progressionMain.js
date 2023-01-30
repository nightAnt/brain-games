import runGame from '../index.js';
import { getRandomNumbers, getProgression } from '../utils.js';

function reuiestQuestion() {
  console.log('What number is missing in the progression?');

  const [from, step, lengthProgression] = getRandomNumbers(1, 10, 3);
  const numberSpace = getRandomNumbers(0, lengthProgression);
  let progression = getProgression(from, step, lengthProgression);
  const rightAnswer = progression[numberSpace];

  progression.splice(numberSpace, 1, '...');
  console.log(`Question: ${progression.join(' ')} `);

  return rightAnswer;
}

function getRightAnswerOn(question) {
  return question; // ¯\_ (ツ)_/¯
}

export function main() {
  runGame(reuiestQuestion, getRightAnswerOn);
}
