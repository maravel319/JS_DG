let tituloh1=document.getElementById("titulo");
titulo.innerText= "Segunda pre entrega (modificado por DOM)";

let botonEnviar = document.getElementById('botonEnviar');


function nuevoPresu () {

  let nombre = document.getElementById('nombre').value;
  let tamaño = document.getElementById('tamaño').value;
  let cantidad = document.getElementById('cantidad').value;

            let informacion = {
                nombre: nombre,
                tamaño: tamaño,
                cantidad: cantidad
            };
            document.getElementById('nombre').value = '';
            document.getElementById('cantidad').value = '';
        };


botonEnviar.addEventListener('click', nuevoPresu)

const precioA3 = 230;
const precioA4 = 180;


function calcularPrecio(pedido) {
    let precioUnitario = pedido.tipoPapel === "A3" ? precioA3 : precioA4;
    let subtotal = precioUnitario * pedido.cantidad;

    if (pedido.cantidad >= 50) {
      subtotal *= 0.8; 
    } else if (pedido.cantidad >= 10 && pedido.cantidad < 50) {
      subtotal *= 0.9; 
    }
    return subtotal;
}

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


