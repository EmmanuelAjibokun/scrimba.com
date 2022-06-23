const plus1 = document.querySelectorAll('.plus1');
const plus2 = document.querySelectorAll('.plus2');
const plus3 = document.querySelectorAll('.plus3');
let homeScore = document.querySelector('.home-score').textContent;
let guestScore = document.querySelector('.guest-score').textContent;

function updateHomeScore(homeScore) {
  document.querySelector('.home-score').textContent = homeScore;
}

function updateGuestScore(score) {
  document.querySelector('.home-guest').textContent = score;
  console.log(score)
}

function add1() {
  homeScore = parseInt(homeScore)
  homeScore = homeScore + 1;
  updateHomeScore(homeScore)
  console.log(homeScore)
}


plus1.forEach(button => {
  button.addEventListener('click', add1)
})