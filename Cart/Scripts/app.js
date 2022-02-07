const main = document.querySelector('#principal-container');

const cart_colors = [];

create_Cards();
function create_Cards() {
  colors.forEach((color) => {
    const card = document.createElement('div');
    const title_card = document.createElement('h2');
    const button_card = document.createElement('button');
    const image_color = document.createElement('img');

    button_card.style.outline = '2px solid green';
    button_card.style.outlineOffset = '2px';
    button_card.setAttribute('id', color.id);
    button_card.addEventListener('click',agregarCarrito)
    button_card.textContent = 'Add';
    title_card.textContent = color.name.toUpperCase();
    image_color.src = color.img;    
    card.classList.add('card');
    card.style.backgroundColor = color.hex;

    if (color.hex === "#000000") {
      title_card.style.color = 'white';
    }

    card.appendChild(title_card);
    card.appendChild(image_color);
    card.appendChild(button_card);
    main.appendChild(card);    
  }); 
}

function agregarCarrito(event) {
  cart_colors.push(event.target.getAttribute('id'));
  pintarCarrito();
}

function  pintarCarrito () {
  cart_colors.forEach(id =>{
    const colorsAttributes = colors.filter(item=>{
      return parseInt(id) === item.id || parseInt(id) === item.id
    })
    const container_colors=document.createElement('div');
    const color = document.createElement('p');
    console.log(colorsAttributes);
  })
}



