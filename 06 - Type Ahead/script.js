const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [
// 	{
// 		"city": "Los Angeles", 
// 		"growth_from_2000_to_2013": "4.8%", 
// 		"latitude": 34.0522342, 
// 		"longitude": -118.2436849, 
// 		"population": "3884307", 
// 		"rank": "2", 
// 		"state": "California"
//   }
// ];

const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

const input = document.querySelector('input');
const suggestionList = document.querySelector('.suggestions');
input.addEventListener('input', inputHandler)

function inputHandler(e) {
	const value = this.value;
	const matches = cities.filter(arr => arr.city.toLowerCase().includes(value) ||
																			arr.state.toLowerCase().includes(value));
	const lisArr = createListItems(matches, value);
	insertLis(lisArr);
}

function createListItems(arr, value) {
	const lisArr = arr.map(item => {
		const li = document.createElement('li');
		
		const cityName = item.city.toLowerCase().includes(value) ? makeHighlited(item.city, value) : item.city;
		const stateName = item.state.toLowerCase().includes(value) ? makeHighlited(item.state, value) : item.state;

		const nameSpan = document.createElement('span');
		nameSpan.innerHTML = `${cityName}, ${stateName}`;
		const populationSpan = document.createElement('span');
		populationSpan.innerHTML = item.population;

		li.appendChild(nameSpan);
		li.appendChild(populationSpan);

		return li;
	})

	function makeHighlited(name, value) {
		if (value.length === 0) return name;

		const start = name.toLowerCase().indexOf(value);
		const end = start + value.length;

		const withHighlighted = `${name.slice(0, start)}<span class='hl'>${name.slice(start, end)}</span>${name.slice(end)}`
		return withHighlighted;
	}

	return lisArr;
}

function insertLis(lisArr) {
	suggestionList.innerHTML = '';
	lisArr.forEach(item => suggestionList.appendChild(item))
}