/*
let myFirstFunction = (name, greeting) => {
    console.log( greeting + "! Mam na imię " + name + "!");
};

myFirstFunction("Ola", "Hej");
myFirstFunction("Bartek", "Dzień dobry");

let multiply = (liczba) => {
    console.log(liczba * 2)
};

multiply(2);

let multiply2 = (liczba, liczba2) => {
    console.log(liczba * liczba2);
};

multiply2(2, 4);

let multiply3 = (liczba) => {
    console.log(liczba*liczba);
};

multiply3(3);

let car1 = {
    markaPojazdu: "Fiat",
    modelPojazdu: "Punto",
    rokProdukcji: "2021"
};
*/

/*
let bool = 5 < 2;
console.log(bool);

let bool2 = 1===1;
console.log(bool);

let bool3 = 1 !== 1;
console.log(bool);

let bool4 = "ola" === "ola";
console.log(bool);

let isBiggerThan10 = (number) => {
    if(number > 10) {
        console.log("liczba jest większa od 10");
    }

    else {
        console.log("liczba nie jest większa od 10");
    }
};

isBiggerThan10(5);



let divide = (number1, number2) => {

    if(number2 === 0) {
        console.log("operacja zła");
    }
    else {
    console.log(number1/number2);
    }
}

divide(6,0); 



let circleLenght = (radius) => {
    console.log(2*radius*3.14);
}

for(let i = 1; i <= 20; i++) {
    circleLenght(i);
}

*/

let nOddNumbers = (n) => {

    for(let i=1; i <= n; i++) {
        console.log(2*i-1); 
    }
}

nOddNumbers(5);
nOddNumbers(3);