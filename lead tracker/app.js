let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById('input-btn');
let ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTab = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  console.log(myLeads)
  render(myLeads)
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
saveTab.addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0]
    let activeTabId = activeTab.id // or do whatever you need
  })
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

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