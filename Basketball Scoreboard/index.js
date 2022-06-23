const resetButton = document.querySelector('.reset-button');
const addButton = document.querySelectorAll('.buttons');
let homeScore = document.querySelector('.home-score').textContent;
let guestScore = document.querySelector('.guest-score').textContent;

function updateHomeScore(score) {
  document.querySelector('.home-score').textContent = score;
}

function updateGuestScore(score) {
  document.querySelector('.guest-score').textContent = score;
}

function addToHome(e) {
  homeScore = parseInt(homeScore);
  homeScore = homeScore + parseInt(e.target.value);
  updateHomeScore(homeScore)
}

function addToGuest(e) {
  guestScore = parseInt(guestScore);
  guestScore = guestScore + parseInt(e.target.value);
  updateGuestScore(guestScore)
}

function addToScore(e) {
  if(e.target.matches('.home-plus')) {
    addToHome(e)
  } else if(e.target.matches('.guest-plus')) {
    addToGuest(e)
  }
}

addButton.forEach(button => {
  button.addEventListener('click', addToScore)
})

resetButton.addEventListener('click', () => {
  document.querySelector('.home-score').textContent = 0;
  document.querySelector('.guest-score').textContent = 0;
  homeScore = 0;
  guestScore = 0;
})