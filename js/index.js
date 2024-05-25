let usuario = "Jab"; // Se declara la variable `usuario` y se le asigna el valor "Jab".
let productoComprado = 0; // Se declara la variable `productoComprado` y se le asigna el valor inicial 0.
const DESCUENTO = 0.1; // Se declara la constante `DESCUENTO` con el valor 0.1 (10%).
let precioDescuento; // Se declara la variable `precioDescuento` para almacenar el precio con descuento.
const PRODUCTOS = [ // Se define un array constante `PRODUCTOS` que contiene objetos con información de productos.
  {
    producto: "Pantalón", // Nombre del producto.
    precio: 10, // Precio del producto.
    talla: "m", // Talla del producto.
    imagen: "pantalon.jpg" // Ruta de la imagen del producto.
  },
  {
    producto: "Gorra", // Nombre del producto.
    precio: 5, // Precio del producto.
    talla: "s", // Talla del producto.
    imagen: "gorra.jpg" // Ruta de la imagen del producto.
  }
];

/*
  Función que se encarga de calcular el descuento y almacenarlo en la variable `precioDescuento`.
*/
function calcularDescuento() {
  precioDescuento = PRODUCTOS[productoComprado].precio * DESCUENTO; // Se calcula el descuento.
  return precioDescuento; // Se retorna el valor del descuento.
}

/*
  Función que calcula el precio final del producto (precio - descuento).
*/
function calcularPrecio() {
  return PRODUCTOS[productoComprado].precio - precioDescuento; // Se calcula el precio final.
}

// Se inserta el HTML en el body utilizando document.querySelector.
document.querySelector("body").innerHTML = `
  <h1>${usuario}</h1> <section class="caja"> <div>
      ${PRODUCTOS[productoComprado].producto} (${PRODUCTOS[productoComprado].precio} €) </div>
    <div>Descuento: ${calcularDescuento()} € </div>
    <div>
      <strong>
        Precio final: ${calcularPrecio()} € </strong>
    </div>
    <div>
      Talla: ${PRODUCTOS[productoComprado].talla.toUpperCase()} </div>
    <img src="img/${PRODUCTOS[productoComprado].imagen}" alt="${PRODUCTOS[productoComprado].nombre}"> </section>
`;

    // Declaración de variables: Se explica el propósito de cada variable (usuario, productoComprado, DESCUENTO, precioDescuento).
    // Definición de constantes: Se aclara que DESCUENTO es una constante.
    // Array de productos: Se describe el contenido del array PRODUCTOS y los atributos de cada objeto producto.
    // Funciones: Se explica en detalle la funcionalidad de las funciones calcularDescuento y calcularPrecio.
    // Inserción de HTML: Se comenta el código HTML que se genera dinámicamente para mostrar la información del producto seleccionado.