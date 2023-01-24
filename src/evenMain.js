import readlineSync from 'readline-sync';

let name = 'anonim';

function getGreeting() {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function checkAnswer(answerUser, randomNumber) {
    let rightAnswer = (randomNumber % 2 === 0) ? 'yes': 'no';
    return (answerUser === rightAnswer) ? true : false;
}

function messageRightAnswer() {
    console.log('Correct!');
}

function messageWrongAnswer() {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!");
}

function messageWin() {
    console.log(`Congratulations, ${name} `);
}

function reuiestAnswer() {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    let answer = readlineSync.question('Your answer: ');
    
    return [answer, randomNumber];
}

export function turnUpGameEven() {
    let count = 0;

    getGreeting();

    while(count < 3) {
        let [answer, randomNumber] = reuiestAnswer();

        if (checkAnswer(answer, randomNumber)) {
            count++;
            messageRightAnswer();
        } else {
            messageWrongAnswer()
            break;
        };
    };

    if (count === 3) messageWin();
}
