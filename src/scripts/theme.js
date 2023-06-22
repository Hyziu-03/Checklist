const theme = document.querySelector("#theme");

toggleTheme();
loadTheme();
saveTheme();

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

function getCurrentTheme() {
  return document.body.className;
}

function saveTheme() {
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("theme", getCurrentTheme());
  });
}

function loadTheme() {
  const theme = localStorage.getItem("theme");
  theme === "dark" ? enableDarkMode() : enableLightMode();
}
