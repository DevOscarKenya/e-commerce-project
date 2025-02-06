//  copy menu for mobile 

function copyMenu () {

    // copy inside  dpt-cat to departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy nav inside to nav

    var mainNav = document.querySelector('.header-nav nav');
    var topPlace = document.querySelector('.off-canvas nav');
    topPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper top thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show menu for mobile
const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');

menuButton.addEventListener('click', function func1() {
    addClass.classList.toggle('showmenu'); 
})
closeButton.addEventListener('click', function func2() {
    addClass.classList.remove('showmenu');
})

// show sub menu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();

    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);

    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');

}

var swiper = new Swiper(".mySwiper-main", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

// show search in mobile view

const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');

searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
});
tClose.addEventListener('click', function() {
showClass.classList.remove('showsearch')
})
// const subMenu = document.querySelectorAll('.has-child .icon-small');

// // Add click event listener to each submenu icon
// subMenu.forEach((menu) => menu.addEventListener('click', toggle));

// function toggle(e) {
//     e.preventDefault(); // Prevent the default link behavior

//     // Close all other submenus
//     subMenu.forEach((item) => {
//         if (item !== e.currentTarget) {
//             item.closest('.has-child').classList.remove('expand');
//         }
//     });

//     // Toggle the current submenu
//     const parent = e.currentTarget.closest('.has-child');
//     parent.classList.toggle('expand');
// }

