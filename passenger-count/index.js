let saveEl = document.getElementById('save-el');
let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saved = count + ' - ';
    saveEl.textContent += saved;
    countEl.textContent = 0;
    count = 0;
}