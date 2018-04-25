const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 10;
console.log(text)

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetY: y, offsetX: x } = e;

	if (e.target !== this) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / width * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255, 112, 112, .6),
		${-xWalk}px ${-yWalk}px 0 rgba(63, 230, 122, .6)
	`
}

hero.addEventListener('mousemove', shadow)