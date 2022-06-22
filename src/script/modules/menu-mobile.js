export default function menuMobile() {}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function handleClick(event) {
  event.preventDefault();
  menuList.classList.toggle("hidden");
  menuButton.classList.toggle("hidden");
  menuButton.classList.toggle("visible");
  if (menuButton.classList.contains("fullbutton")) {
    menuButton.classList.remove("fullbutton");
  } else {
    setTimeout(() => {
      menuButton.classList.add("fullbutton");
    }, 700);
  }
}

function closeMenu(event) {
  if (event.target !== menuList && event.target !== menuButton) {
    menuList.classList.add("hidden");
    menuButton.classList.add("hidden");
    menuButton.classList.remove("visible");

    setTimeout(() => {
      menuButton.classList.add("fullbutton");
    }, 700);
  }
}

menuButton.addEventListener("click", handleClick);
window.addEventListener("click", closeMenu);
