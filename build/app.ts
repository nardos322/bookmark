let numbers: number[] = [1,2];
let saludo: string = 'hola nahueel';
const temperatura:[number, string, number, string] = [20, "C", 23, 'F'];




type Predicate = (x: number, y: number) => boolean

let esMayorQue: Predicate = (x, y) => {
    if(x > y){
        return true
    }else{
        return false
    }
}

let resultado: Function;



const suma = (x: number, y: number):number => x + y



function squareSum(numbers: number[]){
    if(numbers[0] == undefined){
        return 0
    }else{
        let number = numbers.pop()
        return number == undefined? 0 : (number)**2 + squareSum(numbers);
    }
}


interface Book {
    id: number;
    title: string

}

const libro: Book = {
    id: 1,
    title: 'el principito'
}

const perro = {
    id: 1,
    name: 'homero'
}


function getFavoriteNumber(): number {
    return 25;
}

type Point = { x: number; y: number };
type P = keyof Point;

const a: P = 'x';


console.log('holaa')