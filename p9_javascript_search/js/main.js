const input = document.querySelector('.search')
const liItem = document.querySelectorAll('li')

const searchEngine = e => {
	const inputText = e.target.value.toLowerCase()

	liItem.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(inputText) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', searchEngine)
