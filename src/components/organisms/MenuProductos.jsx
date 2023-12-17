import NavLogo from '../molecules/NavLogo'
import Nav from '../molecules/Nav'
import NavSearch from '../molecules/NavSearch'
import NavMenuIcons from '../molecules/NavMenuIcons'

import '/src/components/organisms/MenuProductos.scss'
import NavMobile from '../molecules/NavMobile'



const MenuProductos = ({carrito, onResetCarrito}) => {
  return (
    <div className='container-navbar'>
      <div className='navbar'>
        <NavMobile />
        <NavLogo />
        <Nav />
        <NavSearch />
        <NavMenuIcons carrito={carrito} onResetCarrito={onResetCarrito}/>
      </div>
    </div>
  )
}

export default MenuProductos