import '../styles/servicos.css'
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

function Servicos() {
  const history = useHistory();

  const handleAppleClick = () => {
    history.push('/iphone');
  };

  return (
    <div className='s-container'>
      <div className='text-servicos'>
        <h3><span>Serviços</span> <br></br>
          Serviços
        </h3>
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
          <button onClick={handleAppleClick}>Botão</button>
            <h3>Iphone</h3>
        </div>
      </div>
    </div>
  );
}

export default Servicos;