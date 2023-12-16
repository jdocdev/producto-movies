import FooterFormulario from '../molecules/FooterFormulario'
import FooterIconosContacto from '../molecules/FooterIconosContacto'
import FooterMenu from '../molecules/FooterMenu'
import '/src/components/organisms/footer.scss'
import MediosPago from '/src/img/medios-de-pago.png'

const Footer = () => {
    return (

        <div className='contenedor-footer'>
            <div className='footer-secciones'>
                <div className='footer-contacto'>
                    <FooterIconosContacto />
                    <FooterFormulario />
                    <div className='contacto-mediosPago'>
                        <img src={MediosPago} alt='metodos de pago' />
                    </div>
                </div>
                <footer className='footer-menu'>
                    <FooterMenu />
                    <div className='footer-pie'>
                        <p>Todos los derechos reservados Movies 2021 | Empowered by VTEX | SSL SECURE</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer