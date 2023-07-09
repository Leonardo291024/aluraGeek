//CREAMOS UNA VARIABLE CARRITO QUE VA A GUARDAR EN UNA LISTA CON CADA UNO DE LOS PRODUCTOS
const btnCarrito = document.getElementById('agregar__producto');

btnCarrito.addEventListener('click', agregarProducto);
var carrito = [];

function agregarProducto(){
    //MANDAMOS LLMAR A LOS INPUTS
    var urlImagen = document.getElementById('urlImagen').value;
    var categoria = document.getElementById('categoria').value;
    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var descripcion = document.getElementById('descripcion').value;


    //LA VARIABLE PRODUCTO QUE ES UN OBJETO VA A GUARDAR CADA UNA DE LAS CARACTERISTICAS DEL PROUCTO
    var producto = {
        urlImagen: urlImagen,
        categoria: categoria,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };


    //CON EL METODO PUSH CADA QUE SE HAGA CLICK EN EL BOTON VA IR AGREGANDO UN PRODUCTO A LA LISTA CARRITO
    carrito.push(producto);

    //MANDAMOS LLAMAR LA FUNCION ACTUALIZAR CARRITO PARA  para reflejar los cambios en la lista de productos en el carrito.
    actualizarCarrito();


    //DESPUES DE AGREGAR UN PRODUCTO LOS INPUTS SE LIMPIAN PARA AGREGAR UNO NUEVO
    document.getElementById('urlImagen').value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
}

function actualizarCarrito(){
    //LA VARIABLE CARRITOeLEMNTO TRAE DEL HTML EL ELEMENTO UL DONDE SE GUARDARA LA LISTA DE CADA PRODUCTO
    var carritoElemnto = document.getElementById('carrito');

    carritoElemnto.innerHTML = "";
    
    //SE UTILIZA EL CICLO FOR PARA ITERAR EN CADA UNO DE LOS PRODUCTOS EN EL ARREGO CARRITO

    //MIENTRAS QUE i SEA MENOS QUE LA LOMGITUD DEL CARRITO EL CICLO SE SEGUIRA EJECUTANDO.
    for (var i = 0; i < carrito.length; i++) {
        //LA VARIABLE PRODUCTO GUARDA CADA ITERACION DEL CICLO QUE OBTIENE EL PRODUCTO ACTUAL DEL ARREGLO CARRITO.
        var producto = carrito[i];

        //CREAMOS EL ELEMENTO LISTA QUE VA  A GUARDAR EL CONTENIDO HTML 
        var li = document.createElement("li");
        li.innerHTML = `
          <h3>Carrito de compras</h3>
          <img src="${producto.urlImagen}" alt="Imagen del producto">
          <h3>${producto.nombre}</h3>
          <p>Categoría: ${producto.categoria}</p>
          <p>Precio: $${producto.precio}</p>
          <p>${producto.descripcion}</p>
          `;


        //USAMOS EL METODO APENDCHILD PARA AGREGAR LOS ELEMENTOS LI AL UL
        carritoElemnto.appendChild(li);
    }
        
}