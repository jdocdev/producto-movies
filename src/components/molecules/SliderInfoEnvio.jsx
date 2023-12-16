import '/src/components/molecules/sliderInfoEnvio.scss'

const SliderInfoEnvio = () => {
  return (
    <div className='container-infoEnvio'>
      <p
        className='infoEnvio'>
        <span><i className="bi bi-bus-front-fill"></i></span>
        Envío
        <span> a toda Colombia</span>
      </p>
      <p
        className='infoEnvio'>
        <span><i className="bi bi-alarm"></i></span>
        Tiempo de entrega
        <span> 3 a 7 días hábiles</span>
      </p>
    </div>
  )
}

export default SliderInfoEnvio