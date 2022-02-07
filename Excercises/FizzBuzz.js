// Uno de los algoritmos de iniciación lógica, es el FizzBuzz.
// Donde dado un array con n elementos enteros, debes retornar la palabra fizz cuando el número sea divisible por 3, y buzz cuando sea divisible por 5.
// En esa medida, debes retornar FizzBuzz cuando el número sea divisible por ambos.

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function fizzBuzz(array) {
    const newArray = array.map(array => array%3===0 && array%5===0?'FizzBuzz':array%3===0?'fizz':array%5===0?'buzz':'No es divisible')
    console.table(newArray);
}

fizzBuzz(array);
