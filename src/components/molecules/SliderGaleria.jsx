import '/src/components/molecules/sliderGaleria.scss'

import React, { useState } from 'react';

const SliderGaleria = ({ imagenes }) => {
  const [indice, setIndice] = useState(0);

  const avanzar = () => {
    setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
  };

  const retroceder = () => {
    setIndice((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className='carrusels-container'>
      {/* <div className="carrusel-vertical">
        <div className='vertical-img'>
          <img className='img' src={imagenes[indice].url} alt={`Imagen ${indice + 1}`} />
        </div>
        <button className="arriba" onClick={retroceder}><i className="bi bi-caret-up-fill"></i></button>
        <button className="abajo" onClick={avanzar}><i className="bi bi-caret-down-fill"></i></button>
      </div> */}

      <div className="carrusel-horizontal">
        <div className='horizontal-img'>
          <img className='img' src={imagenes[indice].url} alt={`Imagen ${indice + 1}`} />
        </div>
        <button className="izquierda" onClick={retroceder}><i className="bi bi-caret-left-fill"></i></button>
        <button className="derecha" onClick={avanzar}><i className="bi bi-caret-right-fill"></i></button>
      </div>
    </div>
  );
};

export default SliderGaleria;