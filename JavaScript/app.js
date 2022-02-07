const userName = document.querySelector('#txt_name');
const userAge = document.querySelector('#txt_age');
const btnCalculate = document.querySelector('#btn_calculate')
const text = document.querySelector('#txt_vote');

btnCalculate.addEventListener('click', ageCalculate)

function ageCalculate() {

    const covert = parseInt(userAge.value);

    if(covert<18){
        text.textContent = `No puede votar señor(@) ${userName.value}`
    }
    if (covert>=18) {
        text.textContent = `Puede votar señor(@) ${userName.value}`

    } 
    if(covert<0)
    {
        text.textContent = `Dato invalido`
    }

}