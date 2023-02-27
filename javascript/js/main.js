// // // -------------- STRINGS


// // const name = 'Albert'
// // const animalName = 'Kulka'
// // let age = 22
// // let animalAge = 2
// // const favDish = 'pasta e pizza'

// // console.log(name)
// // console.log(age)
// // console.log(favDish)

// // console.log('Mi chiamo ' + name + ', ho ' + age + ' anni, il mio piatto preferito è: ' + favDish + '.')
// // console.log(`Mi chiamo ${name}, ho ${age} anni, il mio piatto preferito è: ${favDish}.`)
// // console.log(`Ciao, sono ${name}, e questa è ${animalName} - il mio cane.`);
// // console.log(animalName + ' ha già ' + animalAge + ' anni!');



// // // BEFORE:

// // const firstName = 'Tomek'
// // let age = 12
// // age = 18
 
// // var favColor = 'niebieski'
// // const fav-meal = 'schabowy'
 
// // let current.Car
// // current.Car = 'Audi'
 
// // let firstName = 'Ania'
// // let age2 = 24
// // let ulubionyKolor = 'czerwony'


// // // AFTER:

// // const firstName = 'Tomek'
// // let age = 12
// // age = 18

// // const favColor = 'niebieski'
// // const favMeal = 'schabowy'

// // let currentCar
// // currentCar = 'Audi'

// // let firstName2 = 'Ania'
// // let age2 = 24
// // let favColor2 = 'czerwony'

// // // -------------- STRINGS EXERCISE

// // const text1 = 'powiększ mnie!'
// // const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// // const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// // const text4 = 'sprawdź, czy zawieram słowo "czy"'
// // const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// // const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// // const text7 = 'podziel, ten, string, od, przecinków'

// // console.log(text1.toUpperCase());
// // console.log(text2.toLowerCase());
// // console.log(text3.slice(6));
// // console.log(text4.includes('czy'));
// // console.log(text5.charAt(2));
// // console.log(text6.replaceAll('pies', 'kot'));
// // console.log(text7.split(','));

// // // -------------- NUMBERS

// // const num1 = 23
// // const num2 = '45'

// // console.log(num1 + num2);
// // console.log(num2 * 1);

// // const num3 = 'abcd'
// // console.log(0/0);

// // const num4 = 1351.125
// // console.log(num4.toFixed(2));

// // const num5 = '451'
// // console.log(parseInt(num5));

// // // -------------- EXERCISE IF

// // const x = 50
// // let result

// // if (x >= 100) {
// //     result = 'X >= 100'
// // } else if (x > 30 && x < 100) {
// //     result = 'X jest średniakiem'
// // } else {
// //     result = 'X jest mały'
// // }

// // result = result.toUpperCase()
// // console.log(result);

// // // -------------- EXERCISE FOR OF

// // let numbers = [5, 8, 10, 23, 48, 60]

// // for (const number of numbers) {
// // 	console.log(number / 5)
// // }

// // console.log('---------')

// // for (const number of numbers) {
// // 	if (number % 2 == 0) {
// // 		console.log(`Liczba ${number} jest parzysta`)
// // 	} else {
// // 		console.log(`Liczba ${number} jest nieparzysta`)
// // 	}
// // }

// // // -------------- EXERCISE ARRAYS

// // const drinks = ['pepsi', 'kawa', 'sok']
// // const meals = ['schabowy', 'spaghetti', 'zupa']

// // console.log(drinks);
// // console.log(meals);

// // const menu = [...drinks, ...meals]
// // console.log(menu);

// // const numbers = [0, 0, 1, 1, 2, 2, 2]
// // const colors = ['red', 'green', 'blue', true, 123]
// // const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// // const numbers2 = numbers.slice(0, 2)
// // console.log(numbers2)

// // const numbers3 = numbers.slice(-3)
// // console.log(numbers3)

// // const randomStuff = colors.splice(-2)
// // console.log(colors)
// // console.log(randomStuff)

// // const newCars = cars.splice(2, 4, 'test')
// // console.log(cars)
// // console.log(newCars)

// // // -------------- PRACTICE 1 ARRAYS

// // const letters = ['c', 'd']
// // console.log(letters);

// // letters.unshift('a', 'b')
// // letters.push('e', 'f')

// // console.log(letters);

// // console.log(letters.includes('c'));

// // // -------------- PRACTICE 2 ARRAYS

// // const numbers = [1, 2, 3]
// // const food = ['🍔', '🍟', '🍕']
// // console.log(numbers);
// // console.log(food);

// // const all = numbers.concat(food)
// // console.log(all);

// // const allSpread = [...numbers, ...food]
// // console.log(allSpread);

// // // -------------- PRACTICE 3 ARRAYS

// // const numbers = [1, 5, 13, 26, 48]

// // const newNumbers = numbers.map(number => number * 5)
// // console.log(newNumbers)

// // newNumbers.forEach(number => {
// // 	if (number % 2 === 0) {
// // 		console.log(`${number} jest liczbą parzystą`)
// // 	} else {
// // 		console.log(`${number} jest liczbą nieparzystą`)
// // 	}
// // })

// // // -------------- PRACTICE 4 ARRAYS

// // const colors = ['yellow']

// // colors.unshift('black')
// // colors.push('red')

// // console.log(colors)

// // // for (i = 0; i < colors.length; i++) {
// // // 	console.log(`My favorite color is: ${colors[i].charAt(0).toUpperCase().concat(colors[i].slice(1))}`)
// // // }

// // for (const color of colors) {
// //     console.log(`My favorite color is: ${color.charAt(0).toUpperCase() + color.slice(1)}`);
// // }

// // // -------------- PRACTICE 5 ARRAYS

// // const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'

// // const newCars = cars.split(', ')
// // console.log(newCars);

// // (newCars.length > 3) ? console.log('Jest OK') : console.log('Nie jest OK');
// // (newCars.includes('Audi')) ? newCars.push('Renault') : newCars.pop()

// // console.log(newCars);

// // // -------------- PRACTICE 1 FUNCTIONS

// // let score

// // const add = (x, y) => {
// // 	score = x + y
// // 	score % 2 === 0 ? even() : odd()
// // }

// // const even = x => console.log(`Liczba ${score} jest parzysta`)
// // const odd = x => console.log(`Liczba ${score} jest nieparzysta`)

// // add(1, 6)

// // // -------------- PRACTICE 2 FUNCTIONS

// // let celsius, temp

// // const fahrenheit = x => {
// // 	celsius = x
// // 	temp = x * 1.8 + 32
// // 	console.log(`${celsius}°C = ${temp}°F`);
// // }

// // fahrenheit(38)

// // // -------------- PRACTICE 3 FUNCTIONS

// // const num = 10
// // const numbers = []

// // for (let i = 0; i < num; i++) {
// // 	numbers.push(i)
// // }

// // console.log(numbers)

// // const checker = number => {
// // 	number % 3 === 0 && number != 0
// // 		? console.log(`${number} jest podzielne przez 3`)
// // 		: console.log(`${number} nie jest podzielne przez 3 lub ${number} = 0`)
// // }

// // numbers.forEach(checker)

// // // -------------- GET

// // const test = document.getElementById('item')
// // console.log(test);

// // const test2 = document.getElementsByTagName('li')
// // console.log(test2);

// // const test3 = document.getElementsByClassName('test')
// // console.log(test3);

// // // -------------- EVENTLISTENER

// // const btn1 = document.querySelector('.btn-1')
// // const btn2 = document.querySelector('.btn-2')
// // const btn3 = document.querySelector('.btn-3')

// // btn1.addEventListener('click', function() {
// // 	console.log('Kliknięto mnie!');
// // })

// // btn2.addEventListener('mouseover', () => console.log('Najechano na mnie!'))

// // const test = () => {
// // 	console.log('Double click');
// // }

// // btn3.addEventListener('dblclick', test)

// // // -------------- CLASSLIST

// // const addBtn = document.querySelector('.add')
// // const removeBtn = document.querySelector('.remove')
// // const toggleBtn = document.querySelector('.toggle')
// // const text = document.querySelector('p')

// // const addClass = () => {
// //     text.classList.add('test')
// // }

// // const removeClass = () => {
// //     text.classList.remove('test')
// // }

// // const toggleClass = () => {
// //     text.classList.toggle('test')
// // }

// // addBtn.addEventListener('click', addClass)
// // removeBtn.addEventListener('click', removeClass)
// // toggleBtn.addEventListener('click', toggleClass)

// // // -------------- ADDING HTML IN JS EXERCISE

// // const ulList = document.createElement('ul')
// // document.body.appendChild(ulList)
// // const number = 10

// // for (let i = 1; i <= number; i++) {
// //     const liItem = document.createElement('li')
// //     liItem.textContent = i
// // 	ulList.appendChild(liItem)
// // }

// // const lastElement = ulList.querySelector('li:last-child')
// // lastElement.textContent = 'Jestem ostatnim elementem!'
// // lastElement.style.backgroundColor = 'royalblue'
// // lastElement.style.padding = '20px 40px'
// // lastElement.style.fontSize = '48px'

// // // ---------------------

// // const p1 = document.querySelector('.p1')
// // const p2 = document.querySelector('.p2')
// // const btn1 = document.querySelector('.btn1')
// // const btn2 = document.querySelector('.btn2')
// // const divSquare = document.querySelector('.square')

// // const hello = () => {
// //     console.log('cześć');
// // }

// // const colorRed = () => {
// //     divSquare.style.backgroundColor = 'tomato'
// // }

// // const colorBlue = () => {
// //     divSquare.style.backgroundColor = 'royalblue'
// // }

// // const toggleParagraph = () => {
// //     p1.classList.toggle('show')
// //     p2.classList.toggle('show')
// // }

// // btn1.addEventListener('dblclick', hello)
// // divSquare.addEventListener('mouseenter', colorRed)
// // divSquare.addEventListener('mouseleave', colorBlue)
// // btn2.addEventListener('click', toggleParagraph)

// // // -------------- ATTRIBUTES

// // const img = document.querySelector('img')

// // img.setAttribute('src', 'https://i.imgur.com/OA9DcKQ.jpeg')
// // img.setAttribute('alt', 'cytat i łysy facet')

// // const printer = () => {
// //     console.log('cokolwiek');
// // }

// // setTimeout(printer, 2000)

// // // -------------- DATA-ATTRIBUTES

// // const liItems = document.querySelectorAll('li')
// // let number = 1

// // for (const liItem of liItems) {
// //     liItem.textContent = number
// //     liItem.dataset.id = number
// //     number++
// // }

// // const thirdLi = document.querySelector('[data-id="3"]')
// // console.log(thirdLi);

// // const grandpa = thirdLi.closest('.wrapper')
// // console.log(grandpa);

// // // -------------- OBJECTS EXERCISE

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')
// const p = document.querySelector('p')

// function Dish (name, price) {
//     this.name = name
//     this.price = price
// }

// const dish1 = new Dish('Schabowy', '29zł')
// const dish2 = new Dish('Pizza', '25zł')
// const dish3 = new Dish('Zupa', '8zł')

// Dish.prototype.costs = function() {
//     console.log(`${this.name} kosztuje ${this.price}.`);
// }

// btn1.addEventListener('click', () => dish1.costs())
// btn2.addEventListener('click', () => dish2.costs())
// btn3.addEventListener('click', () => dish3.costs())

// KONSTRUKTOR A KLASA

// function Food(name, price, country) {
// 	this.name = name
// 	this.price = price
// 	this.country = country
// }

// Food.prototype.showName = function() {
// 	console.log(this.name);
// }

// Food.prototype.showDetails = function() {
//     console.log(`${this.name} kosztuje ${this.price}, kraj pochodzenia: ${this.country}.`);
// }

// const meal1 = new Food('Pizza', '25zł', 'Włochy')
// meal1.showName()
// meal1.showDetails()

// // Po przerobieniu na klasę:
// class Food2 {
//     constructor(name, price, country) {
//         this.name = name
//         this.price = price
//         this.country = country
//     }

//     showName() {
//         console.log(this.name);
//     }

//     showDetails() {
//         console.log(`${this.name} kosztuje ${this.price}, kraj pochodzenia: ${this.country}.`);
//     }
// }

// const meal2 = new Food2('Schabowy', '23zł', 'Polska')
// meal2.showName()
// meal2.showDetails()

