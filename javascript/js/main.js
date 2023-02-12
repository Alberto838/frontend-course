// -------------- STRINGS

/*
const name = 'Albert'
const animalName = 'Kulka'
let age = 22
let animalAge = 2
const favDish = 'pasta e pizza'

console.log(name)
console.log(age)
console.log(favDish)

console.log('Mi chiamo ' + name + ', ho ' + age + ' anni, il mio piatto preferito è: ' + favDish + '.')
console.log(`Mi chiamo ${name}, ho ${age} anni, il mio piatto preferito è: ${favDish}.`)
console.log(`Ciao, sono ${name}, e questa è ${animalName} - il mio cane.`);
console.log(animalName + ' ha già ' + animalAge + ' anni!');
*/

/*
BEFORE:

const firstName = 'Tomek'
let age = 12
age = 18
 
var favColor = 'niebieski'
const fav-meal = 'schabowy'
 
let current.Car
current.Car = 'Audi'
 
let firstName = 'Ania'
let age2 = 24
let ulubionyKolor = 'czerwony'
*/

// AFTER:

// const firstName = 'Tomek'
// let age = 12
// age = 18

// const favColor = 'niebieski'
// const favMeal = 'schabowy'

// let currentCar
// currentCar = 'Audi'

// let firstName2 = 'Ania'
// let age2 = 24
// let favColor2 = 'czerwony'

// -------------- STRINGS EXERCISE

// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text1.toUpperCase());
// console.log(text2.toLowerCase());
// console.log(text3.slice(6));
// console.log(text4.includes('czy'));
// console.log(text5.charAt(2));
// console.log(text6.replaceAll('pies', 'kot'));
// console.log(text7.split(','));

// -------------- NUMBERS

// const num1 = 23
// const num2 = '45'

// console.log(num1 + num2);
// console.log(num2 * 1);

// const num3 = 'abcd'
// console.log(0/0);

// const num4 = 1351.125
// console.log(num4.toFixed(2));

// const num5 = '451'
// console.log(parseInt(num5));

// -------------- EXERCISE IF

// const x = 50
// let result

// if (x >= 100) {
//     result = 'X >= 100'
// } else if (x > 30 && x < 100) {
//     result = 'X jest średniakiem'
// } else {
//     result = 'X jest mały'
// }

// result = result.toUpperCase()
// console.log(result);

// -------------- EXERCISE FOR OF

// let numbers = [5, 8, 10, 23, 48, 60]

// for (const number of numbers) {
// 	console.log(number / 5)
// }

// console.log('---------')

// for (const number of numbers) {
// 	if (number % 2 == 0) {
// 		console.log(`Liczba ${number} jest parzysta`)
// 	} else {
// 		console.log(`Liczba ${number} jest nieparzysta`)
// 	}
// }

// -------------- EXERCISE ARRAYS

// const drinks = ['pepsi', 'kawa', 'sok']
// const meals = ['schabowy', 'spaghetti', 'zupa']

// console.log(drinks);
// console.log(meals);

// const menu = [...drinks, ...meals]
// console.log(menu);

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0, 2)
// console.log(numbers2)

// const numbers3 = numbers.slice(-3)
// console.log(numbers3)

// const randomStuff = colors.splice(-2)
// console.log(colors)
// console.log(randomStuff)

// const newCars = cars.splice(2, 4, 'test')
// console.log(cars)
// console.log(newCars)

// -------------- PRACTICE 1 ARRAYS

// const letters = ['c', 'd']
// console.log(letters);

// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters);

// console.log(letters.includes('c'));

// -------------- PRACTICE 2 ARRAYS

// const numbers = [1, 2, 3]
// const food = ['🍔', '🍟', '🍕']
// console.log(numbers);
// console.log(food);

// const all = numbers.concat(food)
// console.log(all);

// const allSpread = [...numbers, ...food]
// console.log(allSpread);

// -------------- PRACTICE 3 ARRAYS

// const numbers = [1, 5, 13, 26, 48]

// const newNumbers = numbers.map(number => number * 5)
// console.log(newNumbers)

// newNumbers.forEach(number => {
// 	if (number % 2 === 0) {
// 		console.log(`${number} jest liczbą parzystą`)
// 	} else {
// 		console.log(`${number} jest liczbą nieparzystą`)
// 	}
// })

// -------------- PRACTICE 4 ARRAYS

// const colors = ['yellow']

// colors.unshift('black')
// colors.push('red')

// console.log(colors)

// // for (i = 0; i < colors.length; i++) {
// // 	console.log(`My favorite color is: ${colors[i].charAt(0).toUpperCase().concat(colors[i].slice(1))}`)
// // }

// for (const color of colors) {
//     console.log(`My favorite color is: ${color.charAt(0).toUpperCase() + color.slice(1)}`);
// }

// -------------- PRACTICE 5 ARRAYS

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'

// const newCars = cars.split(', ')
// console.log(newCars);

// (newCars.length > 3) ? console.log('Jest OK') : console.log('Nie jest OK');
// (newCars.includes('Audi')) ? newCars.push('Renault') : newCars.pop()

// console.log(newCars);

