( function(){
  const navigation_list = document.querySelectorAll(".cv-menu__link");
  Array.from(navigation_list, current_menu => current_menu.addEventListener('click', (menu) => {
    console.log(menu);
    Array.from(navigation_list, current_menu =>current_menu.classList.remove("cv-menu__link_state_active"));
    const active_meny = menu.target.tagName === "A" ? menu.target : menu.target.offsetParent;
    active_meny.classList.add("cv-menu__link_state_active");
  }));
})();


(function myFunction(dom) {
  let button_mobile = document.querySelector(".cv-menu__hide");
  button_mobile.addEventListener('click', () => {
    button_mobile.classList.toggle("cv-menu__button_change");
    let page_navigation =  document.querySelector(".cv-page__navigation");
    let cv_page_entry = document.querySelector(".cv-page__entry");
    page_navigation.classList.toggle("hide-block");
    cv_page_entry.classList.toggle("full-size");

  });
})();
