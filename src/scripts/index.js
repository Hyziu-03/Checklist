function getDate() {
    const today = new Date();
    const fullYear = today.getFullYear();
    const monthNumeral = today.getMonth() + 1;
    const month = monthNumeral < 10 ? "0" + monthNumeral : monthNumeral;
    const date = today.getDate();
    return `${date}-${month}-${fullYear}`;
}

const heading = document.querySelector("#heading");
heading.innerHTML = `Dzisiaj jest ${getDate()}`;

const checklist = document.querySelector("#checklist");
const listItems = checklist.children;

function checkedAll() {
    for (let i = 0; i < listItems.length; i++) {
      const checkbox = listItems[i].children[0];
      if(!checkbox.checked) return false;
    }
    return true;
}

const stateSymbol = document.querySelector("#state-symbol");

for (let i = 0; i < listItems.length; i++) {
    const checkbox = listItems[i].children[0];
    checkbox.addEventListener("change", function () {
      stateSymbol.src = checkedAll() ? 
      "images/checkmark.png" : "images/flame.png";
    });
}
