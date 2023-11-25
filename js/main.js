const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const footerYear = document.querySelector('.footer__year');
const footer = document.querySelector('.footer');
const body = document.querySelector('body');
const navLi = document.querySelectorAll('.nav__link-mob');

const handleBurger = () => {
	navMobile.classList.toggle('nav-mobile--active');
	burgerBtn.classList.toggle('is-active');
	if (navMobile.classList.contains('nav-mobile--active')) {
		footer.style.display = 'none';
		body.style.overflow = 'hidden';
	} else {
		footer.style.display = 'block';
		body.style.overflow = 'scroll';
	}
};
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleNavLinks = () => {
	navMobile.classList.remove('nav-mobile--active');
	body.style.overflow = 'scroll';
    burgerBtn.classList.remove('is-active');
};

handleCurrentYear();
burgerBtn.addEventListener('click', handleBurger);

navLi.forEach((link) => {
	link.addEventListener('click', handleNavLinks);
});
