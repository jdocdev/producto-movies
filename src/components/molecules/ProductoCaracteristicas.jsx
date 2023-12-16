import '/src/components/molecules/productoCaracteristicas.scss'

const ProductoCaracteristicas = () => {
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
                    <button className='button cantidad-menos'>-</button>
                    <label className='cantidad-label'>1</label>
                    <button className='button cantidad-mas'>+</button>
                </div>
                <button className='cantidad-productoCarrito'>AGREGAR A MI BOLSA</button>
            </div>
        </div>
    )
}

export default ProductoCaracteristicas