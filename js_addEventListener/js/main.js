const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const btnRemoveColor = document.querySelector('.remove-color')
const square = document.querySelector('.color')

function redColor() {
	square.classList.add('red')
	square.classList.remove('blue')
}

function blueColor() {
	square.classList.add('blue')
	square.classList.remove('red')
}

function removeColor() {
	square.classList.remove('blue', 'red')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
btnRemoveColor.addEventListener('click', removeColor)
