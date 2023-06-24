const checklist = document.querySelector("#checklist");
export const listItems = checklist.children;
export function checkedAll() {
  for (let i = 0; i < listItems.length; i++) {
    const checkbox = listItems[i].children[0].children[0];
    // listItems[i].children[0] is the label whereas
    // listItems[i].children[0].children[0] is the checkbox
    if (!checkbox.checked) return false;
  }
  return true;
}
