import './footerMenu.scss'

const FooterMenu = () => {

    return (
        <div className='container-menus'>
            <div className='menus-redes'>
                <div className='redes'>
                    <h4 className='menu-titulo'>SÍGUENOS</h4>
                    <div>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className='contacto'>
                    <h4 className='menu-titulo'>CONTÁCTANOS</h4>
                    <div>
                        <p><i className="bi bi-envelope"></i> servicioalcliente@moviesshop.co</p>
                        <p><i className="bi bi-telephone-fill"></i> +57 300 910 8311</p>
                        <p><i className="bi bi-geo-alt"></i> NUESTRAS TIENDAS</p>
                    </div>
                </div>
            </div>
            <div className='menus'>
                <ul className='menu-lista'>
                    <h4 className='menu-titulo'>TE AYUDAMOS</h4>
                    <li>
                        <a href='#' target='_blank'>Preguntas frecuentes</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Garantía de productos</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Cambios y devoluciones</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Contáctanos</a>
                    </li>
                </ul>
            </div>
            <div className='menus'>
                <ul className='menu-lista'>
                    <h4 className='menu-titulo'>INFORMACIÓN LEGAL</h4>
                    <li>
                        <a href='#' target='_blank'>Términos y condiciones</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Términos y condiciones</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>recoge en tienda física</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Modificar mi suscripción</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Políticas de privacidad</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Legales Campañas</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Políticas de devoluciones</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Superintendencia Industria y Comercio</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Autorización tratamiento de datos</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Transparencia y Ética</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Empresarial</a>
                    </li>
                </ul>
            </div>
            <div className='menus'>
                <ul className='menu-lista'>
                    <h4 className='menu-titulo'>MI CUENTA</h4>
                    <li>
                        <a href='#' target='_blank'>Iniciar sesión</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Rastrea pedido</a>
                    </li>
                </ul>
            </div>
            <div className='menus'>
                <ul className='menu-lista'>
                    <h4 className='menu-titulo'>Acerca de movies</h4>
                    <li>
                        <a href='#' target='_blank'>Nuestra historia</a>
                    </li>
                    <li>
                        <a href='#' target='_blank'>Trabaja con nosotros</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterMenu