let nombre= "Bienvenido";
let visita = 0;
let existe= false;
let duda= undefined;
let nada= null;
let numero1= 4;
let numero2= 40;
let edad=0;

alert(nombre + " eres la visita numero " + (visita + 1) );

alert(numero1+numero2);

edad=prompt("Inserte su edad porfavor")

if(edad>17) { alert("Proceda porfavor")
}else{
    alert("Lo siento, no tiene la edad requerida")
}

console.log= (nombre + visita + existe + duda + nada);

/*---------------------Actividad6*/

function Sumatoria (){
    let resultado = 4+5+6
    console.log=(resultado);
}
Sumatoria();

function Comparacion (){
    let resultado = 5>6
    console.log=(5>6);
}
Comparacion();

const ArrowSumatoria = () => console.log(4+5+63);

const ArrowComparacion = () => console.log(6>7);


const Computadora = {
    gabinete: "Corsair",
    procesador: "AMD 2600",
    tarjetagrafica: "Nvidia 3060Ti",
    memoriaRAM: "16 GB DDR4",
    Almacenamiento: "SSD 1Tb",
    Fuentedepoder: "750W Evga Gold",
}

InventarioTienda.push(Computadora);

const {gabinete, procesador, tarjetagrafica} = Computadora;

console.log(gabinete, procesador, tarjetagrafica);


const Arreglo = ["Hola, tu pedido con numero", 4728, "se encuentra en camino, que incluye", pedido={componentes: "Tarjeta grafica 3060Ti de 6GB", precio: 20000}, despedida= ["Gracias por su preferencia", "Que tenga un excelente dia"]];

console.log(Arreglo);

console.log(Arreglo[1]);

console.log(Arreglo[4].componentes);

console.log(Arreglo[3][0]);