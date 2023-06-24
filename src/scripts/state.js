"use strict";
import { getDate } from "./date.js";
import { listItems, checkedAll } from "./checklist.js";
const stateSymbol = document.querySelector("#state-symbol");
loadState();
setState();
saveState();
function setState() {
  try {
    const listItemsCount = listItems.length;
    for (let i = 0; i < listItemsCount; i++) {
      const checkbox = listItems[i].children[0];
      checkbox.addEventListener("change", function () {
        stateSymbol.src = checkedAll()
          ? "images/checkmark.webp"
          : "images/flame.webp";
      });
    }
  } catch (error) {
    throw new Error(error);
  }
}
function getCurrentState() {
  try {
    if (checkedAll()) {
      return "checked";
    } else {
      return "unchecked";
    }
  } catch (error) {
    throw new Error(error);
  }
}
function saveState() {
  try {
    window.addEventListener("beforeunload", function () {
      localStorage.setItem("checklist-state", getCurrentState());
      localStorage.setItem("checklist-date", getDate());
    });
  } catch (error) {
    throw new Error(error);
  }
}
function loadState() {
  try {
    const wereChecked = localStorage.getItem("checklist-state") === "checked";
    const doesMatchDate = localStorage.getItem("checklist-date") === getDate();
    if (wereChecked && doesMatchDate) {
      stateSymbol.src = "images/checkmark.webp";
      for (let i = 0; i < listItems.length; i++) {
        const checkbox = listItems[i].children[0].children[0];
        // listItems[i].children[0] is the label whereas
        // listItems[i].children[0].children[0] is the checkbox
        checkbox.checked = true;
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}
