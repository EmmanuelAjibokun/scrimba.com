let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById('input-btn');

function leadSave() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
}

inputButton.addEventListener('click', leadSave)