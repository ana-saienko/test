// Меню бургер

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLink = document.querySelector('.header__menu-item');

if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('burger-active');
		menuBody.classList.toggle('burger-active');
	});
}

// Slider HERO

const swiper = new Swiper('.swiper', {
	// Optional parameters
	effect: "fade",
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	 },
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	 },
	 navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	 },
 });