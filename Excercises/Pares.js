// Retorne un array con los números pares del 1 al n.tomados de un array

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function pares(array) {
    const newArray = array.filter(array => array%2===0)
    console.log(newArray);
}

pares(array);