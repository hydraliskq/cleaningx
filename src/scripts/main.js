import "../styles/main.scss";
import burgerMenu from "./modules/burgerMenu";
import dynamicAdaptive from "./modules/dynamicAdaptive";

window.addEventListener("DOMContentLoaded", () => {
  dynamicAdaptive(".header__cart", ".menu__list", 500);
  burgerMenu();
});
