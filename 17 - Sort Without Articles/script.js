const list = document.getElementById('bands')
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function isArticle(word) {
	const lowerCaseWord = word.toLowerCase();
	return lowerCaseWord === 'the' ||
				 lowerCaseWord === 'a' ||
				 lowerCaseWord === 'an';
}

const sortedBands = [...bands].sort((firstBand, secondBand) => {
	const firstBandArr = firstBand.split(' ');
	const secondBandArr = secondBand.split(' ');

	firstBandToCompare = isArticle(firstBandArr[0]) ? firstBandArr[1] : firstBandArr[0];
	secondBandToCompare = isArticle(secondBandArr[0]) ? secondBandArr[1] : secondBandArr[0];

	return firstBandToCompare > secondBandToCompare ? 1 : -1;
})

list.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');