import { PI } from "./constantes.js";
// ./ indica que estamos en la misma carpeta, si omitimos esto ira a buscar a la raiz del servidor y caeremos en un error.
import { aritmetica as calculos } from "./aritmetica.js";
//Por caso si no queremos utilizar el nombre del objeto, funcion , variable, etc importado por ser muy largo o lo que sea, podemos generarle un alias. nombre as alias. De este modo, a la hora de ejecutarlo usaremos el alias y no el nombre.

console.log(PI);

console.log(calculos.sumar(4, 5));
console.log(calculos.restar(11, 3));
//saludar(); //importado por default.
//si utilizamos "export", a la hora de importar necesitamos utilizar destructuracion "{}", si exportamos por default no necesitamos destructuracion.