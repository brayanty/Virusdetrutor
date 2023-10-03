// Definición de la estructura del nodo
class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

// Función para agregar un nodo a la pila
function virusEjecutadorColance(pila, n) {
    const nuevoNodo = new Nodo(n);
    nuevoNodo.siguiente = pila;
    pila = nuevoNodo;
    return pila;
}

// Función principal
function virus(){
    let pila = null;  // Inicializamos la pila
    let dato = 9999;
    // let numeroContador = 0;

    while (true) {
        document.write("Ejecutando virus :");
        document.write("VIRUS INSERTADOS EN SU COMPUTADORA JAJAJAJAJAJJ: -> ");

        pila = virusEjecutadorColance(pila, dato);
        // numeroContador++;

        // if (numeroContador >= 1000) {
        //     break;
        // }
    }
}
