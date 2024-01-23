import './footerIconosContacto.scss'

const FooterIconosContacto = () => {
    return (
        <div className='contacto-iconos'>
            <div className='iconos-contenedor'>
                <i className="bi bi-bookmark-check"></i>
                <p>Pagos <span>seguros</span></p>
            </div>
            <div className='iconos-separador'>
                <i className="bi bi-circle-fill"></i>
            </div>
            <div className='iconos-contenedor'>
                <i className="bi bi-bus-front"></i>
                <p>Envío a <span>todo el país</span></p>
            </div>
            <div className='iconos-separador'>
                <i className="bi bi-circle-fill"></i>
            </div>
            <div className='iconos-contenedor'>
                <i className="bi bi-telephone-inbound"></i>
                <p>Atención al <span>cliente</span></p>
            </div>
            <div className='iconos-separador'>
                <i className="bi bi-circle-fill"></i>
            </div>
            <div className='iconos-contenedor'>
                <i className="bi bi-bus-front-fill"></i>
                <p>Devoluciones <span>gratuitas</span></p>
            </div>
            <div className='iconos-separador'>
                <i className="bi bi-circle-fill"></i>
            </div>
            <div className='iconos-contenedor'>
                <i className="bi bi-box-seam"></i>
                <p>Seguimiento de <span>pedido</span></p>
            </div>
        </div>
    )
}

export default FooterIconosContacto