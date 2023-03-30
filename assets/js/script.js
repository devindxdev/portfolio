'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
    console.log(elem.classList);
}

// sidebar variables
const sidebar = document.querySelector("[profileBarData]");
const sidebarBtn = document.querySelector("[profileBarButton]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });