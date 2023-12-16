import '/src/components/molecules/nav.scss'

import MoviesIconoNav from '/src/img/movies-icono-nav.svg'

const Nav = () => {
    return (
        <div className='navbar-nav'>
            <ul className='nav-links'>
                <li>
                    <span>ㅤ</span>
                    <a href='#' target='_blank' className='links-link'>Mujer</a>
                    <span>ㅤ</span>
                </li>
                <li>
                    <span>ㅤ</span>
                    <a href='#' target='_blank' className='links-link'>Hombre</a>
                    <span>ㅤ</span>
                </li>
                <li>
                    <span>ㅤ</span>
                    <a href='#' target='_blank' className='links-link'>Nuevos</a>
                    <span className='links-Description'>lanzamientos</span>
                </li>
                <li>
                    <img className='links-icono' src={MoviesIconoNav} alt='icono' />
                    <a href='#' target='_blank' className='links-link'>Ofertas</a>
                    <span className='links-Description'>de temporada</span>
                </li>
            </ul>
        </div>
    )
}

export default Nav