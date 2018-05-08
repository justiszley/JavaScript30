const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let score = 0;
let startGameIntervalId;

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => hole.classList.remove('up'), time);
}

function bonk(e) {
	if (!e.isTrusted) {}
	if (this.parentElement.classList.contains('up')) {
		score++;
	}
	this.parentElement.classList.remove('up')
	scoreBoard.textContent = score;
}

function startGame() {
	clearInterval(startGameIntervalId);
	score = 0;
	scoreBoard.textContent = score;
	startGameIntervalId = setInterval(peep, 700);
}

function stopGame() {
	clearInterval(startGameIntervalId);
}

moles.forEach(mole => mole.addEventListener('click', bonk))