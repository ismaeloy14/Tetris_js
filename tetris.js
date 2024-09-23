const ancho = 10;
const alto = 24;
let tabla = [];

for (let i = 0; i < alto; i++) {
    tabla[i] = [];
    for (let j = 0; j < ancho; j++) {
        tabla[i][j] = 0;
    }
}

// Crear un canvas y obtener el contexto 2D
const tablero = document.getElementById("tablero");
tablero.height = alto * 24;
tablero.width = ancho * 24;
var ctx = tablero.getContext("2d");

// Dibujar la tabla en el canvas
for (var i = 0; i < 24; i++) {
    for (var j = 0; j < 10; j++) {
      ctx.fillStyle = 'gray'; // Color de fondo de la celda
      ctx.fillRect(j * 24, i * 24, 24, 24); // Dibujar la celda
      ctx.strokeStyle = 'black'; // Color del borde de la celda
      ctx.strokeRect(j * 24, i * 24, 24, 24); // Dibujar el borde de la celda
    }
}