let myLeads = ["examplesLeads.com"];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById('input-btn');
let ulEl = document.getElementById("ul-el");

myLeads.push("google.com")
localStorage.setItem("myLeads", JSON.stringify(myLeads))
console.log(myLeads)
myLeads = JSON.parse(localStorage.getItem("myLeads"))
console.log(typeof myLeads)

function leadSave() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  renderLeads()
}

inputButton.addEventListener('click', leadSave)

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a href="${myLeads}" target=_blank>
          ${myLeads[i]}
        </a>
      </li>
    `;
  }
  
  ulEl.innerHTML = listItems;
}
