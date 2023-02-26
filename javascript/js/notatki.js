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


//////////////////////////////////////////////////////////
// TWORZENIE, DODAWANIE I USUWANIE ELEMENTÓW NA STRONIE //
//////////////////////////////////////////////////////////


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


////////////////////////
// EVENT (e), TARGET //
////////////////////////


const btn = document.querySelector('button')
const test8 = (e) => {
    // console.log(e);
    console.log(e.target); // zawsze odwołuje się do elementu, który klikamy (w przypadku listenera na click)
    console.log(e.target.offsetTop); // "odległość" od górnej krawędzi przeglądarki do klikniętego elementu
}


/////////////////////////
// CAPTURING, BUBBLING //
/////////////////////////


// Przy addEventListener domyślnie jest ustawiona faza bąbelkowania -> zaczynamy od najmłodszego dziecka
// Przy aktualnym zapisie kolejność to: blue -> gold -> lime

const infoGold = (e) => {
    e.stopPropagation() // wyświetli tylko kliknięty element (bez elementów znajdujących się pod spodem)
}

lime.addEventListener('click', infoLime, {once: true}) // wykona się tylko przy pierwszym kliknięciu
blue.addEventListener('click', infoBlue, {capture: true}) // zmiana z fazy bąbelkowania na fazę przechwytywania (zaczynamy od najstarszego rodzica)
gold.addEventListener('click', infoGold)

pointer-events; none // dodane w CSS sprawi, że ignorowane będą kliki (odwrotność stopPropagation)






setTimeout
setInterval


/////////////
// OBJECTS //
/////////////

const newUser = {
    name: 'Lisa',
    age: 23,
    car: {
        brand: 'Audi',
        model: 'A3',
        color: 'czarny'
    }
}

console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, kolor ${newUser.car.color}`);