// Array de libros
var libros = ["El principito", "Harry Potter", "Cien años de soledad", "1984", "Don Quijote de la Mancha"];

// Función para agregar un libro al final del array
function agregarLibro(libro) {
    libros.push(libro);
}

// Función para eliminar un libro por su posición en el array
function eliminarLibro(posicion) {
    if (posicion >= 0 && posicion < libros.length) {
        libros.splice(posicion, 1);
    } else {
        console.log("La posición especificada no es válida.");
    }
}

// Función para mostrar el libro en una posición específica
function mostrarLibrosEnPosicion(posicion) {
    if (posicion >= 0 && posicion < libros.length) {
        console.log("El libro en la posición", posicion, "es:", libros[posicion]);
    } else {
        console.log("No hay ningún libro en la posición especificada.");
    }
}

// Pruebas de las funciones
console.log("Libros antes de agregar:", libros);
agregarLibro("Orgullo y prejuicio");
console.log("Libros después de agregar:", libros);
eliminarLibro(2);
console.log("Libros después de eliminar el libro en la posición 2:", libros);
mostrarLibrosEnPosicion(3);
mostrarLibrosEnPosicion(10); // Intentando mostrar un libro en una posición que no existe
