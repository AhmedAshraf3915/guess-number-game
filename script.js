'use strict';

/ Selecting Elements /

const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body')

score.textContent = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highestScore = 0;

/ Game Logic /;

checkBtn.addEventListener('click', function () {
    let guess = Number(guessInput.value);
    if (!guess) {
        message.textContent = '⛔ No Number';
    }
    else if (guess === secretNumber) {
        message.textContent = '🥳 Correct Number';
        number.textContent = secretNumber;
        highScore.textContent = score.textContent;
        body.style.backgroundColor = 'green'
        number.style.width = '30rem'
        if (score.textContent > highestScore) {
            highestScore = score.textContent
            highScore.textContent = highestScore
        }
    }
    else if (guess !== secretNumber) {
        score.textContent--;
        if (score.textContent > 0) {
            message.textContent = guess > secretNumber ? 'Too High' : 'Too Low';
        }
        else {
            message.textContent = '💣 You Lost The Game '
        }
    }
});

/Reset the App/

againBtn.addEventListener('click', function () {
    message.textContent = 'Start guessing...'
    score.textContent = 20
    number.style.width = '15rem'
    guessInput.value = null
    body.style.backgroundColor = '#222'
    number.textContent = '?'
    secretNumber = Math.trunc(Math.random() * 20 + 1);
})


