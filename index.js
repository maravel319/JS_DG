let tituloh1=document.getElementById("titulo");
titulo.innerText= "Proyecto final (modificado por DOM)";

const listaPresupuesto = document.getElementById("tbody");
let presupuestos = [];
let botonEnviar = document.getElementById('botonEnviar');



class presupuesto {
  constructor(nombre, tamaño, cantidad, subtotal, descuento){
    this.nombre =nombre;
    this.tamaño = tamaño;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.descuento = descuento;

  }
}

const mostrarPresupuesto = () => {
  listaPresupuesto.innerHTML= "";
  presupuestos.forEach((presupuesto, index) => {
    listaPresupuesto.innerHTML +=`
      <tr scope="row">
        <td class="presupuesto">${presupuesto.nombre}</td>
        <td class="presupuesto">${presupuesto.tamaño}</td>
        <td class="presupuesto">${presupuesto.cantidad}</td>
        <td class="presupuesto">us$${presupuesto.subtotal}</td>
        <td class="presupuesto">us$${presupuesto.descuento}</td>
        <td> <button class="delete" onclick="eliminarPresupuesto(${index})"> Eliminar</button></td>
      </tr>
      `;
  });
}

const actualizarTotal = () => {
  let sumaSubtotales = 0;
  let sumaDescuentos = 0;

  presupuestos.forEach((presupuesto) => {
    sumaSubtotales += presupuesto.subtotal;
    sumaDescuentos += presupuesto.descuento;
  });

  sumaDescuentos = parseFloat(sumaDescuentos.toFixed(2));
  sumaSubtotales = parseFloat(sumaSubtotales.toFixed(2));


  let nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `
    <td class="total subtotal" colspan="3">Total:</td>
    <td class="total subtotal">us$${sumaSubtotales}</td>
    <td class="total subtotal">us$${sumaDescuentos}</td>
  `;

  listaPresupuesto.appendChild(nuevaFila);
}

const nuevoPresu =(e) => {
  e.preventDefault();
  let nombre = document.getElementById('nombre').value;
  let tamaño = document.getElementById('tamaño').value;
  let cantidad = document.getElementById('cantidad').value;

  if (nombre === "" || isNaN(cantidad) || cantidad <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Algo falta...',
      text: 'Por favor, completa todos los campos para continuar',
    })    
    return; 
  }
  
  let subtotal = calcularPrecio({ tipoPapel: tamaño, cantidad: cantidad }); 
  let descuento = calcularDescuento({ tipoPapel: tamaño, cantidad: cantidad, subtotal: subtotal });
  let nuevoPresupuesto = new presupuesto(nombre, tamaño, cantidad, descuento, subtotal);
  presupuestos.push(nuevoPresupuesto);
  mostrarPresupuesto();
  actualizarTotal();

  
  document.getElementById('nombre').value = '';
  document.getElementById('cantidad').value = '';
};

function eliminarPresupuesto(index) {
  presupuestos.splice(index, 1);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Eliminado correctamente',
    showConfirmButton: false,
    timer: 1500
  })

  mostrarPresupuesto();
  actualizarTotal();
}

document.addEventListener("DOMContentLoaded", mostrarPresupuesto);
botonEnviar.addEventListener('click', nuevoPresu)

const precioA3 = 28;
const precioA4 = 12;


function calcularPrecio(pedido) {
  let precioUnitario = pedido.tipoPapel === "A3" ? precioA3 : precioA4;
  let subtotal = precioUnitario * pedido.cantidad;

    if (pedido.cantidad >= 50) {
      subtotal *= 0.8; 
    } else if (pedido.cantidad >= 10 && pedido.cantidad < 50) {
      subtotal *= 0.9; 
    }
    return parseFloat(subtotal.toFixed(2));
  }

function calcularDescuento(pedido) {
  let descuento = 0;
  if (pedido.cantidad >= 50) {
    descuento = parseFloat((pedido.subtotal * 0.2).toFixed(2));
  } else if (pedido.cantidad >= 10 && pedido.cantidad < 50) {
    descuento = parseFloat((pedido.subtotal * 0.1).toFixed(2));
  }
  return descuento;
}

setTimeout (() =>{ 
  Swal.fire({
  title: "¡SORPRESA! </br> Probando asincronía",  
  text: "Ya con este lujo apruebo ¿No?",
  icon: "question",
  confirmButtonText:
  '<i class="fa fa-thumbs-up"></i> ¡Seee, lo merece!',
}); 
} ,10000
)

let dolarDiv = document.getElementById('dolar');

// Realizar una solicitud GET a la API
fetch('https://api.bluelytics.com.ar/v2/latest')
  .then(response => response.json())
  .then(data => {
    const compraDolarBlue = data.blue.value_buy;
    const ventaDolarBlue = data.blue.value_sell;
    const mensaje = `Valor de compra del dólar blue: $us${compraDolarBlue}<br>
                    Valor de venta del dólar blue: $us${ventaDolarBlue}`;

    dolarDiv.innerHTML = mensaje;
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
















/* let input = document.getElementById("tarea");
let lista = document.getElementById("lista"); */

  

  /* let informacion = {
    nombre: nombre,
    tamaño: tamaño,
    cantidad: cantidad
  }; *









/* function agregarPedido(numeroPedido) 
    const pedido = {}; */
    
    
/*             pedido.nombre = prompt(`Pedido ${numeroPedido}: Ingrese el nombre de la persona:`);
 */
        /* while (true) {
            pedido.tipoPapel = prompt(`Pedido ${numeroPedido}: Ingresa el tipo de papel (A4 o A3):`).toUpperCase();
            if (pedido.tipoPapel === "A4" || pedido.tipoPapel === "A3") {
            break;
            } else {
            alert("Opción inválida. Por favor, ingresa 'A4' o 'A3'.");
            }
    }
            pedido.cantidad = parseInt(prompt(`Pedido ${numeroPedido}: Ingrese la cantidad:`));
    
    Presupuestos.push(pedido);
}

const cantidadPedidos = parseInt(prompt("Ingrese la cantidad de pedidos de presupuesto que desea realizar:")); */

/* for (let i = 1; i <= cantidadPedidos; i++) {
agregarPedido(i);
} */

/* const pedidosA3= Presupuestos.filter(pedido => pedido.tipoPapel=="A3")
console.log("Filtro exclusivo para los pedidos de A3:"); 
console.log(pedidosA3)

const pedidosA4= Presupuestos.filter(pedido => pedido.tipoPapel=="A4")
console.log("Filtro exclusivo para los pedidos de A4:"); 
console.log(pedidosA4)


let subtotalTotal = 0;
for (const pedido of Presupuestos) {
const subtotalPedido = calcularPrecio(pedido);
subtotalTotal += subtotalPedido;
}

console.log("Pedidos de presupuesto:");
console.log(Presupuestos);

console.log("Presupuesto de cada pieza:");
for (const pedido of Presupuestos) {
  const subtotalPedido = calcularPrecio(pedido);
  console.log(`→ Pedido de ${pedido.nombre}: Cantidad: ${pedido.cantidad} piezas ${pedido.tipoPapel} - Subtotal: $${subtotalPedido}`+" valor con descuento aplicado sin impuestos");
}

const totalConIVA = subtotalTotal * 1.21;

console.log("Subtotal total: $" + Math.round(subtotalTotal));
console.log("Total con impuestos $" + Math.round(totalConIVA)); */


