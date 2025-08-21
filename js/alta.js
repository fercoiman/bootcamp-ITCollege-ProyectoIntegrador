// ------------------------------------------------
//             variables globales
// ------------------------------------------------

// ------------------------------------------------
//             funciones globales
// ------------------------------------------------
function agregar(e) {
    e.preventDefault()

    console.log('agregar producto')

    var refNombre = document.getElementById('nombre')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refMarca = document.getElementById('marca')
    var refCategoria = document.getElementById('categoria')
    var refDetalles = document.getElementById('detalles')
    var refFoto = document.getElementById('foto')
    var refEnvio = document.getElementById('envio')

    var nombre = refNombre.value
    var precio = refPrecio.value
    var stock = refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var detalles = refDetalles.value
    var foto = refFoto.value
    var envio = refEnvio.checked

    var producto = {
        nombre: nombre,
        precio: +precio,
        stock: parseInt(stock),
        marca: marca,
        categoria: categoria,
        detalles: detalles,
        foto: foto,
        envio: envio
    }

    console.log(producto)
    productos.push(producto)

    representarTablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDetalles.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}


function representarTablaProductos() {
    
    var planillaHBS = document.getElementById('plantilla-tabla-productos').innerHTML
    //console.log(planillaHBS)
    var template = Handlebars.compile(planillaHBS)
    //console.log(template)
    var filasTabla = template({productos: productos})
    //console.log(filasTabla)
    document.querySelector('table').innerHTML = filasTabla
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarTablaProductos()
}
