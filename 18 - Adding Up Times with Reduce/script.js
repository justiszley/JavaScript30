const timeNodes = [...document
	.querySelectorAll('[data-time]')];

const times = timeNodes
	.map(item => {
		const time = item.dataset.time;
		const [mins, secs] = time.split(':').map(parseFloat)
		const totalItemSeconds = mins * 60 + secs;
		return totalItemSeconds;
	});

const totalSeconds = times.reduce((total, seconds) => 
		total + seconds, 0)

// console.log(totalSeconds)

// const hours = Math.floor(totalSeconds / 3600)
// const minutes = Math.floor(getDecimal(totalSeconds / 3600) * 100)
// const seconds = Math.floor(getDecimal(totalSeconds / 60) * 100);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
const seconds = secondsLeft;

console.log({hours, minutes, seconds})