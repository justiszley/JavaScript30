const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider');


function togglePlay(e) {
	const method = video.paused ? 'play' : 'pause' ;
	video[method]()
}

function changeToggleIcon() {
	const btn = video.paused ? '►' : '❚ ❚';
	toggle.innerHTML = btn;
}

function skip(e) {
	video.currentTime += +e.target.dataset.skip;
}

function rangeHandler(e) {
	const target = e.target;
	target.addEventListener('mousemove', mouseMoveHandler);
	target.addEventListener('mouseup', mouseUpHandler);
	target.addEventListener('mouseout', removeHandlers);

	function mouseMoveHandler(e) {
		setNewValue()
	}

	function setNewValue() {
		const value = +target.value;
		const name = target.name;
		
		video[name] = value;
	}

	function mouseUpHandler(e) {
		setNewValue();
		removeHandlers();
	}

	function removeHandlers(e) {
		target.removeEventListener('mousemove', mouseMoveHandler);
		target.removeEventListener('mouseup', mouseUpHandler);
		target.removeEventListener('mouseout', removeHandlers);
	}
}

function updateProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`
}

function progressBarClickHandler(e) {
	const progressWidth = progress.offsetWidth;
	const portion = (e.offsetX / progressWidth);
	video.currentTime = video.duration * portion;
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', changeToggleIcon)
video.addEventListener('pause', changeToggleIcon)
video.addEventListener('timeupdate', updateProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('mousedown', rangeHandler))

let mouseDown = false;
progress.addEventListener('click', progressBarClickHandler);
progress.addEventListener('mousemove', (e) => mouseDown && progressBarClickHandler(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mouseout', () => mouseDown = false);