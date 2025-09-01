// ------------------------------------------------
//             variables globales
// ------------------------------------------------

// ------------------------------------------------
//             funciones globales
// ------------------------------------------------
function representarCardsProductos() {
    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            var producto = productos[i]
            cards +=
                '<section>' +
                    '<h3>' + producto.nombre + '</h3>' +
                    '<img src="' + producto.foto + '" alt="foto de ' + producto.nombre + ' ' + producto.marca + '">' +
                    '<div class="producto-info">' +
                        '<p class="precio"><b>Precio : </b>$'+' ' + producto.precio + '</p>' +
                        '<p class="stock"><b>Stock: </b>' + producto.stock + '</p>' +
                        '<p class="marca"><b>Marca: </b>' + producto.marca + '</p>' +
                        '<p class="categoria"><b>Categoría: </b>' + producto.categoria + '</p>' +
                        '<p class="detalles"><b>Detalles: </b>' + producto.detalles + '</p>' +
                        '<p class="envio"><b ">Envío: </b>' + (producto.envio? 'Si' : 'No') + '</p>' +
                    '</div>' +
                    '<div class="producto-acciones">' +
                        '<button class="btn-comprar">Comprar</button>' +
                    '</div>' +
                '</section>'
        }
    }
    else cards += '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('.section-cards-body').innerHTML = cards
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()
}
