// ------------------------------------------------
//             variables globales
// ------------------------------------------------

// ------------------------------------------------
//             funciones globales
// ------------------------------------------------
function representarCardsProductos() {
    
    var planillaHBS = document.getElementById('plantilla-cards-productos').innerHTML
    //console.log(planillaHBS)
    var template = Handlebars.compile(planillaHBS)
    //console.log(template)
    var cards = template({productos: productos})
    //console.log(cards)
    document.querySelector('.section-cards-body').innerHTML = cards
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()
}
