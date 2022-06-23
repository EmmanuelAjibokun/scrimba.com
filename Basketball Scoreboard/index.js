// const homePlus1 = document.querySelector('.home-plus1');
// const homePlus2 = document.querySelector('.home-plus2');
// const homePlus3 = document.querySelector('.home-plus3');
const addButton = document.querySelectorAll('.buttons');
let homeScore = document.querySelector('.home-score').textContent;

// const guestPlus1 = document.querySelector('.guest-plus1');
// const guestPlus2 = document.querySelector('.guest-plus2');
// const guestPlus3 = document.querySelector('.guest-plus3');
let guestScore = document.querySelector('.guest-score').textContent;

function updateHomeScore(score) {
  document.querySelector('.home-score').textContent = score;
}

function updateGuestScore(score) {
  document.querySelector('.guest-score').textContent = score;
}

function add1ToHome() {
  homeScore = parseInt(homeScore)
  homeScore = homeScore + 1;
  updateHomeScore(homeScore)
}

function add1ToGuest() {
  guestScore = parseInt(guestScore)
  guestScore = guestScore + 1;
  updateGuestScore(guestScore)
}

function addToScore(e) {
  if(e.target.matches('.home-plus1')) {
    add1ToHome()
    console.log('manny')
  } else if(e.target.matches('.guest-plus1')) {
    add1ToGuest()
  }
}

// homePlus1.addEventListener('click', e => {
//   if(e.target.matches('.home-plus1')) {
//     console.log('manny')
//   }
// });
// guestPlus1.addEventListener('click', add1ToGuest);

addButton.forEach(button => {
  button.addEventListener('click', addToScore)
})