'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const setScoreAndHighScore = (score, highscore) => {
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
};

let score = 20;
let highscore = 0;

const guessNumber = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (guess) {
    if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
      }
    } else {
      if (score > highscore) {
        highscore = score;
      }
      setScoreAndHighScore(score, highscore);
      document.querySelector('.message').textContent = '🎉 Correct Number!';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  } else {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
};

const again = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', guessNumber);
document.querySelector('.again').addEventListener('click', again);
