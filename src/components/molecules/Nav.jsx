import { useState } from 'react';
import './nav.scss'

import MoviesIconoNav from '../../img/movies-icono-nav.svg'

const Nav = () => {

    const [showDropdown, setShowDropdown] = useState(false)

    const handleMouseEnter = () => {
        setShowDropdown(true)
    }

    const handleMouseLeave = () => {
        setShowDropdown(false)
    }

    return (
        <div className='navbar-nav'>
            <ul className='nav-links'>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span>ㅤ</span>
                    <a href='#' target='_blank' className='links-link'>Mujer</a>
                    {showDropdown && (
                        <div className='dropdown-content'>
                            <p>MUJER</p>
                            <a href='#' target='_blank'>Camisas</a>
                            <a href='#' target='_blank'>Camisetas</a>
                            <a href='#' target='_blank'>Pijamas</a>
                            <a href='#' target='_blank'>Ropa interior</a>
                            <a href='#' target='_blank'>Chaquetas y buzos</a>
                            <a href='#' target='_blank'>Joggers, pantalones y shorts</a>
                            <a href='#' target='_blank'>Calzado</a>
                            <a href='#' target='_blank'>Accesorios</a>
                        </div>
                    )}
                    <span>ㅤ</span>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span>ㅤ</span>
                    <a href='#' target='_blank' className='links-link'>Hombre</a>
                    {showDropdown && (
                        <div className='dropdown-content'>
                            <p>HOMBRE</p>
                            <a href='#' target='_blank'>Camisas</a>
                            <a href='#' target='_blank'>Camisetas</a>
                            <a href='#' target='_blank'>Pijamas y ropa interior</a>
                            <a href='#' target='_blank'>Chaquetas y buzos</a>
                            <a href='#' target='_blank'>Joggers, pantalones y bermudas</a>
                            <a href='#' target='_blank'>Accesorios</a>
                            <a href='#' target='_blank'>Pantalonetas de baño</a>
                        </div>
                    )}
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