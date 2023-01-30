import readlineSync from 'readline-sync';

const maxRound = 3;

export default function (reuiestQuestion, getRightAnswerOn) {
  //Greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  //start round of game
  for (let count = 1; count <= maxRound; count++) {
    const question = reuiestQuestion();
    const rightAnswer = getRightAnswerOn(question);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${name} `);
}
