const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');

let isDown = false;

function moveBar(position) {
	const percent = position / speed.offsetHeight;
	bar.style.setProperty('height', `${percent * 100}%`);

	const min = 0.4;
	const max = 4;
	const playbackRate = ((percent * (max - min)) + min).toFixed(1);
	
	video.playbackRate = playbackRate;
	bar.textContent = `${playbackRate}x`
}

speed.addEventListener('mousedown', (e) => {
	isDown = true;
	moveBar(e.offsetY);
});

speed.addEventListener('mouseup', () => {
	isDown = false;
});

speed.addEventListener('mouseleave', () => {
	isDown = false;
});

speed.addEventListener('mousemove', (e) => {
	e.preventDefault();
	if (!isDown) return;
	moveBar(e.offsetY);
});
