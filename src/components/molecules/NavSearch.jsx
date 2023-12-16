import '/src/components/molecules/navSearch.scss'

const NavSearch = () => {
    return (
        <div className='navbar-search'>
            <input className='search-input' placeholder='Encuentra tu preferido'/>
            <i className="search-icon bi bi-search"></i>
        </div>
    )
}

export default NavSearch