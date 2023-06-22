setDate();
function setDate() {
  const viewportWidth = window.innerWidth;
  const heading = document.querySelector("#heading");
  heading.innerHTML =
    viewportWidth < 768
      ? `Dzisiaj jest <br> ${getDate()}`
      : `Dzisiaj jest ${getDate()}`;
}
export function getDate() {
  const today = new Date();
  const fullYear = today.getFullYear();
  const monthNumeral = today.getMonth() + 1;
  const month = monthNumeral < 10 ? "0" + monthNumeral : monthNumeral;
  const date = today.getDate();
  return `${date}-${month}-${fullYear}`;
}
