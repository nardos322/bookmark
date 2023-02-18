"use strict";
let numbers = [1, 2];
let saludo = 'hola nahueel';
const temperatura = [20, "C", 23, 'F'];
let esMayorQue = (x, y) => {
    if (x > y) {
        return true;
    }
    else {
        return false;
    }
};
let resultado;
const suma = (x, y) => x + y;
function squareSum(numbers) {
    if (numbers[0] == undefined) {
        return 0;
    }
    else {
        let number = numbers.pop();
        return number == undefined ? 0 : (number) ** 2 + squareSum(numbers);
    }
}
const libro = {
    id: 1,
    title: 'el principito'
};
const perro = {
    id: 1,
    name: 'homero'
};
function getFavoriteNumber() {
    return 25;
}
const a = 'x';
console.log('holaa');
