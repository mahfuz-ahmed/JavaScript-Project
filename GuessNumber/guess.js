// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.dv-number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 17;

//..............Guess My Number Start in Here................

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.dv-number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.dv-number').style.width = '200px';
    document.querySelector('.dv-number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //........Refactoring Code........
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.dv-number').textContent = secretNumber;
      document.querySelector('.dv-number').style.backgroundColor = '#FF0000';
    }
  }

  //.....Details Explain.....

  // else if (guess > secretNumber) {
  //     if (score > 1) {
  //         document.querySelector('.message').textContent = 'Too High';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else {
  //         document.querySelector('.message').textContent = 'You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('.dv-number').textContent = secretNumber;
  //         document.querySelector('.dv-number').style.backgroundColor = '#FF0000'
  //     }

  // }

  // else if (guess < secretNumber) {

  //     if (score > 1) {
  //         document.querySelector('.message').textContent = 'Too Low';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //     }
  //     else {
  //         document.querySelector('.message').textContent = 'You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //         document.querySelector('.dv-number').textContent = secretNumber;
  //         document.querySelector('.dv-number').style.backgroundColor = '#FF0000'
  //     }
  // }
});

document.querySelector('.btn-again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start Quessing...';

  document.querySelector('.dv-number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(97, 95, 94)';

  document.querySelector('.dv-number').style.backgroundColor =
    'rgb(255, 255, 255)';

  document.querySelector('.dv-number').style.width = '150px';
});
