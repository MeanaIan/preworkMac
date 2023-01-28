// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);



function superList(comprar, marca, cantidad) {
  this.comprar = comprar;
  this.marca = marca;
  this.cantidad = cantidad;
}

var list = [];

for (var i = 0; i < 2; i++){
  var comp = prompt("Ingresa el producto");
  var marc = prompt("Ingresa la marca del producto");
  var cant = prompt("Ingresa la cantidad del producto");
  list.push(new superlist(comp, marc, cant));
}

for (i =0; list.length; i++) {
  console.log(list[i])
}