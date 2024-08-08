const burgerMenu = () => {
  const menuButton = document.querySelector(".menu__icon"),
    html = document.querySelector("html");

  menuButton.addEventListener("click", () => {
    html.classList.toggle("menu-open");
    html.classList.toggle("lock");
  });
};

export default burgerMenu;
