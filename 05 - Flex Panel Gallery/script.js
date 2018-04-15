const panels = document.querySelector('.panels');
panels.addEventListener('click', clickHandler)

let currentTarget = null;

function clickHandler(e) {
	let target = e.target;

	while (!target.classList.contains('panel')) {
		if (target === this) return;
		target = target.parentNode;
	}

	if (currentTarget) {
		if (currentTarget === target) {
			target.classList.remove('open');
			currentTarget = null;
		} else {
			currentTarget.classList.remove('open');
			target.classList.add('open');
			currentTarget = target;
		}
	} else {
		target.classList.add('open');
		currentTarget = target;
	}
}