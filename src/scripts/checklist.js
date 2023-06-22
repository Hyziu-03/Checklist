const checklist = document.querySelector("#checklist");
export const listItems = checklist.children;
export function checkedAll() {
  for (let i = 0; i < listItems.length; i++) {
    const checkbox = listItems[i].children[0];
    if (!checkbox.checked) return false;
  }
  return true;
}
