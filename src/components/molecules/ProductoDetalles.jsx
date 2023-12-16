import ProductoDetallesAcordeon from '../atoms/ProductoDetallesAcordeon'
import '/src/components/molecules/productoDetalles.scss'
import Credifin from '/src/img/logoBlanco_credifin.png'

const ProductoDetalles = () => {

    const accordionData = [
        { title: 'Descripción de producto', content: 'Un diseño de otro planeta llegó a Movies para decirte que siempre podrás tener un estilo más auténtico e innovador. Con esta chaqueta de la NASA tus atuendos para los días fríos serán increíbles aciertos que te pondrán a levitar. Cuenta con detalles que le aportan un abrigo único y una seguridad absoluta, como su cierre frontal y capucha, que te mantendrán protegido de la lluvia. Además, con sus bolsillos, se convertirá en la prenda más práctica del clóset y gracias a sus estampados, ¡tendrás un outfit del más allá!' },
        { title: 'Especificaciones', content: 'Diseño: Chaqueta rompevientos con cierre frontal, capucha, bolsillos funcionales, aplique en punto corazón, estampados en frente, manga derecha y posterior. Silueta: Regular fit' },
        { title: 'Composición', content: '100% Poliéster' },
        { title: 'Cuidados', content: '- Lavar a mano o en máquina - No lavar en seco - No dejar en remojo - No retorcer ni exprimir - Usar agua fría - Usar jabón suave - No usar blanqueador - No blanquear - No usar secadora - No planchar - Secado en tendedero a la sombra' },
        { title: 'Descubre más', content: '¡Colecciones irrepetibles! Los diseños más galácticos llegaron para darte los mejores estilos del día a día con prendas que se convertirán en tus favoritas de todo el guardarropa. Continúa explorando en Movies y encuentra más chaquetas icónicas como esta.' },
    ];

    return (
        <div className='contanedor-detalles'>
            <div className='detalles-form'>
                <h3 className='form-title'>Comprueba disponibilidad de entrega</h3>
                <form className='form'>
                    <select className='form-opciones'>
                        <option value="">Departamento</option>
                        <option value="opcion1">Antioquia</option>
                        <option value="opcion2">Amazonas</option>
                        <option value="opcion3">Bogotá D.C</option>
                    </select>
                    <select className='form-opciones'>
                        <option value="">Municipio</option>
                    </select>
                </form>
                <button className='form-button'>COMPROBAR DISPONIBILIDAD</button>
            </div>
            <div className="detalles-accordion">
                {accordionData.map((item, index) => (
                    <ProductoDetallesAcordeon key={index} title={item.title} content={item.content} />
                ))}
            </div>
            <div className='detalles-favoritos'>
                <p><span><i className="bi bi-heart"></i></span> AGREGAR A FAVORITOS</p>
            </div>
            <div className='detalles-credifin'>
                <img src={Credifin} alt='Logo' />
                <p>Compra ahora y págalo hasta en 6 cuotas con Credifin. <span>Solicita aquí tu crédito.</span></p>
            </div>

        </div>
    )
}

export default ProductoDetalles