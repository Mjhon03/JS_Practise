const text_area = document.getElementById('area');
const btnToUpperCase = document.getElementById('btnUpper');
const btnToLowerCase = document.getElementById('btnLower');
const btnOneToUpperCase = document.getElementById('btnOnetoUpper');
const btnReset = document.getElementById('clean');

btnToUpperCase.addEventListener('click', ToUpper)
btnToLowerCase.addEventListener('click', Tolower)
btnOneToUpperCase.addEventListener('click', OneToUpper)
btnReset.addEventListener('click', Reset)

function ToUpper() {
    text_area.value = text_area.value.toUpperCase();
    text_area.focus();
}

function Tolower() {
    text_area.value = text_area.value.toLowerCase();
    text_area.focus();
}

function OneToUpper() {
    let text = text_area.value;
    let firstWord = text.split(' ');
    const newarr = firstWord.map(MaysPrimera)
    function MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    text_area.value = newarr.join( " " );
    text_area.focus();
}

function Reset() {
    text_area.value = '';
    text_area.focus();
}