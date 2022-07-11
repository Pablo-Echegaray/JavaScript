export const PI = Math.PI;

/* export default function saludar() {
    console.log("Hola modulos +ES6");
} *///cuando exportamos por defecto lo que sucede es que en el archivo donde hariamos la importacion, no necesitamos justamente importar el modulo, sino que lo mandamos a llamar directamente y este se importara de manera automatica. Y notaremos que en el import que tengamos en nuestro modulo se autocompletara el nombre de aquello que estemos exportando por default.
//La exportacion por default solo puede suceder una vez.
//Si intentamos exportar por defecto una variable (expresada) y lo hacemos de la misma manera que veniamos haciendolo, nos llevara a un error, ya que una variable al ser una expresion, JS no sabe que va a estar almacenando (cuestion de hoisting ver clase 10 funciones). Por lo tanto el "export default" lo tenemos que poner no en la declaracion de la variable, sino en una siguiente linea, como si fueramos a reasignarle un valor ej:
let persona = "Pablo";
export default persona;
//Esto sucede solo con export default y no asi con export
