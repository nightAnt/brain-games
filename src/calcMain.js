import readlineSync from 'readline-sync';

let name = 'anonim';

function getGreeting() {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}`);
}

function getNumbers() {
    let number1 = Math.floor((Math.random() * 100)); 
    let number2 = Math.floor((Math.random() * 100));

    return [number1, number2];
}

function getSymbol(question) {
    let symbols = ['+', '*', '-'];
    let symbol = Math.floor((Math.random() * symbols.length)); 
    
    return symbols[symbol];
}

function reuiestQuestion() {
    console.log('What is the result of the expression?');
    let [number1, number2] = getNumbers();
    let symbol = getSymbol();
    
    console.log(`Question: ${number1} ${symbol} ${number2} `);

    return [number1, number2, symbol];
}

function getRightAnswer(number1, number2, symbol) {
    let answer = 0;
    switch(symbol) {
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

    return answer;
}

function check(answer, rightAnswer) {
    if (answer == rightAnswer){
        console.log('Correct!');
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    };
}

export default function() {
    let result = '';
    getGreeting();
    let [number1, number2, symbol] = reuiestQuestion();
    let userAnswer = readlineSync.question('Your answer: ');
    let rightAnswer = getRightAnswer(number1, number2, symbol);
    check(userAnswer, rightAnswer);
}