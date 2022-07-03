export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function handleClick(event) {
    event.preventDefault();
    menuList.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
    menuButton.classList.toggle("visible");
    menuButton.classList.toggle("fullbutton");
  }

  function closeMenu(event) {
    if (event.target !== menuList && event.target !== menuButton) {
      menuList.classList.add("hidden");
      menuButton.classList.add("hidden");
      menuButton.classList.remove("visible");
      menuButton.classList.add("fullbutton");
    }
  }

  menuButton.addEventListener("click", handleClick);
  window.addEventListener("click", closeMenu);
}
