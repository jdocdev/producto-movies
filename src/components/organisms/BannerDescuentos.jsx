import '/src/components/organisms/bannerDescuentos.scss'

import BannerPromos from '/src/img/banner-descuentos-diciembre.webp'

const BannerDescuentos = () => {
    return (
        <div className='container-bannerPromos'>
            <a href='#' target='_blank' className='bannerPromos-link'>
                <img className='link-img' src={BannerPromos} title='Imagen de promociones mes diciembre' />
            </a>
        </div>
    )
}

export default BannerDescuentos