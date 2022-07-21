let myLeads = ["manny", "www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById('input-btn');
let ulEl = document.getElementById("ul-el");

function leadSave() {
  myLeads.push(inputEl.value)
  return myLeads
}

inputButton.addEventListener('click', leadSave)

for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}