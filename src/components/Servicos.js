import '../styles/servicos.css'
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';


function Servicos() {
  const history = useHistory();

  const handleAppleClick = () => {
    window.open('/iphone', '_blank')
  };

  return (
    <div className='s-container'>
      <div className='text-servicos'>
        <h2><span>Serviços</span> <br></br>
          Serviços
        </h2>
        <p>Fornecemos assistência técnica especializada, utilizando <br></br>
          os melhores componentes disponíveis no mercado para <br>
          </br> seu smartphone.
        </p>
      </div>
      <div className='info-servicos'>
        <div className='circulo'>
          <AiFillApple />
        </div>
        <div className='title-servicos'>
          <h3>Iphone</h3>
            <span onClick={handleAppleClick}>Saiba mais <span>&gt;</span></span>
        </div>
      </div>
    </div>
  );
}

export default Servicos;