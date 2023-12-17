import BannerDescuentos from "./components/organisms/BannerDescuentos"
import MenuProductos from "./components/organisms//MenuProductos"
import SectionProductos from "./components/organisms/SectionProductos"
import Footer from "./components/organisms/Footer"

import { useState } from "react"

const App = () => {
  const [carrito, setCarrito] = useState([])

  const handleAgregarAlCarritoAbuelo = (producto) => {
    setCarrito([...carrito, producto])
  }

  const handleResetCarrito = (productoAEliminar) => {
    const nuevoCarrito = carrito.filter((producto) => producto !== productoAEliminar);
    setCarrito(nuevoCarrito);
  };


  return (
    <>
      <BannerDescuentos />
      <MenuProductos carrito={carrito} onResetCarrito={handleResetCarrito}/>
      <SectionProductos onAgregarAlCarritoAbuelo={handleAgregarAlCarritoAbuelo} />
      <Footer />
    </>
  )
}

export default App
