import '/src/components/molecules/productoCaracteristicas.scss'
import { useState } from 'react'

const ProductoCaracteristicas = ({ onAgregarAlCarrito }) => {
    const [cantidad, setCantidad] = useState(1);
    const [error, setError] = useState('');

    const handleCantidadChange = (newCantidad) => {
        if (newCantidad > 6) {
            setError('La cantidad no puede ser mayor a 6 unidades');
        } else {
            setError('');
            setCantidad(newCantidad);
        }
    };

    const handleAgregarCarrito = () => {
        if (cantidad > 6) {
            setError('La cantidad no puede ser mayor a 6 unidades');
            return;
        }

        const producto = {
            nombre: 'Chaqueta de la Nasa multicolor con cierre para hombre',
            precio: 249990,
            cantidad,
        };

        onAgregarAlCarrito(producto);
        setCantidad(1);

        alert(`Se agregó ${cantidad} unidad(es) al carrito: ${producto.nombre}`);
    };

    return (
        <div className='contenedor-producto'>
            <div className='contenedor-titulo'>
                <h2 className='titulo'>Chaqueta de la Nasa multicolor con cierre para hombre</h2>
            </div>
            <div className='contenedor-referencia'>
                <p className='referenciaNumber'>NASA <span>Ref. 237474-110601-XL</span></p>
                <p className='referenciaColection'>NUEVO</p>
            </div>
            <div className='contenedor-precio'>
                <p className='precio-antes'> $349.990</p>
                <p className='precio-ahora'> $249.990</p>
            </div>
            <div className='conetenedor-unidades'>
                <p className='unidades'>¡Solo <span>6</span> unidades disponibles!</p>
            </div>
            <div className='contenedor-tallas'>
                <ul className='lista-tallas'>
                    <li className='tallas s'>S</li>
                    <li className='tallas m'>M</li>
                    <li className='tallas l'>L</li>
                    <li className='tallas xl'>XL</li>
                </ul>
                <a href='#' target='_blank' className='tallas-guia'>Guía de tallas</a>
            </div>
            <div className='contenedor-cantidad'>

                <div className='cantidad'>
                    <button
                        className='button cantidad-menos'
                        onClick={() => handleCantidadChange(cantidad > 1 ? cantidad - 1 : 1)}
                    >
                        -
                    </button>
                    <label className='cantidad-label'>{cantidad}</label>
                    <button
                        className='button cantidad-mas'
                        onClick={() => handleCantidadChange(cantidad + 1)}
                    >
                        +
                    </button>
                </div>
                <button className='cantidad-productoCarrito' onClick={handleAgregarCarrito}>
                    AGREGAR A MI BOLSA
                </button>
            </div>
            {error && <p style={{ color: '#ea0029' }}>{error}</p>}
        </div>
    )
}

export default ProductoCaracteristicas