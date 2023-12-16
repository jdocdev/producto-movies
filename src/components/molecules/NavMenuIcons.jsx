import '/src/components/molecules/navMenuIcons.scss'

const NavMenuIcons = () => {
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
                <li>
                    <a href='#' target='_blank' className='links-link'><i className="bi bi-bag"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default NavMenuIcons