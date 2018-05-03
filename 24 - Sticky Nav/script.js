const nav = document.getElementById('main');
const navTopPos = nav.offsetTop;

function scrollHandler(e) {
	const scrolled = window.scrollY;
	if (scrolled >= navTopPos) {
		document.body.style.paddingTop = `${nav.offsetHeight}px`
		nav.classList.add('scrolled');
	} else {
		document.body.style.paddingTop = 0;
		nav.classList.remove('scrolled');
	}
}

document.addEventListener('scroll', scrollHandler)