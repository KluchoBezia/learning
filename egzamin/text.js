
// funkcja zwraca liczbe
function zwroc5() {
    return 5
}

//funkcja bioraca liczbe i zwracajaca stringa
function dodajWykrzyknik(liczba) {
    return liczba + "!"
}

console.log(dodajWykrzyknik(zwroc5())) // zwraca "5!"


function zwrocImieINazwisko() {
    var obiekt = {
        imie: "Bartek",
        nazwisko: "Rudzki",
        wiek: 27,
        stanCywilny: "mąż"
    }

    return obiekt
}

console.log(zwrocImieINazwisko())

console.log(zwrocImieINazwisko().imie)
console.log(zwrocImieINazwisko().nazwisko)

var mojObiekt = zwrocImieINazwisko()
mojObiekt.imie = "Ola"

console.log(mojObiekt.imie)



