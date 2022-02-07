const userName = document.querySelector('#name');
const card = document.querySelector('#card')
const validText = document.querySelector('#valid');
const btn = document.querySelector('#btnGen')
const usuario = /^[a-zA-Z0-9\_\-\ ]{0,30}$/;
let change = false;
userName.addEventListener('keyup',keyup)
function keyup() {
    if(usuario.test(userName.value)){
        validText.textContent = "Usuario Valido";
        change = true;
        validText.style.color = "green";
        validText.style.fontSize = "25px"
    }
    else{
        validText.textContent = "No se pueden usar caracteres especiales";
        change = false;
        validText.style.color = "red";
        validText.style.fontSize = "25px"
    }
}

btn.addEventListener('click',cardGet);
function cardGet() {
    if (change==true) {
        const elementDiv = document.createElement('div')
        const elementDiv2 = document.createElement('div')
        const elementh1 = document.createElement('h1')
        const elementh12 = document.createElement('h1')

        elementDiv2.appendChild(elementDiv);
        card.appendChild(elementDiv2);
        elementDiv.appendChild(elementh1);
        elementDiv2.appendChild(elementh12);

        elementh1.textContent = userName.value;
        elementh12.textContent= "Bienvenido al sistema";

        elementDiv2.style.height="400px"
        elementDiv2.style.width="500px"
        elementDiv2.style.boxShadow = "1px 1px 3px 2px red"
        elementDiv2.style.display = "flex"
        elementDiv2.style.justifyContent = "center"
        elementDiv2.style.alignItems = "center"
        elementDiv2.style.flexDirection = "column"

        elementDiv.style.height="300px"
        elementDiv.style.width="300px"
        elementDiv.style.borderRadius="100%"
        elementDiv.style.display = "flex"
        elementDiv.style.justifyContent = "center"
        elementDiv.style.alignItems = "center"
        elementDiv.style.boxShadow = "0px -2px 1px 1px black"
        
    }
}
