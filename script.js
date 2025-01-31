'use strict';

// document.querySelector(.className, #id, tag) - select CSS element and make it active
//eventTarget.addEventListner (event(ex.'click'), function) - add event  

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// set random number, between 1~20 (+1 for include 20) 
// Math.trunc - ignor decimal 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '  ⛔️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high! 👇';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low! ☝️';
  }
});

// set enter guess number event and type of enter number, add warning message for wrong format
// add messages for user 
