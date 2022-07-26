let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById('input-btn');
let ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage)

function leadSave() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
  console.log(myLeads)
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




// myLeads.push("google.com")
// localStorage.setItem("myLeads", JSON.stringify(myLeads))
// console.log(myLeads)
// myLeads = JSON.parse(localStorage.getItem("myLeads"))
// console.log(typeof myLeads)