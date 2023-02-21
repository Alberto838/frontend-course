const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')

// 1. nasłuchiwanie na przycisk
// 2. dodawanie klasy .hide
// 3. obracanie strzałki

const showImg = () => {
	img.classList.toggle('hide')

	if (img.classList.contains('hide')) {
		arrowIcon.style.transform = 'rotate(-180deg)'
	} else {
		arrowIcon.style.transform = 'rotate(0)'
	}
}

arrowBtn.addEventListener('click', showImg)
