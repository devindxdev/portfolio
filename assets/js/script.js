'use strict';

const elementToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
}

const profileBar = document.querySelector("[profileBarData]");
const profileBarButton = document.querySelector("[profileBarButton]");

profileBarButton.addEventListener("click", function () { elementToggleFunc(profileBar); });

//Navigation
const navigationLinks = document.querySelectorAll("[navLinkData]");
const pages = document.querySelectorAll("[data-page]");
// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
        console.log(pages[i].dataset);
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });

}