// ------------------------------------------------
//             variables globales
// ------------------------------------------------

// ------------------------------------------------
//             funciones globales
// ------------------------------------------------

(function () {
  'use strict';

  // Asegura el array global
  if (!Array.isArray(window.productos)) {
    window.productos = [];
  }

  // Utilidades
  function parsePrecio(value) {
    const n = parseFloat(value);
    return isNaN(n) ? 0 : n;
  }

  function parseEntero(value) {
    const n = parseInt(value, 10);
    return isNaN(n) ? 0 : n;
  }

  function formatCurrency(n) {
    try {
      return n.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    } catch (_) {
      // Fallback simple
      return '$ ' + Number(n).toFixed(2);
    }
  }

  function getRefs() {
    return {
      form: document.querySelector('.alta-form'),
      nombre: document.getElementById('nombre'),
      precio: document.getElementById('precio'),
      stock: document.getElementById('stock'),
      marca: document.getElementById('marca'),
      categoria: document.getElementById('categoria'),
      detalles: document.getElementById('detalles'),
      foto: document.getElementById('foto'),
      envio: document.getElementById('envio'),
      tbody: document.querySelector('.productos-tabla table tbody')
    };
  }

  function validarCampos({ nombre, precio, stock, marca, categoria }) {
    if (!nombre || nombre.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
    if (!(precio >= 0)) return 'El precio debe ser un número válido mayor o igual a 0.';
    if (!(stock >= 0)) return 'El stock debe ser un entero válido mayor o igual a 0.';
    if (!marca || marca.trim().length < 2) return 'La marca debe tener al menos 2 caracteres.';
    if (!categoria) return 'Debes seleccionar una categoría.';
    return null;
  }

  function representarTablaProductos() {
    const { tbody } = getRefs();
    if (!tbody) return;

    const filas = window.productos.map(prod => {
      const imgCell = prod.foto
        ? `<img width="75" height="75" style="object-fit:cover;border-radius:8px;border:1px solid #e5e7eb" src="${prod.foto}" alt="foto de ${prod.nombre} ${prod.marca}">`
        : `<span class="muted">Sin imagen</span>`;

      return `
        <tr>
          <td>${prod.nombre}</td>
          <td class="centrar">${formatCurrency(prod.precio)}</td>
          <td class="centrar">${prod.stock}</td>
          <td>${prod.marca}</td>
          <td>${prod.categoria}</td>
          <td>${prod.detalles ? prod.detalles : '<span class="muted">—</span>'}</td>
          <td>${imgCell}</td>
          <td class="centrar">${prod.envio ? 'Sí' : 'No'}</td>
        </tr>
      `;
    }).join('');

    tbody.innerHTML = filas || `
      <tr>
        <td colspan="8" class="text-center"><span class="muted">No hay productos cargados.</span></td>
      </tr>
    `;
  }

  function agregar(e) {
    e.preventDefault();

    const refs = getRefs();
    const nombre = refs.nombre.value.trim();
    const precio = parsePrecio(refs.precio.value);
    const stock = parseEntero(refs.stock.value);
    const marca = refs.marca.value.trim();
    const categoria = refs.categoria.value;
    const detalles = refs.detalles.value.trim();
    const foto = refs.foto.value.trim();
    const envio = refs.envio.checked;

    const error = validarCampos({ nombre, precio, stock, marca, categoria });
    if (error) {
      alert(error);
      return;
    }

    const producto = { nombre, precio, stock, marca, categoria, detalles, foto, envio };

    
    window.productos.push(producto);
    representarTablaProductos();

    
    refs.form.reset();
    refs.nombre.focus();
  }

  function start() {
    const { form } = getRefs();
    if (form) {
      form.addEventListener('submit', agregar);
    }
    representarTablaProductos();
  }

  document.addEventListener('DOMContentLoaded', start);
})();
