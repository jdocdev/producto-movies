import NavLogo from '../molecules/NavLogo'
import Nav from '../molecules/Nav'
import NavSearch from '../molecules/NavSearch'
import NavMenuIcons from '../molecules/NavMenuIcons'

import '/src/components/organisms/MenuProductos.scss'
import NavMobile from '../molecules/NavMobile'

const MenuProductos = () => {
  return (
    <div className='container-navbar'>
      <div className='navbar'>
        <NavMobile />
        <NavLogo />
        <Nav />
        <NavSearch />
        <NavMenuIcons />
      </div>
    </div>
  )
}

export default MenuProductos