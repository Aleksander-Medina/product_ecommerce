const Clickbutton = document.querySelectorAll('.container')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
    const button = e.target;
    const item = button.closest('.item');

    const itemid = item.querySelector('.item-id').dataset.id;
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImg = item.querySelector('.item-image').src;
    
    const newItem = {
    id:itemid,
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
}
addItemCarrito(newItem);    
}

function addItemCarrito(newItem){

const InputElemnto = tbody.getElementsByClassName('input__elemento');
for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
        carrito[i].cantidad ++;
        const inputValue = InputElemnto[i]
        inputValue.value++;
        CarritoTotal()
        return null;
    }
}

carrito.push(newItem)

renderCarrito()
}


function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
                <img src=${item.img}  alt="">
                <h8 class="title">${item.title}</h8>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
                <input class="input__elemento" type="number" min="1" value=${item.cantidad}>
                <button class="delete btn btn-danger">X</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
})
CarritoTotal()
}

function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
})

itemCartTotal.innerHTML = `Total $${Total}`
addLocalStorage()
}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
    carrito.splice(i, 1)
    }
}
CarritoTotal()
}

function sumaCantidad(e){
    const sumaInput  = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
    if(item.title.trim() === title){
        sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
        item.cantidad = sumaInput.value;
        CarritoTotal()
    }
})
}

function addLocalStorage(){
localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
const storage = JSON.parse(localStorage.getItem('carrito'));
if(storage){
    carrito = storage;
    renderCarrito()
}
}






















/*const cards = document.getElementById('cards')
const itemisu = document.getElementById('itemisu')
const fbase = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const fondocarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()


// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener('DOMContentLoaded', e => { fetchData() });
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

let carrito = {}

const agregaralcarritobuttons = document.querySelectorAll(".agregaralcarrito");
console.log(agregaralcarritobuttons);

agregaralcarritobuttons.forEach((agregaralcarritobtn => {
    agregaralcarritobtn.addEventListener("click", agregaralcarritoclick);
    }));

    const shoppingcartitemscontainer = document.querySelector(".shoppingcartitemscontainer");

    function agregaralcarritoclick(event){
        const button = event.target;
        const item = button.closest(".item");
        
        const itemid = item.querySelector(".item-id").dataset.id;
        const itemTitle = item.querySelector(".item-title").textContent;
        const itemPrice = item.querySelector(".item-price").textContent;
        const itemImage = item.querySelector(".item-image").src;

        salidacarrito(itemid,itemTitle,itemPrice,itemImage);
    }

    const salidacarrito = (itemid,itemTitle,itemPrice,itemImage) => {
        const producto = {
            id:itemid,
            nombre:itemTitle,
            precio:itemPrice,
            imagen:itemImage,
            cantidad: 1
        }
        carrito.push(producto)
        renderCarrito
    }
    console.log(carrito)
    

        /*if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1;
        }

        carrito[producto.id] = {...producto}
        llenarcarrito()
    }

const llenarcarrito = () => {
    itemisu.innerHTML = ''
    Object.values(carrito).forEach(producto =>{
        fondocarrito.querySelector("th").textContent=producto.id
        fondocarrito.querySelectorAll("td")[0].textContent=producto.nombre
        fondocarrito.querySelectorAll("td")[1].textContent=producto.cantidad
        fondocarrito.querySelector(".btn-info").dataset.id=producto.id
        fondocarrito.querySelector(".btn-danger").dataset.id=producto.id
        fondocarrito.querySelector("span").textContent=producto.cantidad * producto.precio
        const clone = fondocarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    itemisu.appendChild(fragment)
    
    llenaritems()
}

const llenaritems = () => {
    fbase.innerHTML = ""
    if(Object.keys(carrito).length === 0){
        fbase.innerHTML = `
        <th class="shopping-cart-header" scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
    }
}







/*-----------------TAREAS!!!!------------------
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
/*let edad = 19;

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
/*for(let i=0; i < automoviles.length; i++){
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


