"use strict";
const theme = document.querySelector("#theme");
toggleTheme();
loadTheme();
saveTheme();
function toggleTheme() {
  try {
    theme.addEventListener("click", function () {
      document.body.className === "light"
        ? enableDarkMode()
        : enableLightMode();
    });
  } catch (error) {
    throw new Error(error);
  }
}
function enableDarkMode() {
  try {
    document.body.className = "dark";
    theme.innerHTML = "light_mode";
  } catch (error) {
    throw new Error(error);
  }
}
function enableLightMode() {
  try {
    document.body.className = "light";
    theme.innerHTML = "dark_mode";
  } catch (error) {
    throw new Error(error);
  }
}
function getCurrentTheme() {
  try {
    return document.body.className;
  } catch (error) {
    throw new Error(error);
  }
}
function saveTheme() {
  try {
    window.addEventListener("beforeunload", function () {
      localStorage.setItem("theme", getCurrentTheme());
    });
  } catch (error) {
    throw new Error(error);
  }
}
function loadTheme() {
  try {
    const theme = localStorage.getItem("theme");
    theme === "dark" ? enableDarkMode() : enableLightMode();
  } catch (error) {
    throw new Error(error);
  }
}
