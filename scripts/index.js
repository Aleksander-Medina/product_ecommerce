/*/let nombre= "Bienvenido";
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

/*---------------------Actividad6-------------------------

function Sumatoria (){
    let resultado = 4+5+6
    console.log(resultado);
}
Sumatoria();

function Comparacion (){
    let resultado = 5>6
    console.log(5>6);
}
Comparacion();

const ArrowSumatoria = () => console.log(4+5+63);

const ArrowComparacion = () => console.log(6>7);

const computadora = {
    gabinete: "Corsair",
    procesador: "AMD 2600",
    tarjetagrafica: "Nvidia 3060Ti",
    memoriaRAM: "16 GB DDR4",
    Almacenamiento: "SSD 1Tb",
    Fuentedepoder: "750W Evga Gold",
    compro (){
        console.log("Metodo listo")
    }
}

console.log(computadora.compro());

console.log(computadora.gabinete);

console.log(computadora.procesador);

console.log(computadora.tarjetagrafica);


const Arreglo = ["Hola, tu pedido con numero", 4728, "se encuentra en camino, que incluye", pedido={componentes: "Tarjeta grafica 3060Ti de 6GB", precio: 20000}, despedida= ["Gracias por su preferencia", "Que tenga un excelente dia"]];

console.log(Arreglo);

console.log(Arreglo[1]);

console.log(Arreglo[4].componentes);

console.log(Arreglo[3][0]);*/


/*---------------------Actividad 7-------------------------*/
let edad = 19;

if (edad>= 18){
    console.log("Valido")
}else{
    console.log("No Valido")
}

const automoviles = [
    {id:1, marca: "Mercedes-Benz", motor: "4.0 L V8", color:"Gris", stock:"100", precio: 580000},
    {id:2, marca: "BMW", motor: "3.0 L 6 motor en línea", color:"Rojo", stock:"200", precio: 690000},
    {id:3, marca: "Audi", motor: "2.0 L 4 motor en línea", color:"Azul", stock:"900.56", precio: 960000},
    {id:4, marca: "Aston Martin", motor: "6.0 L V12", color:"Verde", stock:"1050", precio: 794000},
]

for (let i = 0;i < automoviles.length; i++){
    console.log ("Las propiedades de este producto: ", automoviles[i])
}

let Valorinn = 0;
let Valorin;

Valorin = parseInt (prompt("¿Cual es su edad?"));

if(Valorin>=12 || Valorin<=18){
    Valorinn = 1;
}else if(Valorin>=19 || Valorin<=24){
    Valorinn = 2;
}else if(Valorin>=25 || Valorin<=30){
    Valorinn = 3;
}else if(Valorin>=31 || Valorin<=60){
    Valorinn = 4;
}else{
    alert("No hay promocion en este momento")
    Valorinn = 5;
}

switch(Valorinn){
    case 1:
        alert("OFERTA: Descuento en Combo dulces")
        console.log("OFERTA: Descuento en Combo dulces");
    break;
    case 2:
        alert("OFERTA: 2x1 en funciones 3D");
        console.log("OFERTA: 2x1 en funciones 3D");
    break;
    case 3:
        alert("OFERTA: Descuento en Combo parejas");
        console.log("OFERTA: Descuento en Combo parejas");
    break;
    case 4:
        alert("OFERTA: Descuento en entradas tradicionales");
        console.log("OFERTA: Descuento en entradas tradicionales");
    break;
    case 5:
        alert("No hay promoción");
        break;
}


/*---------------------Actividad 8-------------------------*/
for(let i=0; i < automoviles.length; i++){
    console.log("Marcas con su stock: ", automoviles[i].marca, automoviles[i].stock);
}

const Preciomayor = automoviles.filter(automoviles => automoviles.precio > 200)
console.log("Los productos con precio mayor a 200 son: ", Preciomayor)


const precios = automoviles.map(item => item.precio);

const totalprecio = precios.reduce((total, precios)=> total + precios);

const promediofinal = totalprecio / automoviles.length;

console.log("El promedio del costo de los productos es: ", promediofinal);


const ordenAlfa = automoviles.sort ((item1, item2) => {
    if (item1.marca == item2.marca){
        return 0
    }else if(item1.marca < item2.marca){
        return -1
    }else{
            return 1
        }
})
console.log("Prooductos ordenados Alfabeticamente: ", ordenAlfa);

const preciomax = automoviles.map(item => item.precio);

/*---------------------Actividad 9-------------------------*/




/*---------------------Actividad 10-------------------------*/


