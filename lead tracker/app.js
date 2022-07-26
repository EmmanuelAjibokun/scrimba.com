let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById('input-btn');
let ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  console.log(myLeads)
  render(myLeads)
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  myLeads = [];
  render(myLeads)
})

function leadSave() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  console.log(myLeads)
}

inputButton.addEventListener('click', leadSave)

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads}" target=_blank>
          ${leads[i]}
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