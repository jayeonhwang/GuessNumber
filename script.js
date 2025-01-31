'use strict';

// document.querySelector(.className, #id, tag) - select CSS element and make it active
//eventTarget.addEventListner (event(ex.'click'), function) - add event  

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '  ⛔️ No number!';
  }
});

// set enter guess number event and type of enter number, add warning message for wrong format
