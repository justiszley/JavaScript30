const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];


function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}"
					${plate.done ? 'checked' : ''} />
				<label for="item${i}">${plate.text}</label>
				<button class="closeButton"><span class="visuallyhidden">close</span>x</button>
			</li>
		`
	}).join('')
}

function submitHandler(e) {
	e.preventDefault();
	const text = this.querySelector('[name="item"]').value;
	const item = {
		text,
		done: false
	}
	items.push(item)
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items))
	this.reset()
}

function initialFill(e) {
	const savedData = JSON.parse(localStorage.getItem('items'))
	if (!savedData) return;
	items.push(...savedData)
	populateList(items, itemsList)
}

function checkboxHandler(e) {
	const target = e.target;
	const index = target.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items))
}

function closeButtonsHandler(e) {
	const target = e.target;
	if (target.nodeName !== 'BUTTON') return;
	const targetInput = target.parentNode.querySelector('input')
	const targetInputIndex = targetInput.dataset.index;
	items.splice(targetInputIndex, 1);
	localStorage.setItem('items', JSON.stringify(items))
	populateList(items, itemsList)
}

addItems.addEventListener('submit', submitHandler)
document.addEventListener('DOMContentLoaded', initialFill)
itemsList.addEventListener('change', checkboxHandler)
itemsList.addEventListener('click', closeButtonsHandler)