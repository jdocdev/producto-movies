
import '/src/components/molecules/navMenuCarrito.scss';

const NavMenuCarrito = ({ carrito, onCloseCarrito, onResetCarrito }) => {
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    return (
        <div className="carrito-container">
            <div className='container-title'>
                <h3 className='title'>MI BOLSA DE COMPRAS</h3>
                <button className='button-cerrar' onClick={onCloseCarrito}>
                    <i className="bi bi-x"></i>
                </button>
            </div>
            <div className='container-producto'>
                <div className='producto-detalles'>
                    {carrito.map((producto, index) => (
                        <div className='container-detalles' key={index}>
                            <img className='producto-img' src='https://moviesshopco.vtexassets.com/arquivos/ids/175525-96-auto' alt='imagen de producto' />
                            <div>
                                <div className='detalles-marca'>
                                    <p className='title'>NASA</p>
                                    <a onClick={() => onResetCarrito(producto)}>
                                        <i className="bi bi-trash3 eliminar"></i>
                                    </a>
                                </div>
                                <p className='nombre-producto'>{producto.nombre.substring(0, 24) + '...'}</p>
                                <div className='container-cantidad'>
                                    <div className='cantidad'>
                                        <button
                                            className='button cantidad-menos'>
                                            -
                                        </button>
                                        <label className='cantidad-label'>{producto.cantidad}</label>
                                        <button
                                            className='button cantidad-mas'>
                                            +
                                        </button>
                                    </div>
                                    <div className='precio'>
                                        <p>${producto.precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='carrito-total'>
                <div className='total-info'>
                    <div className='subtotal'>
                        <p>SUBTOTAL</p>
                        <p>${total}</p>
                    </div>
                    <div className='envio'>
                        <p>COSTOS DE ENVÍO</p>
                        <p>A calcular</p>
                    </div>
                    <div className='total'>
                        <p>TOTAL</p>
                        <p>${total}</p>
                    </div>
                    <p className='gratis'>¡Tu envío es totalmente gratis!</p>
                    <div className='costo'>
                        <p>$0</p>
                        <p>$150.000</p>
                    </div>
                    <button className='button-finalizar'>FINALIZAR COMPRA</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default NavMenuCarrito;
