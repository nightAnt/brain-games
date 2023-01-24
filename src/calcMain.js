import readlineSync from 'readline-sync';

let name = 'anonim';

function getGreeting() {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}`);
}

function reuiestQuestion() {
    console.log('What is the result of the expression?');
    let question = readlineSync.question('Question: ');

    return question;
}

function getNumbers(question) {
    let numbers = question.match(/\d+/g);

    return numbers;
}

function getChar(question) {
    let char = question.match(/[+*-]/);

    return char[0];
}

export default function() {
    let answer = 0;

    getGreeting();
    let question = reuiestQuestion();
    let char = getChar(question);
    let numbers = getNumbers(question);
    let number1 = +numbers[0];
    let number2 = +numbers[1];
    switch(char) {
        case '+':
            answer = number1 + number2; 
            break;
        case '-':
            answer = number1 - number2; 
            break;
        case '*':
            answer = number1 * number2; 
            break;
    };

    console.log(`Your answer: ${answer}`);
}