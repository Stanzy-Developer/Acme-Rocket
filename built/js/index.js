const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const html = document.querySelector("html");
  const button = document.querySelector("#toggle");

  const toggleDarkMode = () => {
    button.checked ? html.classList.remove("dark") : html.classList.add("dark");
  };

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerBtn.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
  button.addEventListener("click", toggleDarkMode);
};

document.addEventListener("DOMContentLoaded", initApp);
