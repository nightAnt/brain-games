import runGame from '../index.js';

function getRightAnswerOn(question) {
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';

  return rightAnswer;
}

function reuiestQuestion() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);

  return [randomNumber];
}

export function main() {
  runGame(reuiestQuestion, getRightAnswerOn);
}
