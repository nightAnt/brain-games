import runGame from '../index.js';
import { getRandomNumbers, getArrayDivisors } from '../utils.js';

function getQuestionAndRightAnswer() {
    const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    
    const randomNumber = getRandomNumbers(1, 100, 1);
    console.log(`Question: ${randomNumber}`);
    
    const rightAnswer = (getArrayDivisors(randomNumber).length === 2) ? 'yes' : 'no';

    return [question, rightAnswer];
}

export function main() {
    runGame(getQuestionAndRightAnswer);
  }
  