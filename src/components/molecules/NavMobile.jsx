import '/src/components/molecules/navMobile.scss'
import { useState } from 'react'

const NavMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

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