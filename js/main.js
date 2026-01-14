document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navmenu = document.querySelector(".navmenu");

  hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");
  });
});
