// make a hash of all the audio

const audioArr = Array.from(document.querySelectorAll('audio[data-key]'));
const audioHash = audioArr.reduce(function(previousValue, nextValue) {
		previousValue[nextValue.dataset.key] = nextValue;
		return previousValue
}, {})

// make a hash of all the keys

const keysArr = Array.from(document.querySelectorAll('.key'));
const keysHash = keysArr.reduce(function(previousValue, nextValue) {
		previousValue[nextValue.dataset.key] = nextValue;
		return previousValue
}, {})

// listen to keydown and, if needed, play a sound and add class to a key

document.addEventListener('keydown', playSound)

document.addEventListener('transitionend', removeClass)

function playSound(e) {
	const key = e.keyCode;
	if (!audioHash[key]) return;

	audioHash[key].currentTime = 0;
	audioHash[key].play();

	keysHash[key].classList.add('playing');
}

function removeClass(e) {
	if (e.propertyName !== 'transform' || 
		!e.target.classList.contains('playing')) return;
	e.target.classList.remove('playing');
}