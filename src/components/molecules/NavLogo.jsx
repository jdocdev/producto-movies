import '/src/components/molecules/navLogo.scss'

import MoviesLogo from '/src/img/movies-logo.svg'

const NavLogo = () => {
    return (
        <div className='navbar-logo'>
            <a href='#' target='_blank' className='logo-link'>
                <img className='link-img' src={MoviesLogo} alt='Logo línea de negocios Movies' />
            </a>
        </div>
    )
}

export default NavLogo