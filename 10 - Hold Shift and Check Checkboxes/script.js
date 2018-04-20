const inbox = document.querySelector('.inbox');
const checkboxes = [...inbox.querySelectorAll('[type="checkbox"]')]

let prevCheckedIndex = undefined;

inbox.onmousedown = function() {
	return false;
}

inbox.onclick = function(e) {
	const target = e.target;
	const targetIndex = checkboxes.indexOf(e.target);

	if (prevCheckedIndex + 1 && e.shiftKey) {
		console.log(target.checked)
		clickCheckboxes(prevCheckedIndex, targetIndex);
	}

	prevCheckedIndex = targetIndex;
}

function clickCheckboxes(a, b) {
	const first = Math.min(a, b);
	const last = Math.max(a, b);

	const targetCheckboxes = checkboxes.slice(first, last + 1);
	targetCheckboxes.forEach(checkbox => checkbox.checked = true)
}