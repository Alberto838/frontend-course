const btn = document.querySelector('.arrow')
const arrow = document.querySelector('.fas')
const image = document.querySelector('.item1')

function toggleImage() {
	image.classList.toggle('show')

	if (image.classList.contains('show')) {
		arrow.style.transform = 'rotate(180deg)'
	} else {
		arrow.style.transform = 'rotate(0deg)'
	}
}
btn.addEventListener('click', toggleImage)
