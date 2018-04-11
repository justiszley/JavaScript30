const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClocks() {
	const date = new Date();

	const sec = date.getSeconds();
	const secondDeg = ((sec / 60) * 360) + 90;

	const min = date.getMinutes();
	const minDeg = ((min / 60) * 360) + ((sec / 60) * 6) + 90;

	const hour = date.getHours();
	const hourDeg = ((hour / 12) * 360) + ((min / 60) * 30) + 90;

	secondHand.style.transform = `rotate(${secondDeg}deg)`
	minuteHand.style.transform = `rotate(${minDeg}deg)`
	hourHand.style.transform = `rotate(${hourDeg}deg)`
}

const timerId = setInterval(setClocks, 1000)
setClocks();

// document.querySelector('button').onclick = function() {
// 	clearInterval(timerId)
// }