import readlineSync from 'readline-sync';

const maxRound = 10;
let log = [];

//  проверяет, были или нет прошлые вопросы, которые хранятся в log
function check(func) {
  let [expression, answer] = func();
  expression = String(expression);
  if (!log.includes(expression)) {
    log.push(expression);
    return [expression, answer];
  } else {
    return check(func);
  }
}

export default function (mainQuestion, getExpressionAndRightAnswer) {
  //  Greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  // get the question
  console.log(mainQuestion);

  // start round of game
  for (let count = 1; count <= maxRound; count++) {
    const [expression, rightAnswer] = check(getExpressionAndRightAnswer);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // check answers
    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}`
      );
      return;
    };
  }

  console.log(`Congratulations, ${name} `);
}
