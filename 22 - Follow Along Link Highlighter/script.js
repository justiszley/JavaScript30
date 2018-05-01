const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
	const linkCoords = this.getBoundingClientRect();
	const coords = {
		width: linkCoords.width,
		height: linkCoords.height,
		left: linkCoords.left + window.pageXOffset,
		top: linkCoords.top + window.pageYOffset
	}
	highlight.style.width = `${coords.width}px`;
	highlight.style.height = `${coords.height}px`;

	// highlight.style.top = `${coords.top + window.pageYOffset}px`
	// highlight.style.left = `${coords.left + window.pageXOffset}px`
	highlight.style.transform = 
		`translate(${coords.left}px, ${coords.top}px)`
}

triggers
	.forEach(link => 
		link.addEventListener('mouseenter', highlightLink))