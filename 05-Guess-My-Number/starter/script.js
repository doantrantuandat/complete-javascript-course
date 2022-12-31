'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const setScoreAndHighScore = (score, highscore) => {
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;

const guessNumber = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (guess) {
    if (guess === secretNumber) {
      if (score > highscore) {
        highscore = score;
      }
      setScoreAndHighScore(score, highscore);
      displayMessage('🎉 Correct Number!');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    } else {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        score--;
        document.querySelector('.check').disabled = true;
        document.querySelector('.score').textContent = score;
      }
    }
  } else {
    displayMessage('⛔ No number!');
  }
};

const again = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', guessNumber);
document.querySelector('.again').addEventListener('click', again);
