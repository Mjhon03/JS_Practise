const userName = document.querySelector('#txt_name');
const userAge = document.querySelector('#txt_age');
const btnCalculate = document.querySelector('#btn_calculate')
const text = document.querySelector('#txt_vote');

btnCalculate.addEventListener('click', ageCalculate)

function ageCalculate() {
    
    let date_birthday = userAge.value.split('-');
    let current_date = new Date();

    let year = current_date.getFullYear();
    let month =current_date.getMonth();
    let day = current_date.getDate();

    let currentMonth = 12-(month+1);
    
    let restYear = date_birthday[0]-year;
    let restmonth = date_birthday[1]-(month+1);
    let restDay = date_birthday[2]-day;
    
    if( restYear >= -18){
        if (restmonth <= currentMonth ) {
            if (restDay < 0) {
                text.textContent = `${userName.value} Puede votar`
            }
            else{
                text.textContent = `${userName.value} No puede votar `
            }
        }
    }
    else{
        text.textContent = `${userName.value} puede votar`
    }
}