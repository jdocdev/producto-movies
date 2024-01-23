import './navMobile.scss'
import { useState, useEffect } from 'react'

const NavMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', closeMenu)
    window.addEventListener('resize', closeMenu)
    return () => {
      window.removeEventListener('scroll', closeMenu)
      window.removeEventListener('resize', closeMenu)
    }
  }, [])

  return (
    <div className={`container-navMobile ${menuOpen ? 'open' : ''}`}>
      <a onClick={toggleMenu}><i className="bi bi-justify-left"></i></a>
      <a><i className="bi bi-search"></i></a>
      {menuOpen && (
        <div className="menu-list">
          <a href="#" target='_blank'>MUJER</a>
          <a href="#" target='_blank'>HOMBRE</a>
          <a href="#" target='_blank'>NUEVOS <span>LANZAMIENTOS</span></a>
          <a href="#" target='_blank'>OFERTAS <span>DE TEMPORADA</span></a>
        </div>
      )}
    </div>
  )
}

export default NavMobile