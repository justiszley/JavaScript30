const controls = document.querySelector('.controls')

controls.addEventListener('change', changeHandler)
document.querySelectorAll('.controls input')
	.forEach(input => input.addEventListener('mousemove', changeHandler))

function changeHandler(e) {
	const value = e.target.value;
	const sizing = e.target.dataset.sizing || '';
	const name = e.target.name;

	document.documentElement.style.setProperty(`--${name}`, `${value}${sizing}`);
}