import readlineSync from 'readline-sync';
import runGame from '../index.js';

function getNumbers() {
    let number1 = Math.floor((Math.random() * 100)); 
    let number2 = Math.floor((Math.random() * 100));

    return [number1, number2];
}

function getSymbol() {
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

function getRightAnswerOn(question) {
    let rightAnswer = 0;
    let [number1, number2, symbol] = question;

    switch(symbol) {
        case '+':
            rightAnswer = number1 + number2; 
            break;
        case '-':
            rightAnswer = number1 - number2; 
            break;
        case '*':
            rightAnswer = number1 * number2; 
            break;
    };

    return rightAnswer;
}


export function main() {
    runGame(reuiestQuestion, getRightAnswerOn);
}