import runGame from '../index.js';
import { getArrayDivisors, getRandomNumbers } from '../utils.js';

function reuiestQuestion() {
  console.log('Find the greatest common divisor of given numbers.');
  const [number1, number2] = getRandomNumbers(1, 10, 2);

  console.log(`Question: ${number1} ${number2} `);

  return [number1, number2];
}

function getRightAnswerOn(question) {
  const [number1, number2] = question;
  const divisorsOfNumber1 = getArrayDivisors(number1);
  const divisorsOfNumber2 = getArrayDivisors(number2);
  const commonDivisorsNumbers = divisorsOfNumber1.filter(item => divisorsOfNumber2.includes(item));
  const greatestCommonDivisor = Math.max(...commonDivisorsNumbers);
  return greatestCommonDivisor;
}

export function main() {
  runGame(reuiestQuestion, getRightAnswerOn);
}
