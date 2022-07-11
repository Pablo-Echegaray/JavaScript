//A partir de html5 se pueden crear nuevos atributos en los elementos (data-atributtes). Para ello, es necesario que todos los atributos que vayamos a inventar contengan al principio de todo la palabra "data" seguido de un guion inmediatamente. "data-nuevoatributo".

//Clase 63: Atributos y data-attributes: como acceder a los atributos de nuestras etiquetas html.
/* 
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href); //nos trae el href junto con el puerto
console.log(document.querySelector(".link-dom").getAttribute("href")); //nos trae solo el href
//---------------------------------------------
document.documentElement.lang = "en"; //cambiamos el idioma
document.documentElement.setAttribute("lang", "es"); //primer parametro el atributo, segundo parametro el nuevo valor del atributo.
//------------------------------------------------
//Por convencion, cuando guardamos un elemento del DOM en una variable, al nombre de la variable se le suele anteponer el signo "$".(y podemos utilizar el constructor const)

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank"); //nos abre una nueva pestaña
//Cuando abrimos una nueva pestaña podemos controlarla, por lo que para evitar que estemos en una pestaña insegura y corramos cierto riesgo de ser hackeados, es de buenas practicas utilizar el siguiente atributo:
$linkDOM.setAttribute("rel", "noopener"); //Este atributo hace que no haya una dependencia entre la ventana que estamos abriendo y la ventana de origen.
$linkDOM.setAttribute("href", "https://youtube.com");

//Validar la existencia de un atributo:
console.log($linkDOM.hasAttribute("rel")); //true

//remover un atributo
$linkDOM.removeAttribute("target");
//--------------------------------------------------
//Data-Attributes : cada data-attribute es guardado como propiedad de un tipo de dato Map.
console.log($linkDOM.getAttribute("data-description")); //nos devuelve el valor del atributo
console.log($linkDOM.dataset); //nos devuelve el atributo en su forma de objeto Map.
//cambiar los valores:
$linkDOM.setAttribute("data-description", "Modelo de Objeto");
$linkDOM.dataset.description = "DOM";
console.log($linkDOM.dataset.description);
 */
//===========================================
//Clase 64: DOM =>Estilos y variables CSS.

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style); //nos devulve todo el mapeo
console.log($linkDOM.getAttribute("style")); //unicamente nos trae las propiedades que fueron seteadas
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));
//nos devuelve un mapeo similar al .style epro debemos pasarle como parametro el elemento particular. A diferencia de .style que las propiedades que no fueron seteadas estan vaicas " ", getComputedStyle() nos va a mostrar el valor por defecto que le es asignado a cada propiedad sin setear, por el navegador.
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color")); // nos devuelve exclusivamente la propiedad color

//Asignar valores
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

//Variables CSS Custom Properties:
//Todas las variables que vayamos a crear en css deben contener el prefijo --

const $html = document.documentElement;
//:root - etiqueta HTML
const $body = document.body;

//creo las variables js que contendran mis custom properties
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor);
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor);
console.log(varYellowColor);

//Le asigno al body los valores de mis custom Properties
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//cambiar el background color asignado reasignando valores

//le asigno a la custom property --dark-color el nuevo valor de "pink"
$html.style.setProperty("--dark-color", "#000");
//vuelvo a tomar --dark-color (ahora con el nuevo valor) y se la asigno a varDarkColor
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//tomo el body y desde style seteo la propiedad css "backgound-color" con su nuevo valor que sigue siendo mi variable varDarkColor pero con su nuevo valor.
$body.style.setProperty("background-color", varDarkColor); */
//  o la propiedad style -->
/* $body.style.backgroundColor = varDarkColor; */

//_____________________________________________________________________________________
// Clase 65 : DOM Clases CSS
/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); //nos devuelve el valor del atributo class
console.log($card.classList); //nos devuelve un DOMTokenList (similar a un array) con todas las clases del elemento
console.log($card.classList.contains("rotate-45")); //nos devuelve un booleano en base al parametro que le pasamos (si lo contiene o no)
$card.classList.add("rotate-45"); //le agrego una clase
console.log($card.classList.contains("rotate-45")); //true
$card.classList.remove("rotate-45"); //remuevo una clase
$card.classList.toggle("rotate-45"); //si tiene la clase se la remueve, si no la tiene se la agrega
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

$card.classList.replace("rotate-45", "rotate-135"); // este metodo reemplaza una clase por otra. replace(clase a reemplazar, nueva clase)
$card.classList.add("opacity-80", "sepia"); //agregamos varias clases al mismo tiempo
$card.classList.remove("opacity-80", "sepia"); //funciona igual a add
$card.classList.toggle("opacity-80", "sepia"); */ //agregando o sacando varias clases al mismo tiempo

//________________________________________________________________________________________

//Clase 66 : DOM Texto y HTML

const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML
</p> 
<p>
 provee una representacion estructural del documento, permitiendomodificar su contenido y presentacion visual mediante codigo JS
</p>
<p>
<mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores
</p>`;

//$whatIsDOM.textContent = text; //innerText fue creado para internet explorer, no es standard //si es standard

//$whatIsDOM.innerText = text;
$whatIsDOM.innerHTML = text; //agrega text al interior del nodo (como innerText)

$whatIsDOM.outerHTML = text; /* $eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Pablo");
}); */ /* const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo con Manejador de Eventos Multiple");
  console.log(e);
  console.log(e.type); // "click"
  console.log(e.target); //<button></button>
}); */ /* const $eventoRemover = document.getElementById("evento-remover");

//funcion expresada
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true; //atributo html que despinta un boton
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); */ /* function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

$eventoMultiple.addEventListener("click", saludar); */ /* const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el evento lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

console.log($divsEventos); */ /* $divsEventos.forEach((div) => {
  //Fase de burbuja: del elemento mas interno al mas externo
  //div.addEventListener("click", flujoEventos);//false implicito
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura: del elemento mas externo al mas interno
  //div.addEventListener("click", flujoEventos, true);
  //true or false como tercer parametro hace referencia a la fase de burbuja y la fase de captura. Tambien se le puede pasar un objeto:
  div.addEventListener("click", flujoEventos, {
    capture: true,
    once: true, //este hace que el evento se ejecute una sola vez(con captura)
  });
});
 */ /* const $linkEventos = document.querySelector(".eventos-flujo a");

$linkEventos.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  alert("Hola esto es cancelacion de propagacion de eventos");
}); */ //reemplaza el nodo por el contenido de text //buscara al ancestro(hacia arriba) mas cercano que cumpla con el parametro. De no encontrar ninguno devolvera null //________________________________________________________________________________ //esta funcion reemplazara a la funcion holaMundo //esto nos devolvera "hola [object-mouse-event]" dado que al ser saludar la manejadora del evento no puede recibir mas parametros que el propio evento. //--------------------------------------------------------------------- //Pero a partir de las arrow functions (o funciones lambda) esto se puede arreglar, aunque tambien se puede solucionar con una funcion anonima. Entonces simplemente envolvemos la funcion en una arrow function y de este modo la arrow function sera la funcion manejadora del evento. //Para evitar los limites de los eventos de tipo semantico tenemos addEventListener() que nos permite levantar un escuchador u observador de eventos. Nos permite un manejo multiple. Si asignamos mas de una funcion al mismo evento, todas seran ejecutadas en el orden correspondiente. //---------Manejador Multiple------------------------------- //Para remover un evento la funcion manejadora debe ser una funcion que este previamente guardada, ya que el evento removeEventListener recibe obligatoriamente dos parametros (el primero el tipo de evento a remover, el segundo el la funcion manejadora) y la funcion manejadora no podrá ser una arrow function ni una funcion anonima. //________________________________________________________________________________ //__________________________________________________________________________________________________________________________________________ // Clase 73 - DOM: Eventos con Parametros y Remover Eventos. // Clase 74 - DOM: Flujo de Eventos (burbuja y captura) // Toda funcion que vaya a ser manejadora de eventos no puede recibir mas parametros que el evento en sí. // Una vez que un evento se origina tiene una propagacion a lo largo del DOM, por defecto esa propagacion se va dando desde el elemento mas interno hacia el elemnto mas externo que en este caso es el document. Esa fase se llama fase de burbuja. //funcion declarada //tomo todos los divs del section .eventos-flujo //________________________________________________________________________________________________________________ //Clase 75 - DOM: stopPropagation & preventDefault //____________________________________________________________________________________________________________
//____________________________________________________________________________________
// Clase 67 DOM Traversing : Recorriendo el DOM
//DOM Traversing son una serie de metodos que nos permiten recorrer elementos del DOM. Exiten metodos como childNode o parentNode que ademas de recorrer los elementos son capaces de recorrer cada nodo, como por ejemplo, comentarios, indentaciones, saltos de linea, etc. Propiedades como children o parentElement recorren unicamente elementos HTML y no reconocen todo lo demas

/* const $cards = document.querySelector(".cards");
console.log($cards.childNodes); //nodos hijos
console.log($cards.children); //hijos elementos
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild); //#text, nos devolvera el salto de linea
console.log($cards.firstElementChild); //nos devuelve el primer elemento
console.log($cards.lastElementChild); //ultimo elemento
console.log($cards.previousElementSibling); //elemento hermano previo
console.log($cards.previousSibling); //#text
console.log($cards.nextElementSibling); //proximo elemento hermano
console.log($cards.children[3].closest("section")); */
//______________________________________________________________________________
//Clase 68 - DOM: Creando Elementos y Fragmentos

/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"), //nos crea un nodo de texto, el parametro sera el texto interno
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//creando elementos con innerHTML
$figure2.innerHTML = `
<img src = "https://placeimg.com/200/200/people" alt ="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//---------------------------------
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>"); //no es buena practica el document.write
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});
//Utilizando innerHTML
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

//Si bien las implementaciones son correctas, no lo son desde el punto de vista del rendimiento optimo de la aplicacion, ya que estamos renderizando y en consecuencia recargando la pagina por cada elemento que se va creando a partir de las iteraciones. Para mejorar la perfomance vamos a utilizar el fragmento.

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();
document.write("<h3>Meses del año</h3> ");

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

//____________________________________________________________________________________

// Clase 69 - DOM: Templates HTML

//<template></template> : es uns etiqueta nueva a partir del standard HTML 5, que es una suerte de modelo a seguir donde se estructura un contenido HTML el cual luego se convertira en dinamico, con JavaScript. Es otra forma de interactuar con el DOM. La etiqueta template, es una etiqueta que no se visualiza en pantalla. VueJS y Sbelt utilizan templates para generar codigo html dinamico, mientras que react uitiliza JSX.

/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  //porque lo que nos interesa es el contenido del template, no la etiqueta en si.
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment); */

//Dado que el template es unico, ya que tenemos una sola etiqueta en el HTML, entonces si utilizariamos ese template para la primer tarjeta, ya no estaria disponible para las demas. De manera que lo que debemos hacer es clonar dicho nodo, porque al ser solo de referencia, lo que debemos hacer es clonar la estructura para volver a utilizarla. La clonacion la realizamos con : document.importNode(nodo, true/false) - si como segundo parametro le indicamos "true" nos clonara toda la estructura interna del nodo, si le pasamos "false" solo nos clonara la apertura y el cierre de la etiqueta del nodo.

//____________________________________________________________________________________

// Clase 70 - DOM: Modificando Elementos (Old Style)

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //si no le pasamos true, solo nos clonara la etiqueta y no su contenido.

$newCard.innerHTML = `
<img src = "https://placeimg.com/200/200/any" alt = "Any">
<figcaption>Any</figcaption>
`;
//le agrego la clase
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//primer parametro nuevo elemento, segundo parametro elemento a reemplazar

//$cards.insertBefore($newCard, $cards.firstElementChild);
//inserta el elemento (primer parametro) antes del elemento de referencia (segundo parametro). A diferencia de replace el nodo no es reemplazado.

//$cards.removeChild($cards.lastElementChild); //elimino el ultimo hijo de las tarjetas

document.body.appendChild($cloneCards); */
//____________________________________________________________________________________

//Clase 71 - DOM : Modificando Elementos (cool style)

/*insertAdjacent...
  .insertAjacentElement(position, elemento(nodo del DOM));
  .insertAdjacentHTML(position, contenidohtml);
  .insertAdjacentText(position, text);

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)  
*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
 */
/* $newCard.innerHTML = `
<img src = "https://placeimg.com/200/200/any alt="Any">
<figcaption> Any </figcaption>
`; */

/* let $contenCard = `
<img src = "https://placeimg.com/200/200/any alt="Any">
<figcaption></figcaption>
`; */

//$newCard.classList.add("card");

//$cards.insertAdjacentElement("beforebegin", $newCard);//la inserta antes del section .cards

//$newCard.insertAdjacentHTML("beforeend", $contenCard);
//$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//$cards.insertAdjacentElement("afterbegin", $newCard); //la inserta como primer hijo del section

//$cards.insertAdjacentElement("beforeend", $newCard); //se agrega como ultimo hijo

//$cards.insertAdjacentElement("afterend", $newCard); //se agrega luego del section

//$cards.prepend($newCard); //inserta un elemento al principio del nodo seleccionado (como primer hijo)
//$cards.append($newCard); //se agrega como ultimo hijo del nodo seleccionado
//$cards.before($newCard); //lo agrega como hermano anterior del nodo seleccionado (al cual se le aplica el metodo)
//$cards.after($newCard); //se agrega como hermano posterior del nodo seleccionado

//__________________________________________________________________________________________________________________________________________

// Clase 72 - DOM : Manejadores de Eventos.

//El manejador de eventos o Event Handler, es aquella funcion que se ejecuta al dispararse un determinado evento.

//La semantica aqui tiene que ver con una coherencia del significado del codigo. Definicion de variable + funcion handler + evento. En un evento semantico se iguala el metodo del evento de la variable al nombre de la funcion a ejecutar sin parentesis. La limitante de los eventos semanticos es que por cada evento solo puedes ejecutar una funcion.
/* function holaMundo(e) {
  alert("Hola Mundo");
  console.log(e);
} */
//-----------Manejador Semantico----------------------------------
/* const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("Hola mundo con funcion anonima");
  console.log(e);
}; */

//________________________________________________________________________________________________________________________________________________

//Clase 76 - DOM: Delegación de Eventos -> Es la forma en la cual aplicamos un solo addEventListener al document y estara escuchando a cual nodo se le aplico determinado evento, de manera que con un solo evento podremos aplicar multiples eventos a los distintos elementos contenidos en nuestro document.

//matches() busca un nodo del dom que le pasemos como parametro (entre comillas) y lo retorna.
//stopPropagation() ya no sera necesario ya que no hay nodos padres por encima del document.

document.addEventListener("click", (e) => {
  console.log("Click en", e.target); //nos deveulve el nodo al cual le dimos click
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert("Delegando Eventos");
    e.preventDefault();
  }
});
//el this sera window, dado que document cuelga del BOM
function flujoEventos(e) {
  console.log(`Hola te saluda ${this}, el evento lo origino ${e.target}`);
}

//____________________________________________________________________________________________________________________________________________

// Clase 77 - BOM: Propiedades y Eventos

/* console.log(window.innerHeight); //Alto de la pantalla la parte visible sin contar la barra de tareas ni la consola de desarrollador
console.log(window.innerWidth); //Ancho de la pantalla la parte visible sin contar la barra de tareas ni la consola de desarrollador
console.log(window.outerHeight); //Alto completo de la ventana del navegador
console.log(window.outerWidth); //Ancho completo de la ventana del navegador

window.addEventListener("resize", (e) => {
  console.clear();
  console.log("*****Evento Resize*****");
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerHeight);
  console.log(window.outerWidth);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*****Evento Scroll*****");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

//El evento load para dispararse esperara a que se cargue cada una de las etiquetas html, cada una de las hojas de estilo, los scripts, y demas.
window.addEventListener("load", (e) => {
  console.log("*****Evento Load*****");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

//Un evento similar al "load" pero de document --> es mas rapido que el "load". Es mas eficiente cuando trabajamos peticiones asincronas ya que no esperara a que carguen las hojas de estilo, las imagenes, los srcipts, etc; sino que se disparara de inmediato. DOMContentLoaded es mucho mas apropiado para inicializar aquellas cosas que queremos que sucedan al inicio de la carga de la pagina.

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("*****Evento DOMContentLoaded*****");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
 */
//_________________________________________________________________________________________________________

// Clase 78 - BOM: Métodos

//El Browser Object Model no es un standard por lo cual los metodos no son iguales en todos los navegadores.

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");
//por caso si quisieramos cerrar una ventana que abrimos adicionalmente, debemos guardar una referencia.
let ventana;
$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
  //window.close(); //no es buena practica cerrar la ventana en la cual estamos
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  window.print();
});

//_________________________________________________________________________________________

// Clase 79 - BOM: Objetos: URL, Historial y Navegador

console.log("*****Objeto URL (location)");
console.log(location);
console.log("origin", location.origin);
console.log("protocol", location.protocol);
console.log("host", location.host);
console.log("hostname", location.hostname);
console.log("port", location.port);
console.log("href", location.href);
console.log("hash", location.hash); //nos ayuda a detectar el valor de una url que esta despues de un hash (en frameworks como Angular se utiliza mucho para hacer sus rutas amigables)
console.log("search", location.search); //detecta parametros pasados por URL.
console.log("pathname", location.pathname);

console.log("*****Objeto Historial (history)*****");

console.log(history);
console.log(history.length); //nos dice la cantidad de paginas por la cual navegamos

console.log("*****Objeto Navegador (navigator)");

console.log(navigator);
console.log("geolocation", navigator.geolocation);
console.log("connection", navigator.connection);
console.log("mediaDevices", navigator.mediaDevices);
console.log("mimeTypes", navigator.mimeTypes); //formatos que dependiendo del navegador web soportan
console.log("onLine", navigator.onLine); //eventos cunado el usuario pierde la conecion (como el dinosaurio de chrome)
console.log("serviceWorker", navigator.serviceWorker); //convertir la aplicacion web en una api de escritorio nativa
console.log("storage", navigator.storage); //api de almacenamiento
console.log("usb", navigator.usb); //capacidad de detectar dispositivos usb
console.log("userAgent", navigator.userAgent); //capacidad de detectar la plataforma desde la cual el usuario se conecta

//_______________________________________________________________________

// Clase 80 en adelante - Ejercicios en carpeta Ejercicios
