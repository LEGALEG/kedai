// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diclick
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klick diluar slidebarNav untuk menghilangkan Nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
