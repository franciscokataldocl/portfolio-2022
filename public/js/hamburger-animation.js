// Animate Hamburger

(function () {
  "use strict";

  const toggles = document.querySelectorAll(".c-hamburger");
  const menu = document.querySelector('.c-hamburger')
  const logoBg = document.querySelector('.col-logo')
  const menuitems = document.querySelectorAll(".menu-item");

  const menuItems = Array.from(menuitems);

  menuItems.map(item => {
    item.addEventListener("click", function (e) {
      listMenu.classList.remove("show-menu");
      logoBg.classList.remove("menu-open");
      menu.classList.remove("is-active");
     })
})



  const listMenu = document.getElementsByClassName(
    "MenuItems__ListMenu-sc-3s0igu-0"
  )[0];

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      logoBg.classList.toggle("menu-open");
      listMenu.classList.toggle('show-menu');

      this.classList.contains("is-active") === true
        ? this.classList.remove("is-active")
        : this.classList.add("is-active");
    });
  }
})();
