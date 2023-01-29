import readlineSync from 'readline-sync';

function getGreeting() {
    console.log('Welcome to the Brain Games!');
    let name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}`);
    return name;
}


export default function(reuiestQuestion, getRightAnswerOn) {
    let count = 0;
    let name = getGreeting();

    for (; count < 3; count++) {    
        let question = reuiestQuestion();
        let rightAnswer = getRightAnswerOn(question);
        let userAnswer = readlineSync.question('Your answer: ');
        
        if (userAnswer == rightAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}`);
            return;
        };
    };

    console.log(`Congratulations, ${name} `);
}