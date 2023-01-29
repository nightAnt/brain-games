import readlineSync from 'readline-sync';
import runGame from '../index.js';

function getRightAnswerOn(question) {
    let rightAnswer = (question % 2 === 0) ? 'yes': 'no';
    
    return rightAnswer;
}

function reuiestQuestion() {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    
    return [randomNumber];
}

export function main() {
    runGame(reuiestQuestion, getRightAnswerOn);
}