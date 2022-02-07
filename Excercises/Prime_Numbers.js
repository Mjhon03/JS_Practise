// Array de números de 1 a n
// Retorne un Array de números primos desde 1 hasta n.

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function primos(array) {
    const arrayNew =[];
    for (let x = 0; x < array.length; x++) {
        let con =0;
        for (let i = 1; i < array.lenght; i++) {
            if (array[x]%i===0) {
                con = con + 1;
            }
        }
        if (con == 2) {
            arrayNew.push(array[x]);
        }
    }
    console.log(arrayNew);
}

primos(array);