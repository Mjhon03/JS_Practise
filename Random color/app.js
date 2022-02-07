const container = document.querySelector("#container")
const btn = document.querySelector("#btn")

btn.addEventListener('click', getNewColor)

function getNewColor(){
    var symbols,color;
    symbols = "0123456789ABCDEF";

    color = "#";
    for(var i=0; i<6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    container.style.backgroundColor = color;
}

