import NavMenuCarrito from './NavMenuCarrito'
import '/src/components/molecules/navMenuIcons.scss'
import { useState, useEffect } from 'react'

const NavMenuIcons = ({ carrito, onResetCarrito }) => {

    const [carritoOpen, setCarritoOpen] = useState(false)

    const toggleCarrito = () => {
        setCarritoOpen(!carritoOpen)
    }

    const closeCarrito = () => {
        setCarritoOpen(false)
    }

    const handleCloseCarrito = () => {
        setCarritoOpen(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', closeCarrito)
        window.addEventListener('resize', closeCarrito)
        return () => {
            window.removeEventListener('scroll', closeCarrito)
            window.removeEventListener('resize', closeCarrito)
        }
    }, [])


    return (
        <div className='navbar-navIcons'>
            <ul className='navIcons-links'>
                <li>
                    <a href='#' target='_blank' className='links-link'><i className="bi bi-chat-right-text"></i></a>
                </li>
                <li>
                    <a href='#' target='_blank' className='links-link'><i className="bi bi-person"></i></a>
                </li>
                <li>
                    <a href='#' target='_blank' className='links-link'><i className="bi bi-heart"></i></a>
                </li>
                <li>
                    <a href='#' target='_blank' className='links-link'><i className="bi bi-geo-alt"></i></a>
                </li>
                <li >
                    <a onClick={toggleCarrito} className='links-link'><i className="bi bi-bag"></i></a>
                    {carritoOpen && (
                        <NavMenuCarrito carrito={carrito} onCloseCarrito={handleCloseCarrito} onResetCarrito={onResetCarrito}/>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default NavMenuIcons