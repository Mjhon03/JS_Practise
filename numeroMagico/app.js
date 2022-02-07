const Valtext = document.getElementById('val')
const num = document.getElementById('number')

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let magicnum = getRandom(1,20);

num.addEventListener('keyup',validation)
console.log(magicnum);

function validation(keyboardEvent) {
    let cod = keyboardEvent.keyCode;
    console.log(cod);
    if (cod == 13) {
        if (num.value == magicnum) {
            Valtext.textContent = "Usted adivino el numero magico"
        }
        if (num.value < magicnum) {
            Valtext.textContent = "Es menor al numero magico"
        }
        if (num.value > magicnum) {
            Valtext.textContent = "Es mayor al numero magico"
        }
    }
}