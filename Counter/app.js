const counterNumber = document.getElementById('counter');
const imagen = document.getElementById('imagen');
const btnCounterUp = document.getElementById('counterUp');
const btnCounterDown = document.getElementById('counterDown');
const btnReset = document.getElementById('counterReset')
btnCounterUp.addEventListener('click', counterUp)
btnCounterDown.addEventListener('click', counterDown)
btnReset.addEventListener('click', reset)
let numer = 0 
function counterUp() {
    numer = numer + 1
    counterNumber.textContent = numer
}
function counterDown() {
    numer = numer - 1
    counterNumber.textContent = numer
}

function reset() {
    numer = 0
    counterNumber.textContent = numer
    
}
function filtro() {
    if (counterNumber.textContent - 0) {
        imagen.classList.toggle('filter')
    }    
    console.log('fdsf');
}
filtro()
