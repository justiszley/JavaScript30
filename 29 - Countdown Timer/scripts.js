const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const customInput = document.querySelector('[name="customForm"]')
let timerId;

function timer(seconds) {
	clearInterval(timerId)
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	timerId = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if (secondsLeft < 0) {
			clearInterval(timerId);
			return;
		}
		displayTimeLeft(secondsLeft)
	}, 1000)
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const minutes = end.getMinutes()
	endTime.textContent = `Be Back At ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer(e) {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

function submitHandle(e) {
	e.preventDefault();
	const mins = this.querySelector('input').value;
	const secs = mins * 60;
	this.reset();
	timer(secs);
}

timerDisplay.textContent = '00:00'

buttons.forEach(button => button.addEventListener('click', startTimer))
customInput.addEventListener('submit', submitHandle)