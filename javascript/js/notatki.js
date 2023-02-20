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

;querySelector // kończy działanie po znalezieniu pierwszego elementu
;querySelectorAll // przeszukuje wszystkie elementy o danej klasie/id/tagu


////////////////////////////////////////////////
// TWORZENIE I DODAWANIE ELEMENTÓW NA STRONIE //
////////////////////////////////////////////////


// Tworzenie elementów
const test7 = document.createElement('tag') // tworzenie tagu
test7.textContent = 'tekst' // dodawanie tekstu do tagu, np. do li

// Dodawanie do DOM'a
document.body.append(test7)

;append /*vs*/ ;appendChild // append jest nowszy, można dodawać elementy w jednej linijce + można dodawać stringa, np.:
test7.append(p, heading, 'tekst')

// Modyfikacja
;test.outerHTML // <button>zawartość</button> - wszystko razem z tagami
;test.innerHTML // zawartość - sama zawartość tagu | NIE UŻYWAĆ PRZY INPUCIE UŻYTKOWNIKA, NARAŻENIE NA ATAKI
;test.innerText // pokazuje tylko tekst 
;test.textContent // pokazuje wszystko z wyjątkiem tagów

// Usuwanie elementów
rodzic.removeChild(dziecko)
dziecko.remove()
