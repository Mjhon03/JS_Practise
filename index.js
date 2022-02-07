//variables 
let numeor1 = 2;
var numero2 = 3;
let suma = numeor1 + numero2;
console.log(suma);

let bool = true;

if(bool==true){
    console.log(suma)

}
//costantes
const n = numero2;
let a;
//Objetos
let objecto = {
    nombre:"Jhon",
    edad:18
}
//Array
let colores = ["Blanco","Negro", "azul"]

objecto.correo = "mjhon1841@gmail.com";
colores.push("anaranjado");

//cadenas de texto

let nombre="Jhon";

console.log(nombre.toUpperCase());
//interpolacion de variables
//templates strings
let saludo =  '' `Mi nombre es ${nombre}`


//Valores null son aquellos que el programos determina que son nulos 
//valores indefinidos son aquellos que el propio javaScript tomo como nulos
// valores Nan aquellos fallos de logica por ejemplo sumar un strig con un Int

//funciones
let id = 1;
function funcion(id) {
    let nombre = "Jhon" + id;
    console.log(nombre);    

    return "Cadena de texto(Cualquier tipo de datos)"
}

//Invocacion de funciones
let idN=3;
funcion(idN);

// Arreglos
const a =[];
const b = [1, true, "hola" ["A","B","C"]];

colores.forEach(function (el, index) {
    console.log(`<li id="${index}"> ${el}</li>`);
});
//Objectos

let datos={
    nombre:"Jhon",
    apellido:"Montoya",
    edad:"18",
    pasatiempo:[
        "correr","Jugar volley", "Estudiar"
    ],
    soltero:true,
    contacto:{
        email:"Mjhon1841@gmail.com ",
        instagram:"Mjhon_03",
        telefono:"3137788585"
    },
    saludar: function () {
        console.log(`Hola`)
    },
    decirMiNombre:function() {
        console.log(`Hola mi nobre es ${this.nombre + this.apellido}`)
        console.log(`Hola mi nobre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.instagram} en instabram`)
    }
}
console.log(datos["nombre"]);
console.log(datos["apellido"]);
console.log(datos["pasatiempo"]);
//console.log(datos.saludar());
console.log(datos.pasatiempo);
console.log(datos.pasatiempo[1]);
console.log(datos.contacto.email);
datos.saludar();

console.log(Object.keys(datos));
console.log(Object.values(datos));
console.log(datos.hasOwnProperty("nombre"));


//Ciclos 
let contador = 0;
while(contador == 10){
    console.log(contador);
    contador++;
}
//al menos se ejecutara una vez todo el codigo y apartir de la segunda en adelante solo si la condicion se cumple
do{
    console.log("Do while " + contador);
    contador++;
} while(contador == 10);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //senticias que ejecuta el for 
}


function sumar( a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2,3,4,5,6,7,8,9,1,10,15,4,8,66,45,40));



//Aplicacion web (API)
function aplicacion() {
    this.empleado=document.getElementById("empleados");

}