import runGame from '../index.js';
import { getArrayDivisors, getRandomNumbers } from '../utils.js';

const mainQuestion = 'Find the greatest common divisor of given numbers.';
  
function getExpressionAndRightAnswer() {

  const [number1, number2] = getRandomNumbers(1, 10, 2);
  const expression = `${number1} ${number2}`;
  
  const divisorsOfNumber1 = getArrayDivisors(number1);
  const divisorsOfNumber2 = getArrayDivisors(number2);
  const commonDivisorsNumbers = divisorsOfNumber1.filter(item => divisorsOfNumber2.includes(item));
  const rightAnswer = Math.max(...commonDivisorsNumbers);


  return [expression, rightAnswer];
}

export function main() {
  runGame(mainQuestion, getExpressionAndRightAnswer);
}
