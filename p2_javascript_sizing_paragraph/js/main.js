const sizeUpButton = document.querySelector('.sizeUp')
const sizeDownButton = document.querySelector('.sizeDown')
const colorButton = document.querySelector('.color')
const text = document.querySelector('p')

let i = 36

const sizeUpFun = () => {
	i < 52 ? (i += 2) : (i = 52)
	text.style.fontSize = `${i}px`
}

const sizeDownFun = () => {
	i > 20 ? (i -= 2) : (i = 20)
	
	text.style.fontSize = `${i}px`
}

const colorChange = () => {
	const r = Math.floor((Math.random()*255))
	const g = Math.floor((Math.random()*255))
	const b = Math.floor((Math.random()*255))
	text.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUpButton.addEventListener('click', sizeUpFun)
sizeDownButton.addEventListener('click', sizeDownFun)
colorButton.addEventListener('click', colorChange)
