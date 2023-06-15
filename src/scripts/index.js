/* date */

setDate();

function setDate() {
  const viewportWidth = window.innerWidth;
  const heading = document.querySelector("#heading");
  heading.innerHTML =
    viewportWidth < 768
      ? `Dzisiaj jest <br> ${getDate()}`
      : `Dzisiaj jest ${getDate()}`;
}

function getDate() {
  const today = new Date();
  const fullYear = today.getFullYear();
  const monthNumeral = today.getMonth() + 1;
  const month = monthNumeral < 10 ? "0" + monthNumeral : monthNumeral;
  const date = today.getDate();
  return `${date}-${month}-${fullYear}`;
}

/* checklist */

const checklist = document.querySelector("#checklist");
const listItems = checklist.children;

function checkedAll() {
  for (let i = 0; i < listItems.length; i++) {
    const checkbox = listItems[i].children[0];
    if (!checkbox.checked) return false;
  }
  return true;
}

/* state */

const stateSymbol = document.querySelector("#state-symbol");
loadState();
setState();
saveState();

function setState() {
  const listItemsCount = listItems.length;
  for (let i = 0; i < listItemsCount; i++) {
    const checkbox = listItems[i].children[0];
    checkbox.addEventListener("change", function () {
      stateSymbol.src = checkedAll()
        ? "images/checkmark.png"
        : "images/flame.png";
    });
  }
}

function getCurrentState() {
  if (checkedAll()) {
    return "checked";
  } else {
    return "unchecked";
  }
}

function saveState() {
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("checklist-state", getCurrentState());
    localStorage.setItem("checklist-date", getDate());
  });
}

function loadState() {
  const wereChecked = localStorage.getItem("checklist-state") === "checked";
  const doesMatchDate = localStorage.getItem("checklist-date") === getDate();

  if (wereChecked && doesMatchDate) {
    stateSymbol.src = "images/checkmark.png";
    for (let i = 0; i < listItems.length; i++) {
      const checkbox = listItems[i].children[0];
      checkbox.checked = true;
    }
  }
}

/* theme */

const theme = document.querySelector("#theme");
toggleTheme();

function toggleTheme() {
  theme.addEventListener("click", function () {
    document.body.className === "light" ? enableDarkMode() : enableLightMode();
  });
}

function enableDarkMode() {
  document.body.className = "dark";
  theme.innerHTML = "light_mode";
}

function enableLightMode() {
  document.body.className = "light";
  theme.innerHTML = "dark_mode";
}
