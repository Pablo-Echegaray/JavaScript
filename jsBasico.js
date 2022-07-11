//Tipos de Datos :
//-Primitivos: Se accede directamente al valor => string, number, boolean, null, undefined, NaN.
//-Compuestos: Se accede a la referencia del valor => object{}, array[], function(){}, Class {}, Siymbol.

/* let nombre = "Pablo";
let apellido = "Echegaray";

//Concatenacion
let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);
//Interpolacion de variables
//Template Strings
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul =
  "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li><ul>";

console.log(ul);

let ul2 = `
<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>`;

console.log(ul2);*/
//****************************************************
//Cadenas de texto aka "Strings".
/* let nombre = "Pablo";
let apellido = "Echegaray";
let saludo = new String("Hola Mundo");
let lorem = " lorem ipsum, dolor, sit, amet consectetur.  ";
console.log(nombre, apellido, saludo);
console.log(nombre.length, apellido.length, saludo.length, nombre.toUpperCase(), apellido.toLowerCase(), lorem.includes("amet"), lorem.includes("pablo"), lorem.trim(), lorem.split(" "), lorem.split(",")); */
//el metodo split() transforma un string en un array. Aquello que le pasemos como parametro sera lo que tomara para separar el arreglo elemento por elemento.
//*******************************************************************
//Numbers
/*let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b);
console.log(c.toFixed(1)); //redondea un decimal 7.2
console.log(c.toFixed(5));
console.log(parseInt(c)); //devuelve solo el numero entero(sin redondear)
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + Number.parseInt(d));

//****************************************************

//Booleans

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);
console.log(Boolean(0)); //false
console.log(Boolean(-7)); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true

//Valores que tienden a verdadero
/*if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
fuente: https://developer.mozilla.org/es/docs/Glossary/Truthy */

//Valores que tienden a falso
/*if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
fuente: https://developer.mozilla.org/es/docs/Glossary/Falsy*/

//****************************************************

//Undefined, Null, NaN.
/*
let indefinida;
console.log(indefinida); //la variable se encuentra vacia y el navegador le asigna el valor "undefined"

let nulo = null;
console.log(nulo); //la variable se encuentra vacia pero intencionalmente tiene el valor "null" asignado por el programador.

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero); */

//****************************************************

//Functions  :
//=>Una funcion es un bloque de codigo autocontenido, es decir que tiene su propio contenido, independiente aL scope y al ambito global; que se va a definir una sola vez y se va a ejecutar en cualquier momento de manera reutilizable. Una funcion puede recibir o no  parametros y puede devolver o no valores. Pueden ser pasadas como argumentos (function as data), pueden ser retornadas como valor. Las funciones son objetos.

//Funcion declarada
/* function estoEsUnFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//Invocacion de funcion
estoEsUnFuncion();

function funcionQueDevuelveValor() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  return "La Funcion ha retornado un String";
}
let valorDeFuncion = funcionQueDevuelveValor();
console.log(valorDeFuncion);

function funcionQueDevuelveValor2() {
  console.log("Uno");
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "La Funcion ha retornado un String";
} //el navegador ejecutara lineas de cosigo hasta el primer return que encuentre(19) y el resto de las lineas las ignorara.

let valorDeFuncion2 = funcionQueDevuelveValor2();
console.log(valorDeFuncion2);

//Funciones que reciben parametros.
function saludar(nombre = "desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Vladi", 3);
saludar(); //en este caso al no recibir argumentos y siendo una funcion que espera parametros, lo que aparecera como valor de dichos parametros sera lo que le seteamos a cada argumento en param = valor.

//Funciones declaradas vs funciones expresadas
funcionDeclarada();

function funcionDeclarada() {
  console.log("Esta funcion puede invocarse en cualquier parte del codigo ");
}
//JavaScript lo primero que eleva son las variables y las funciones, por tanto, declares donde declares la funcion, JS va a hcer un hoisting de la funcion de manera que no importa si la invocacion de la funcion sucede antes de la declaracion de la misma.
//Esto sucede exclusivamente con las funciones declaradas.

//Funciones Expresadas   :
//funcion anonima
funcionExpresada();

const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir, una funcion que se le ha asignado como valor a una variable. Si invocamos esta funcion antes de su definicion, JS nos dira que no puede acceder a una funcion que no ha sido declarada. "
  );
}; */
//*****************************************************
//Arrays    :

/* const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b.lenght);
console.log(b[2]); //"Hola"
console.log(b[0]); //1
console.log(b[3]); //array
console.log(b[3][2]); //"C"
console.log(b[3][3][0]); //array: 1

const c = Array.of("X", "Y", "Z", 9, 8, 7); //ES2015. Con esta forma accedemos al prototipo de JS correspondiente a los arreglos, el constructor Array.()
console.log(c);

const d = Array(100).fill(false); //Le estamos diciendo que cree 100 elementos dentro de un array y que todos y cada uno de ellos valga false.

const e = new Array(1, 2, 3, true); //esta forma ha ido cayendo en des-uso.
console.log(e);

const colores = ["amarillo", "rojo", "azul"];
//agregamos un elemento al final del array:
colores.push("negro"); //["amarillo", "rojo", "azul", "negro"]
console.log(colores);

//removemos un elemento al final del array:
colores.pop(); //["amarillo", "rojo", "azul"]
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id= "${index}">${el}</li>`);
}); */ //el primer parametro corresponde a cada elemento del array, y el segundo al indice en el cual esta ubicado. Este indice a su vez se lo pasamos como id del elemento <li>.

//***************************************************
//Objetos   :
/* const c = new Object(); //en des-uso

const persona = {
  nombre: "Pablo",
  apellido: "Echegaray",
  edad: 25,
  pasatiempos: ["videojuegos", "malviajar", "criar"],
  soltero: false,
  contacto: {
    email: "xxxx@gmail.com",
    movil: "1111111111",
  },
  saludar: function () {
    console.log("Hola");
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  },
};

console.log(persona);

//Acceso a valores   :
//notacion de corchete
console.log(persona["nombre"]);
//notacion de punto
console.log(persona.apellido);
console.log(persona.contacto.email);
persona.saludar();
persona.decirMiNombre();
//La notacion de punto es la mas utilizada para el acceso a las propiedades y metodos de un objeto. En este objeto todo es una propiedad interna excepto "saludar" que es un metodo/funcion.
//Dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos.
console.log(Object.keys(persona)); // keys() es un metodo del prototipo Object (el objeto objeto de JS) que me permite listar todas las propiedades y llaves del objeto que le paso como parametro. Me forma un arreglo iterable donde en caa indice se encuentra una de las llaves que integran mi objeto.
console.log(Object.values(persona)); //Me forma un arreglo pero en lugar de darme las llaves internas de mi objeto, me da los valores de cada llaves y los ordena en indices de manera incremental.
console.log(persona.hasOwnProperty("nombre")); //lo que hace es buscar en el objeto la propiedad que le pasamos como parametro entre comillas, y nos devuelve un booleano que nos indica si la propiedad ser encunentra o no en el objeto.*/

//***************************************************

//Tipos de Operadores      :
//Aritmeticos: + - * / ()

/* let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2; //Esto me da 1. Ya que el operador % lo que me trae es el resto de una division entera, que no busca que el resto sea 0 sino simplemente dividir los numeros y el resto de la primer division lo asigna como resultado.

//Relacionales: >, <, >=, <=, ==, ===, !=, !==.

// = 1 igual es asignacion de valor a una variable
// == 2 iguales es comparacion de valores
// === 3 iguales es comparacion de valor y tipo de dato. Las buenas practicas sugieren utilizar siempre 3 iguales.
console.log(7 == 7)//true
console.log("7" == 7)//true
console.log(0 == false)//true

console.log(7 === 7)//true
console.log("7" === 7)//false
console.log(0 === false)//false

//Incremento y Decremento    :
let i = 1

i += 3 //4
i /= 3 //0.3333...
i *= 3 //3
i -= 3 //-2

//Operador Unario   :
i++ //aumenta de uno en uno.
i-- */ //decrementa de uno en uno.

//Operadores logicos    :
// ! not - lo verdadero lo vuelve falso y viceversa
// || or - pide que se cumpla almenos una condicion
// && and - deben cumplirse ambas

//*************************************************

//Estructura de control : permite controlar el flujo del programa. if-else, switch-case, operador ternario.

//Operador ternario : (condicion)? verdadero : falso
/* let edad = 25;
let eresMayor = (edad >= 18)
  ? "eres mayor"
  : "eres menor";
console.log(eresMayor)

//Estructuras de control: bucles/loops/ciclos
//while : en des-uso. Mientras se cumpla la condicion entre parentesis, se ejecutara una iteracion.
let contador = 0;
while (contador < 10) {
  console.log(contador)
  contador++;
}
//do-while: tambien en des-uso. Se ejecuta almenos una vez, y luego evalua si la condicion se cumple.
do {
  console.log(contador)
  contador++;
} while (contador < 10)

//for : es mas imperativo que el forEach.
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
} */
//for in : me va a permitir recorrer e iterar unicamente las propiedades de un objeto.
/* const humano = {
  nombre: "Pablo",
  apellido: "Echeg",
  edad: 25
}
//dentro de un for in la notacion de punto no nos va a servir para acceder a los valores de cada propiedad, por lo que tendremos que usar la notacion de corchete.
for (const prop in humano) {
  console.log(`Key: ${prop}, Value: ${humano[prop]}`);
}

//for of : me va a permitir recorrer todos los elementos de cualquier objeto que sea iterable.

let numeros = [10, 20, 30, 40, 50];//un array
for (const elemento of numeros) {
  console.log(elemento)
}

let cadena = "Hola Mundo"; //un String

for (const caracter of cadena) {
  console.log(caracter)
} */

//***************************************************
//Manejo de Errores : try-catch-finally => es una estructura que nos va a permitir evaluar ciertos fragmentos de codigo y cuando haya algun mensaje de error o nuestro codigo genere algun lanzamiento de error, se va a capturar en la parte del catch. Es una manera de ir trabajando y gestionando los errores.
/* try {
  console.log("En el try se agrega el codigo a evaluar");
  noExiste;
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}//si no hay error se ejecutara el try. El finally se ejecutara siempre que haya o no un error.
//una vez que se detecta el error en el try, este mismo deja de ejecutarse y automaticamente pasa al catch.

try {
  let numero = "y";
  if (isNaN(numero)) {
    throw new Error("El caracter ingresado no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`)
}*/
//isNaN: Es una funcion que nos devuelve true si el parametro que le pasamos no es un numero. Si es un numero nos devolvera false.
//***************************************************

//Break and Continue: no pueden ser utilizados, por ejemplos, en metodos como el forEach, presente en todo array, sino que deben ser utilizados en estructuras de control como un for, un while, un do while, switch-case, etc.
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}//la iteracion sucedera hasta que i valga 5(posicion 5 del array elemento n°6), cuando esto suceda el bucle se detendra, porque el break lo que hara sera salirse del for y no imprimira el valor, justamente, de la posicion 5 (n°6 del array).

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
} */ //Aqui sucedera que cuando i valga 5 (n°6 del array), omitira la impresion de tal elemento y seguira iterando e imprimiendo sobre el resto.
//***************************************************

//Destructuracion : cuando recibimos un array o un objeto y queremos que cada propiedad o valor se individualize en una variable, ahi es donde aplicamos la destructuracion para evitar escribir varias lineas de codigo.
/*
const numeros = [1, 2, 3];
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
//Sin destructuracion. Esta forma es funcional pero no optima.

//Con destructuracion.
const [one, two, three] = numeros;
console.log(one, two, three);
//De esta manera, cada valor del array numeros se guardara en cada una de las variables que le pasamos entre los corchetes consecutivos al constructor const y previo al signo de igual.

//Destructuracion de un objeto.
 const persona = {
  nombre: "Vladi",
  apellido: "Echeg",
  edad: 3,
};

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad); */
//para que la destructuracion funcione en los objetos, es importante que la variable que estamos creando se llame de igual forma que la propiedad interna del objeto.
//***************************************************

//Objetos Literales  :
/* let nombre = "Ali";
let edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guaaau")
  }
}
console.log(perro);
perro.ladrar()
//EcmaScript 6 : si la propiedad del objeto tendra como valor el de una variable que se llama igual que la propiedad interna del objeto, directamente colocamos solo el nombre de la propiedad. De esta manera agilizamos el proceso de escritura de nuestro objeto. En cuanto a los metodos, simplemente colocamos el nombre de la funcion y los posteriores parentesis y corchetes.
const dog = {
  nombre,
  edad,
  ladrar() {
    console.log("gruaaauuuuuuu")
  },
};
console.log(dog);
dog.ladrar(); */
//***************************************************

//Parametros REST & Operador Spread.
//Parametros REST: son una forma de virtualmente ir agregando parametros infinitos, ya sea a una funcion o dentro de una variable. Imaginemos que tenemos un array pero no sabemos cuantos valores vamos a recibir y posteriormente con esos valores vamos a hacer ciertas operaciones o ciertos procesos. Para definir los parametros REST lo hacemos anteponiendo "..." antes del nombre donde estan guardados esos posibles valores infinitos.

/* function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n
  });
  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5)); */
//si no le paso un tercer parametro, simplemente no lo toma para la ejecucion, esto no da error sino que la funcion sigue su curso normalmente. Si le paso un tercer parametro o mas, los ira sumando sin ningun problema gracias al operador REST.

//Operador Spread : nos va a permitir que cuando una expresion la tengamos que expandir en situaciones donde tengamos multiples, o tengamos que guardar o almacenar multiples argumentos o elementos, lo podamos hacer. Un caso muy util seria cuando tenemos un arreglo con cierto numero de elementos, pero en cierto momento recibes nuevos parametros. Entonces, en lugar de estar haciendo concatenaciones o push a nuestro array, simplemente lo que podemos hacer es agregarle con el Spread Operator, que al igual que el REST Operator, utiliza los "...". La diferencia es que en REST son los parametros que recibe una funcion, y el Spread se puede estar ejecutando en cualquier sentencia de nuestro codigo.

/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
const arr3 = [arr1, arr2];//nos da un array con dos elementos (c\u de los arrays)
const arr4 = [...arr1, ...arr2];//Spread
console.log(arr4) */ //nos devuelve un array con 10 elementos(mezcla los elementos de arr1 y arr2 en uno solo).
//***************************************************

//Arrow Functions : son una nueva forma de syntaxis de escribir funciones anonimas, pero funciones expresadas. A tener en cuenta la cuestion del hoisting que en las funciones expresadas JS no eleva la funcion por lo que si la llamada a la funcion expresada sucede antes de la linea de codigo donde la funcion fue seteada, esto nos devolvera un error.
/*
const sumar = (a, b) => a + b; //return implicito
console.log(sumar(4, 4));

const soloUnParam = (nombre) => console.log(`Hola ${nombre}`); //se omiten los () si recibe solo un param
soloUnParam("Ali");

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((el, index) => {
  console.log(`${el} esta en la posicion ${index}`);
});

function perro() {
  console.log(this);
} //this = window. La funcion pertenece al objeto global.

const perro2 = {
  nombre: "Ali",
  ladrar: function () {
    console.log(this); //this = obj perro2
  },
};

const perro3 = {
  nombre: "Ali",
  ladrar: () => {
    console.log(this); //this = window
  },
}; //Hay que tener mucho cuidado con utilizar arrow functions para declarar metodos dentro de objetos literales, porque podemos tener este problema de que no capture el contexto del metodo que deberia ser el objeto perro3, sino que directamente captura el objeto global window. Las arrow functions tienen la capacidad de saltarse el contexto en el que estan y heredar o reconocer el contexto donde se encuentra su objeto padre en el que ha sido declarado. Ademas, no es una buena practica crear un metodo dentro de un objeto literal con arrow function.

const perro3 = {
  nombre: "Ali",
  ladrar() {
    console.log(this); //this = obj perro3
  },
}; */ //Esta nueva sintaxis de ecmaScript 6 tambien reconoce el contexto actual del metodo.
//*************************************

//Prototipos  :
//POO  : Programacion Orientada a Objetos
//Clases - Modelo a seguir;
//Objetos - Instancia de una clase;
//Atributos - es una caracteristica o propiedad del objeto (son variables dentro de un objeto);
//Metodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto);

//-Los fundamentos de la programacion orientada a objetos se aplican de manera universal para todos los lenguajes; lo que cambia es la sintaxis. Hablando exclusivamente de JavaScript, a partir de 2015 ya tenemos lo que es la utilizacion de clases (ES6), pero que nada mas es una manera de simplificar la escritura de los prototipos. Realmente JS es un lenguaje orientado a objetos pero basao en prototipos no en clases, y aunque tengamos clases, cuando escribimos una lo que hace el compilador de JS (v8 en el navegador - node JS en el back-end) es transformar esa clase a una funcion prototipal.

//Prototipo : es un mecanismo por el cual un objeto puede heredar atributos y metodos de un objeto padre. De hecho la herencia en JS tambien se da mediante la cadena de prototipos, es decir que, hace una copia del prototipo en el cual esta basado. El prototipomas elemental, raiz de todo objeto es el __proto__ : object.

/* const animal = {
  nombre: "Leon",
  sonar() {
    console.log("Sonido animal");
  },
};
//De que manera puedo crear una nueva instancia de otro animal sin tener que copiar el codigo anterior?
//A partir de una Funcion Constructora. Las propiedades y los metodos de una funcion constructora deben "colgar" del objeto this.
function Animal(nombre, genitalidad) {
  //Atributos
  this.nombre = nombre;
  this.genitalidad = genitalidad;
  //Metodos
  this.sonar = function () {
    console.log("Sonido animal");
  };
}
//Ahora creamos instancias de objetos que contendran las propiedades y metodos de la funcion constructora.
const perro = new Animal("Ali", "Macho");
const gato = new Animal("Rayito", "Macho"); */
//La cuestion aca es que por cada nueva instancia de un objeto basado en nuestra funcion constructiora, vamos a tener una copia de nuestro metodo. Esto nos consumira memoria de una manera innecesaria, de modo que siempre es recomendable que, cuando el metodo va a ser el o los mismos para todas las instancias de objeto, lo ideal es que lo saquemos de la funcion constructora para llevarlo al prototipo de la misma.

//Metodos agregados al prototipo de la funcion constructora.
/* function Animal(nombre, genitalidad) {
  this.nombre = nombre;
  this.genitalidad = genitalidad;
}
Animal.prototype.sonar = function () {
  console.log("Sonido animal");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};
//De esta manera evitamos que cada nueva instancia este duplicando constantemente cada metodo, de manera que el metodo ahora se encontrara en el prototipo de cada nuevo objeto generado, ya que el objeto prototype de una funcion constructora constituye el prototipo de cada nueva instancia; de este modo optimizamos el rendimiento y el uso de memoria de nuestra aplicacion.
const perro = new Animal("Ali", "Macho");
const gato = new Animal("Rayito", "Macho");
console.log(perro);
console.log(gato); */
//**************************************************

//Modo Horacio Gutierrez.
//P.O.O Herencia prototipica :  una funcion constructora inferior hereda el prototype de la funcion constructora superior. Y generando metodos propios en la funcion constructora inferior, logramos que cada metodo se encuentre en su __proto__ generando una cadena de prototipos escalonada.
/* function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Persona.prototype.saludo = function () {
  console.log("Hola");
}

function Empleado(sueldo) {
  this.sueldo = sueldo;
}
//de esta manera nos quedan los metodos de cada funcion mezclados.
/* Empleado.prototype = Persona.prototype; */
//de modo que necesitamos que cada metodo este en un __proto__ diferente para generar escalones de protos.
/* Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.calcularSueldo = function () {
  console.log("calculamdo...")
};

let juan = new Empleado(100); */

//-------------------------------------------------

//Modo Jon Mircha
//P.O.O Herencia prototipica :
/* function Animal(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
Animal.prototype.sonar = function () {
  console.log("Sonido animal");
};

function Perro(nombre, edad, raza) {
  this.super = Animal;
  this.super(nombre, edad);
  this.raza = raza;
};

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
Perro.prototype.ladrar = function () {
  console.log("ladrido");
}

let ali = new Perro("Ali", 7, "Pitbull"); */

//**************************************************

//P.O.O EcmaScript 6(2015) Clases : sugar syntax.
//La instanciacion de un nuevo objeto correspondiente a la clase creada, debe realizarse luego de la construccion de la clase, ya que a diferencia de una funcion constructora, si coloco la instancia en una linea de codigo previa a la delaracion de la clase, me dara un error de "undefined".
/* class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  //Definicion de un metodo
  sonar() {
    console.log("Sonido animal");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
};


//--Herencia  :
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    //super() manda a llamar el constructor de la clase padre
    super(nombre, edad);
    this.raza = raza;
  }
  //sobreescribimos el metodo sonar de Animal
  sonar() {
    console.log("Mi sonido es un ladrido");
  }
  ladrar() {
    console.log("guaau guaaau");
  }
}

let ali = new Perro("Ali", 6, "Pitbull"); */

//****************************************************

//Metodos estaticos, getters y setters :
//Un metodo estatico es aquel que puedo ejecutar sin necesidad de haber instanciado un objeto perteneciente a una clase previamente. Se trata de anteponer la palabra "static" al nombre del metodo.
/* class Perro {
  constructor(nombre, edad, raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.tamanio = null;
  }

  sonar() {
    console.log("Mi sonido es un ladrido");
  }
  ladrar() {
    console.log("guaau guaaau");
  }
  static queEres() {
    console.log("Soy un canino, y mi manada se llama jauria.")
  }
  //metodo obtenedor(se acostumbra a anteponer "get" al nombre del metodo(getTamanio)). Y para indicar que es un metodo de obtencion anteponemos "get"(get getTamanio).
  get getTamanio() {
    return this.tamanio;
  }
  //para establecer un metodo que modifique el valor del objeto obtenido
  set setTamanio(tamanio) {
    this.tamanio = tamanio
  }
}
//al ser un metodo estatico puedo ejecutarlo desde la clase directamente, sin instanciar un objeto.
Perro.queEres();

let ali = new Perro("Ali", 6, "Pitbull");

//Setters y Getters : son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra calse. Nos van a permitir configurar valores para atributos que no han sido definidos sus valores previamente. JS a los metodos obtenedores, para su ejecucion, los convierte en atributos y propiedades, de manera que a la hora de ejecutar alguno de estos metodos, debemos obviar los parentesis.
console.log(ali.getTamanio);
ali.setTamanio = "mediano";
console.log(ali.getTamanio); */

//>>>>>>>>>>>>CODIGO LIMPIO<<<<<<<<<<<<<<<<<<
/* class Perro {
  constructor(nombre, edad, raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.tamanio = null;
  }

  sonar() {
    console.log("Mi sonido es un ladrido");
  }
  ladrar() {
    console.log("guaau guaaau");
  }
  static queEres() {
    console.log("Soy un canino, y mi manada se llama jauria.")
  }

  get getTamanio() {
    return this.tamanio;
  }

  set setTamanio(tamanio) {
    this.tamanio = tamanio
  }
}

Perro.queEres();

let ali = new Perro("Ali", 6, "Pitbull");
console.log(ali.getTamanio);
ali.setTamanio = "mediano";
console.log(ali.getTamanio); */
//****************************************************

//Objeto console :
/* console.log(console);
console.error("Error personalizado con objeto console.");
console.warn("Esto es un aviso");
console.info("Mensaje infromativo parecido al console.log");

let nombre = "Pablo",
  apellido = "Echegaray",
  edad = 25;

console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);//%s indica que recibe una cadena de texto, %d indica que recibe un number. Luego del texto separamos con coma e indicamos las variables que se ubicaran en el lugar de cada comodin correspondiente.
console.dir(document);
console.clear()//limpia la consola.
//Creamos un grupo parecido a una cadena de prototipos.
console.group("listado de cosas");//apertura
console.log("Cosa 1");
console.log("Cosa 2");
console.log("Cosa 3");
console.log("Cosa 4");
console.groupEnd();//cierre
//le indicamos que el grupo finalizo

console.table(Object.entries(console).sort());//generamos una tabla con cada entrada del obj console. Con .sort() lo ordenamos de manera alfabetica.

const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "b", "c", "d", "e"];
console.table(numeros);
console.table(vocales);
console.clear();
//Medir cuanto tarda un fragmento de codigo
console.time("Cuanto tarda mi codigo");//apertura
const arreglo = Array(100);

for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Cuanto tarda mi codigo");//cierre
console.log(arreglo);
console.clear();

//console.count nos dice cuantas veces se ejecuta determinado fragmento de codigo. Nos permite llevar un control en circunstancias donde algo no sucede como esperabamos.
for (let i = 0; i < 100; i++) {
  console.count("codigo for");
  console.log(i);
}
console.clear();

//console.assert() nos permite hacer pruebas unitarias de determinados fragmentos de codigo. "Testing".

let x = 3,
  y = 2,
  pruebaXY = "Se espera que x sea siempre menor a y";

console.assert(x < y, { x, y, pruebaXY }); */ //si en consola no visualizamos nada, quiere decir que todo salio bien.
//***************************************************

//Objeto Date :
/* console.log(Date());

let fecha = new Date();
//dia del mes
console.log(fecha.getDate());
//dia de la semana [d-s][0-6]
console.log(fecha.getDay());
//mes del año [ene-dic][0-11]
console.log(fecha.getMonth());
//Año en el que estamos
console.log(fecha.getFullYear());
//Hora minutos y segundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());//milisegundos
//EXtraer solo la fecha
console.log(fecha.toDateString());
//Hora local 00/00/00 0:00:00
console.log(fecha.toLocaleString());
//obtener solo la fecha
console.log(fecha.toLocaleDateString());
//obtener solo la hora
console.log(fecha.toLocaleTimeString());
//uso horario en el cual nos encontramos
console.log(fecha.getTimezoneOffset());
//getUTChours o cualquier metodo con UTC en el medio, nos da los datos del meridiano de greenwich.
console.log(fecha.getUTCHours());
//Saber cuantos segundos han pasado desde el 1 de enero de 1970 "fecha timestamp"
console.log(Date.now());//el timestamp es muy utilizado cuando se guardan registros en una base de datos.

//moment.js  : libreria para el manejo de los tiempos.

let cumplo = new Date(1995, 6, 1);
console.log(cumplo); */
//****************************************************

//Objeto Math : nos ayuda mucho para hacer operaciones matematicas especiales. Es un objeto estatico, por lo cual cada vez que vayamos a querer usarlo, solo debemos invocar al objeto, al prototipo (obviar parentesis).

/* console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));//devuelve el numero absoluto.
//redondear un numero
console.log(Math.ceil(7.4));//8 siempre redondeara el numero al numero posterior inmediato.
console.log(Math.floor(7.8));//7 siempre redondea hacia abajo.
console.log(Math.round(7.49));//redondea de manera normal.

//Sacar raiz cuadrada de un numero:
console.log(Math.sqrt(4))
//elevar potencias. 1° numero la base, 2° numero el exponente.
console.log(Math.pow(2, 5))//32
//para saber si un numero es negativo o entero
console.log(Math.sign(-7.8))//devuelve negativo : -1  neutro : 0  positivo : 1.
//random() nos devuelve un numero aleatorio entre 0 y 1
console.log(Math.random());
//Supongamos que necesitamos que esos numeros aleatorios sean entre 0 y 1000
console.log(Math.random() * 1000);
//redondeando
console.log(Math.round(Math.random() * 1000));//numero entero.
 */

//***************************************************

//Operador de cortocircuito :

//Cortocircuito OR : cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto.

/* function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar()

console.log("cadena" || "valor derecha");
console.log(19 || "Valor derecha");
console.log(0 || "Valor derecha");//imprime la derecha.

//Cortocircuito AND : cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto.
console.log(false && "Valor derecha");
console.log(null && "Valor derecha");
console.log("Valor derecha" && undefined); */
//****************************************************

//Funciones anonimas autoinvocadas : iife (inmediatly invoked function expression)

//cdn.js.com - esta pagina nos permite ver el codigo fuente de librerias que queramos ver.
//Luego de una funcion autoinvocada el uso de punto y coma al final de la expresion es obligatorio.

//Modo Clasico
/* (function (d, w, c) {
  console.log("IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log")
})(document, window, console);

//Version Crockford (JavaScript the good parts). Douglas Crockford creador del metodo JSON.
((function () {
  console.log("version Crockford")
})());

//Version Unaria
+function () {
  console.log("version unaria")
}();

//Version Facebook
!function () {
  console.log("Version Facebook")
}(); */
//*****************************************************

//Modulos (import / export) :  actualmente nosotros podemos hacer uso de los modulos en javaScript, esto quiere decir que podemos mandar a llamar un archivo.js no solo desde el html sino tambien desde un archivo JS interno se puede mandar a llamar otro. Y esto ya esta completamente soportado en los navegadores modernos.

//Para poder realizar las importaciones, en el <script> de nuestro html, debemos agregarle el atributo type con el valor "module", de lo contrario nos marcara error. <script src = "arch.js" type="module"></script>

//En caso de querer dar soporte a navegadores viejos, ya que estos no soportan importacion de modulos y la mayoria de las caracteristicas de +ES6, al <script> correspondiente al navegador viejo, debemos ponerle el atributo boolean nomodule. De manera que en navegadores modernos este <script src = "soporte.js" nomodule></script> no se cargara y de esta forma evitaremos que nos cargue dos veces un mismo codigo.

//Ordenamiento del codigo : 1- importacion de modulos 2- declaracion de variables 3- declaracion de funciones 4- ejecucion de codigo.

//La explicacion y la practica siguen en el archivo : modulos.js, constantes.js y aritmetica.js.
//==============================================================================
// Temporizadores : setTimeout() - setInterval()
/* console.log("comienza y finaliza el setTimeout");

setTimeout(() => {
  console.log("setTimeout");
}, 2000);

let intervalo = setInterval(() => {
  console.log("intervalo");
}, 3000);

let temporizador = setTimeout(() => {
  console.log("segundo setTimeout");
}, 2000);
console.log(intervalo);
console.log(temporizador);
clearTimeout(temporizador); //cancela el setTimeout
clearInterval(intervalo);  */ //cancela el setInterval
//====================================================================================
//clase 46  Callbacks :

/* function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 100)); //0 ms o un numero aleatorio
}

cuadradoCallback(5, (value, result) => {
  console.log(value, result);
}); */

//===========================================

//Clase 47 Promise : resolve() toma la resolucion positiva de la promesa - reject() la resolucion negativa de la misma - .then() lo que sucede luego de la resolucion positiva - .catch() lo que sucede luego de la resolucion negativa - Para seguir concatenando varios .then() debemos retornar la promesa.

//Los metodos resolve() y reject() son metodos estaticos por lo cual no necesito una nueva instancia para poder utilizarlos.

/* function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(2)
  .then((obj) => {
    console.log(`Valor: ${obj.value}, Valor al cuadrado: ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Valor: ${obj.value}, Valor al cuadrado: ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Valor: ${obj.value}, Valor al cuadrado: ${obj.result}`);
    return cuadradoPromise("6");
  })
  .catch((err) => console.error(err)); */

//============================================

// Clase 48 : Async Await = cada petición la puedo guardar en una variable, y esta variable sería una suerte de .then()

// await : le indica a la ejecucion de codigo que debe esperar el resultado para juastamente llevar a cabo la misma.

/* function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

//funcion asincrona declarada
async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function Declarada");
    let obj = await cuadradoPromise(2);
    console.log(`Async Function Decl: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function Decl: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function Decl: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("7");
    console.log(`Async Function Decl: ${obj.value}, ${obj.result}`);
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

//funcion asincrona expresada

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function Expresada");
    let obj = await cuadradoPromise(6);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(9);
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("11");
    console.log(`Async Function Exp: ${obj.value}, ${obj.result}`);
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada(); */
