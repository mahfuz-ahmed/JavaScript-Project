'use strict';

const player0El = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1E2 = document.querySelector('#current--1');
const buttonReset = document.querySelector('.btn--new');

const diceE = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceE.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //ternary operator
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const rollDice = Math.trunc(Math.random() * 6) + 1;
    console.log(rollDice);

    diceE.classList.remove('hidden');
    diceE.src = `Images/dice-${rollDice}.png`;

    if (rollDice !== 1) {
      currentScore = currentScore + rollDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceE.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

buttonReset.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1E2.textContent = 0;

  player0El.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1E1.classList.remove('player--active');
});
