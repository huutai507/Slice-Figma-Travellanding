const colors = document.querySelectorAll(".header__menu-link");
colors.forEach((item) => item.addEventListener("click", changeColor));

function changeColor() {
  colors.forEach((item) => item.classList.remove("change-color"));
  this.classList.add("change-color");
}
