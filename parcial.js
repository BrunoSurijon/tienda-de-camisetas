const botonCarrito = document.querySelector('.contenedorBotonCarrito')
const contenedorProductosCarrito = document.querySelector('.contenedorProductosCarrito')

botonCarrito.addEventListener('click', () => {
    contenedorProductosCarrito.classList.toggle('hidden-cart');
});


const infoCarrito = document.querySelector('.productoCarrito')
const rowProducto = document.querySelector('.rowProducto')

const contenedorProductos = document.querySelector('.contenedorProductos')

let todosProductosCarrito = []

const valorTotalPrecio = document.querySelector('.totalPrecioCarrito')
const contadorProductosCarrito = document.querySelector('#contadorProductosCarrito')

contenedorProductos.addEventListener('click', e => {
    if(e.target.classList.contains('botonAgregarAlCarrito')){
        const productoCarrito = e.target.parentElement;

        const infoProductoCarrito = {
            cantidad: 1,
            titulo: productoCarrito.querySelector('h2').textContent,
            precio: productoCarrito.querySelector('.precioProducto').textContent,
        };

        const existe = todosProductosCarrito.some(productoCarrito => productoCarrito.titulo === infoProductoCarrito.titulo)

        if(existe){
            const productosCarrito = todosProductosCarrito.map(productoCarrito =>{
                if(productoCarrito.titulo === infoProductoCarrito.titulo){
                    productoCarrito.cantidad ++
                    return productoCarrito
                }else{
                    return productoCarrito
                }
            })
            todosProductosCarrito = [... productosCarrito]
        }else{
            todosProductosCarrito = [...todosProductosCarrito, infoProductoCarrito];
        }
        mostrarHtml();
    }
});

rowProducto.addEventListener('click', (e) =>{
    if(e.target.classList.contains('icon-close')){
        const producto = e.target.parentElement
        const titulo = producto.querySelector('p').textContent

        todosProductosCarrito = todosProductosCarrito.filter(producto => producto.titulo !== titulo);

        mostrarHtml();
    }
});

const mostrarHtml = () =>{

    rowProducto.innerHTML = '';

    let totalCantidad = 0;
    let totalPrecio = 0;

    todosProductosCarrito.forEach(producto => {
        const contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('productoCarrito');

        contenedorProducto.innerHTML = `
        <div class="infoProductoCarrito">
        <span class="cantidadProductoCarrito">${producto.cantidad}</span>
        <p class="tituloProductoCarrito">${producto.titulo}</p>
        <span class="precioProductoCarrito">${producto.precio}</span>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
        </svg>
        `;

        rowProducto.append(contenedorProducto)

        totalPrecio = totalPrecio + parseInt(producto.cantidad * producto.precio.slice(1))
        totalCantidad = totalCantidad + producto.cantidad;
    });
    valorTotalPrecio.innerText = `$ ${totalPrecio}`;
    contadorProductosCarrito.innerText = totalCantidad;
};




const contenedorCategorias = document.getElementById(".categorias");

const infoCategorias = () => {
    contenedorCategorias.innerHTML = `
    <p>Filtrar por <a class="categoria" href="#" id="1"> Camisetas </a> | <a class="categoria" href="#" id="2"> Buzos </a> | <a class="categoria" href="#" id="3"> Shorts </a> | <a class="categoria" href="#" id="4"> Todos los productos </a></p>
      `;
    
  };
  const categorias = () => {
    let botonCategorias = document.querySelectorAll(".categoria");
    let contenedorProductos = document.querySelector('.contenedorProductos');

    botonCategorias.forEach(botonCategoria => {
      botonCategoria.addEventListener('click', function(e) {


        let botonSelecionado = e.target;

        if (botonSelecionado) {
          contenedorProductos.querySelectorAll('.producto').forEach(producto => {

            if (botonSelecionado.id == 1) {
              if (!(producto.id == 1 || producto.id == 4)) {
                producto.style.display = 'none';
              } else {
                producto.style.display = 'block';
              }
            }

            if (botonSelecionado.id == 2) {
              if (!(producto.id == 2 || producto.id == 5)) {
                producto.style.display = 'none';
              } else {
                producto.style.display = 'block';
              }
            }

            if (botonSelecionado.id == 3) {
              if (!(producto.id == 3 || producto.id == 6)) {
                producto.style.display = 'none';
              } else {
                producto.style.display = 'block';
              }
            }
            
            if (botonSelecionado.id == 4) {
              producto.style.display = "block";
            }
          });
        }
      });
    });
  };
  
  categorias();