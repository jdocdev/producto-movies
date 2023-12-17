import '/src/components/organisms/sectionProductos.scss'

import SliderMigaPan from '../molecules/SliderMigaPan'
import SliderGaleria from '../molecules/SliderGaleria'

import imagenes from '/src/datos/imagenesProducto.json'
import SliderInfoEnvio from '../molecules/SliderInfoEnvio'
import ProductoCaracteristicas from '../molecules/ProductoCaracteristicas'
import ProductoDetalles from '../molecules/ProductoDetalles'




const SectionProductos = ({ onAgregarAlCarritoAbuelo }) => {
  return (
    <div className='container-productos'>
      <div className='producto'>
        <section className='producto-galeria'>
          <SliderMigaPan />
          <SliderGaleria imagenes={imagenes} />
          <SliderInfoEnvio />
        </section>
        <section className='producto-detalles'>
          <ProductoCaracteristicas onAgregarAlCarrito={onAgregarAlCarritoAbuelo} />
          <ProductoDetalles />
        </section>
      </div>
    </div>
  )
}

export default SectionProductos