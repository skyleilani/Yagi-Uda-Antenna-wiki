const hamburger = document.querySelector(".hamburger");
const nav_drop = document.querySelector(".nav-drop");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");

  hamburger.classList.toggle === "is-active"
    ? console.log("active")
    : console.log("not ative");
  nav_drop.classList.toggle("is-open");

  console.log("click");
});
