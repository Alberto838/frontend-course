//////////////////////////
// POBIERANIE ELEMENTÓW //
//////////////////////////

// Starsze metody (wspierdają żywe kolekcje - elementy dodane dynamicznie):
const test = document.getElementById('id')
const test1 = document.getElementsByTagName('tag')
const test2 = document.getElementsByClassName('klasa')

// Nowsze metody (ES6 - nie wspierają żywych kolekcji):
const test4 = document.querySelector('#id')
const test5 = document.querySelector('tag')
const test6 = document.querySelector('.klasa')

querySelector // kończy działanie po znalezieniu pierwszego elementu
querySelectorAll // przeszukuje wszystkie elementy o danej klasie/id/tagu

//////////////////////////////////////////////////////////
// TWORZENIE, DODAWANIE I USUWANIE ELEMENTÓW NA STRONIE //
//////////////////////////////////////////////////////////

// Tworzenie elementów
const test7 = document.createElement('tag') // tworzenie tagu
test7.textContent = 'tekst' // dodawanie tekstu do tagu, np. do li

// Dodawanie do DOM'a
document.body.append(test7)
append /*vs*/
appendChild // append jest nowszy, można dodawać elementy w jednej linijce + można dodawać stringa, np.:
test7.append(p, heading, 'tekst')

// Modyfikacja
test.outerHTML // <button>zawartość</button> - wszystko razem z tagami
test.innerHTML // zawartość - sama zawartość tagu | NIE UŻYWAĆ PRZY INPUCIE UŻYTKOWNIKA, NARAŻENIE NA ATAKI
test.innerText // pokazuje tylko tekst
test.textContent // pokazuje wszystko z wyjątkiem tagów

// Usuwanie elementów
rodzic.removeChild(dziecko)
dziecko.remove()

////////////////////////
// EVENT (e), TARGET //
////////////////////////

const btn = document.querySelector('button')
const test8 = e => {
	// console.log(e);
	console.log(e.target) // zawsze odwołuje się do elementu, który klikamy (w przypadku listenera na click)
	console.log(e.target.offsetTop) // "odległość" od górnej krawędzi przeglądarki do klikniętego elementu
}

/////////////////////////
// CAPTURING, BUBBLING //
/////////////////////////

// Przy addEventListener domyślnie jest ustawiona faza bąbelkowania -> zaczynamy od najmłodszego dziecka
// Przy aktualnym zapisie kolejność to: blue -> gold -> lime

const infoGold = e => {
	e.stopPropagation() // wyświetli tylko kliknięty element (bez elementów znajdujących się pod spodem)
}

lime.addEventListener('click', infoLime, { once: true }) // wykona się tylko przy pierwszym kliknięciu
blue.addEventListener('click', infoBlue, { capture: true }) // zmiana z fazy bąbelkowania na fazę przechwytywania (zaczynamy od najstarszego rodzica)
gold.addEventListener('click', infoGold)

pointer - events
none // dodane w CSS sprawi, że ignorowane będą kliki (odwrotność stopPropagation)

setTimeout
setInterval

/////////////
// OBIEKTY //
/////////////

const newUser = {
	name: 'Lisa',
	age: 23,
	car: {
		brand: 'Audi',
		model: 'A3',
		color: 'czarny',
		sound() {
			console.log('brum brum')
		},
		test: '123',
	},
}

console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, kolor ${newUser.car.color}`)

const user = {
	name: 'Klaudia',
	age: 23,
	'fav-color': 'czerwony',
}

user.country = 'Polska'

user['fav-color'] = 'niebieski'

const dogName = 'Drops'
const dogAge = 5

const dog = {
	// name: dogName,
	// age: dogAge

	dogName,
	dogAge, // jeśli nazwa klucza jest taka sama jak warość - zapis skrócony
}

// PĘTLA FOR IN

const user = {
	name: 'Klaudia',
	age: 23,
	sex: 'female',
	'hair-color': 'blonde',
}

for (const data in user) {
	console.log(user[data])
}

// THIS

const user = {
	name: 'Giovanni',
	showName() {
		console.log(this.name)
	},
}

// KONSTRUKTORY

function User(name, age) {
	this.name = name
	this.age = age

	this.hello = function () {
		console.log(`Cześć ${this.name}`)
	}
}

const newUser2 = new User('Klaudia', 23)
const newUser3 = new User('Lily', 32)

newUser2.hello()

// PROTOTYPY

function User(name, age) {
	this.name = name
	this.age = age
}

const newUser2 = new User('Klaudia', 23)
const newUser3 = new User('Lily', 32)

User.prototype.hello = function () {
	console.log(`Cześć ${this.name}`)
}

User.prototype.country = 'Polska'
User.prototype.race = 'człowiek'

console.log(newUser2)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ------------ W listenerach aby odwołać się do funkcji z
// ------------ prototypu, musimy to zrobić funkcją
btn1.addEventListener('click', () => dish1.costs())
btn2.addEventListener('click', () => dish2.costs())
btn3.addEventListener('click', () => dish3.costs())
// -----------------------------------------------------------------------------------------------

// THIS - LOG

console.log(this) // this użyty w zakresie globalnym wskazuje na Window, obiekt najwyższy

// ---------------------

const person = {
	name: 'Lisa',
	'fav-meal': 'pizza',
	address: {
		city: 'Kraków',
		'zip-code': '00-000',
		showCity() {
			console.log(this)
		},
	},
}

person.address.showCity() // this w zwykłej funkcji wskazuje na obiekt, który jest na lewo od kropki (address)

// ---------------------

function Food(name) {
	this.name = name // this w konstruktorze wskazuje na obiekt stworzony na podstawie konstruktora (meal, meal2)
}

const meal = new Food('pizza')
const meal2 = new Food('pepsi')

console.log(meal, meal2)

// ---------------------

const ob = {
	number: 123,
	showNumber() {
		console.log(this.number) // @123@
	},
	showNumber2: () => {
		console.log(this.number) // @undefined@ W funkcji strzałkowej this wskazuje na obiekt Window !!!!!!!!!!!!
	},
	// aby działało, trzeba opakować f strzałkową w zwykłą funkcję:
	showNumber3() {
		const test = () => {
			console.log(this.number) // @123@ W funkcji strzałkowej this wskazuje na obiekt Window !!!!!!!!!!!!
		}
	},
}

ob.showNumber()
ob.showNumber2()

// BIND

function test() {
	console.log(this) // Window
	console.log(this.name) // puste pole
}

const car1 = {
	name: 'Audi',
}

const car2 = {
	name: 'Dodge',
}

const car3 = {
	name: 'Nissan',
}

test.bind(car3)()
// po dodaniu:
// {name: Nissan}
// Nissan

// CALL, APPLY

const movie = {
	title: 'Avengers',
}

function showMovie(price, cinema) {
	console.log(`Film ${this.title}, cena ${price}, kino: ${cinema}.`)
}

showMovie(30, 'SuperKINO') // movie nie zadziała

// funkcja.call(OBIEKT, ARGUMENTY)
showMovie.call(movie, 35, 'SuperKINO2') // OK

// funkcja.apply(OBIEKT, TABLICA)
showMovie.apply(movie, [40, 'KINO33']) // OK

///////////
// KLASY //
///////////

// Konstruktor:
function Food(name, price, country) {
	this.name = name
	this.price = price
	this.country = country
}

Food.prototype.showName = function () {
	console.log(this.name)
}

Food.prototype.showDetails = function () {
	console.log(`${this.name} kosztuje ${this.price}, kraj pochodzenia: ${this.country}.`)
}

const meal1 = new Food('Pizza', '25zł', 'Włochy')
meal1.showName()
meal1.showDetails()

// Po przerobieniu na klasę:
class Food2 {
	constructor(name, price, country) {
		this.name = name
		this.price = price
		this.country = country
	}

	showName() {
		console.log(this.name)
	}

	showDetails() {
		console.log(`${this.name} kosztuje ${this.price}, kraj pochodzenia: ${this.country}.`)
	}
}

const meal2 = new Food2('Schabowy', '23zł', 'Polska')
meal2.showName()
meal2.showDetails()

// EXTENDS, SUPER
class Animal {
	constructor(name) {
		this.name = name
	}

	sound() {
		console.log('Zwierzak robi hau hau')
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name)
		this.age = age
	}
}

class Cat extends Animal {
	sound() {
		console.log(`miau miau`)
	}
}

const dog = new Dog('Drops', 6)
const cat = new Cat('kot')

dog.sound()
cat.sound()

console.log(dog)
console.log(cat)

// OBJECT.ASSIGN

const user = {
	name: 'Lily',
	age: 23,
}

const pet = {
	name: 'Drops',
	type: 'dog',
}

const userInfo = Object.assign({}, user, pet)
console.log(userInfo)
// name: "Drops"
// age: 23
// type: "dog"

const userCopy = Object.assign({}, user)
userCopy.age = 25
console.log(userCopy)
// name: "Lily"
// age: 25

// DESTRUKTURYZACJA

const person = {
	name: 'Lily',
	age: 23,
	job: 'DJ',
	car: {
		brand: 'Dodge',
		model: 'Viper',
	},
}

const showInfo = () => {
	const { name, age, job } = person

	console.log(`${name} pracuje jako ${job} i ma ${age} lata.`)
}

showInfo()

// LUB:

const showInfo2 = ({ name, age, job }) => {
	console.log(`${name} pracuje jako ${job} i ma ${age} lata.`)
}

showInfo(person)

// ----------------

const showInfo3 = () => {
	const {
		car: { brand, model },
	} = person
	console.log(`Jej samochód to ${brand} ${model}`)
}

// LUB:

showInfo3()

const showInfo4 = ({ car: { brand, model } }) => {
	console.log(`Jej samochód to ${brand} ${model}`)
}

showInfo4(person)

/////////////////////
// JSON, AJAX, API //
/////////////////////

const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener('click', () => {
	fetch(URL)
		.then(res => res.json())
		.then(data => img.setAttribute('src', data.message))
		.catch(err => console.error(err))
})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WAŻNE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\

/////////////
// PROMISY //
/////////////

// Używamy:
// 1. Nie chcemy robić callback hell
// 2. Kiedy nie jesteśmy pewni jaki będzie rezultat jakiejś funkcji / czy plik zostanie pobrany z serwera

const test = new Promise((resolve, reject) => {
	if (true) {
		resolve('jest ok')
	} else {
		reject('błąd')
	}
})

test.then(info => console.log(info)).catch(err => console.error(err))

///////////////////
// ASYNC & AWAIT //
///////////////////

const checkAge = age => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			resolve()
		} else {
			reject()
		}
	})
}

const doubleCheck = () => {
	return new Promise(resolve => {
		console.log('Sprawdzam jeszcze raz...')
		setTimeout(() => {
			resolve('Faktycznie, wiek się zgadza')
		}, 1000)
	})
}

async function test() {
	try {
		await checkAge(22)
		console.log('Chyba możesz wejść')
		await doubleCheck()
		console.log('Faktycznie, wiek się zgadza')
		console.log('Weryfikacja zakończona!')
	} catch {
		console.error('Błąd, masz za mało lat!')
	}
}

test()

// AXIOS

const URL = 'https://dog.ceo/api/breeds/image/random'

// zwykły fetch
fetch(URL)
	.then(res => res.json())
	.then(res => one.setAttribute('src', res.message))

// fetch axios
axios.get(URL).then(res => two.setAttribute('src', res.data.message))

// async & wait z axiosem
async function showImage() {
	const response = await axios.get(URL)
	three.setAttribute('src', response.data.message)
}

showImage()

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WAŻNE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
