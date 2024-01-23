import './footerFormulario.scss'

const FooterFormulario = () => {
    return (
        <div className="contenedor-formulario">
            <h3 className="formulario-titulo">LA HISTORIA CONTINÚA...</h3>
            <h4 className="formulario-subtitulo">Suscríbete y entérate de lanzamientos exclusivos, nuevas colecciones y descuentos especiales</h4>
            <form className="formulario">
                <div className="contenedor-inputs">
                    <input placeholder="Nombres y apellidos" />
                    <input placeholder="Celular" />
                    <input placeholder="Correo electrónico" />
                    <input placeholder="Número de documento" />
                </div>
                <div className="contenedor-checks">
                    <p className="check-title">Te interesa productos para</p>
                    <div className="checkboxs">
                            <input type="checkbox" /> <span>Mujer</span>
                            <input type="checkbox" /> <span>Hombre</span>
                    </div>
                </div>
                <div className="contenedor-politicas">
                    <div className="politicas-check">
                        <input type="checkbox" /> <a href="#" target="_blank">Aceptas Tratamiento de Datos Personales y Términos y Condiciones</a>
                    </div>
                    <button className="politicas-button">SUSCRIBIRME</button>
                </div>
            </form>
        </div>
    )
}

export default FooterFormulario