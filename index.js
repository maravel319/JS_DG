let tituloh1=document.getElementById("titulo");
titulo.innerText= "Proyecto final (modificado por DOM)";

const listaPresupuesto = document.getElementById("tbody");
let presupuestos = [];
let botonEnviar = document.getElementById('botonEnviar');

const precioA3 = 28;
const precioA4 = 12;


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
        <td class="presupuesto">us$${presupuesto.subtotal.toFixed(2)}</td>
        <td class="presupuesto">us$${presupuesto.descuento.toFixed(2)}</td>
        <td> <button class="delete" onclick="eliminarPresupuesto(${index})"> Eliminar</button></td>
      </tr>
      `;
  });
}

const actualizarTotal = () => {
  let sumaSubtotales = 0;
  let sumaDescuentos = 0;

  presupuestos.forEach((presupuesto) => {
   sumaDescuentos += presupuesto.descuento-presupuesto.subtotal;
  });

  sumaDescuentos = parseFloat(sumaDescuentos.toFixed(2));
  sumaSubtotales = parseFloat(sumaSubtotales.toFixed(2));


  let nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `
    <td class="total subtotal" colspan="4">Total con descuentos:</td>
    <td class="total subtotal">us$${sumaDescuentos.toFixed(2)}</td>
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
  
  let subtotal = (tamaño === "A3") ? cantidad * precioA3 : cantidad * precioA4;

  let descuento = 0;
  if (cantidad >= 50) {
      descuento = subtotal * 0.2;
  } else if (cantidad >= 10) {
      descuento = subtotal * 0.1;
  }

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

fetch('https://api.bluelytics.com.ar/v2/latest')
  .then(response => response.json())
  .then(data => {
    const compraDolarBlue = data.blue.value_buy;
    const ventaDolarBlue = data.blue.value_sell;
    
    const mensaje = `Valor de compra del dólar blue: $us${compraDolarBlue}<br>
                    Valor de venta del dólar blue: $us${ventaDolarBlue}`;

    dolarDiv.innerHTML = mensaje;
  })
