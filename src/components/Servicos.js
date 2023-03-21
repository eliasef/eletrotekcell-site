import '../styles/servicos.css'
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { SiSamsung } from 'react-icons/si';
import { SiMotorola } from 'react-icons/si';
import { SiXiaomi } from 'react-icons/si';

function Servicos() {

  const handleAppleClick = () => {
    window.open('/iphone', '_blank')
  };

  const handleSamsungClick = () => {
    window.open('/samsung', '_blank')
  };

  const handleMotorolaClick = () => {
    window.open('/motorola', '_blank')
  };

  const handleXiaomiClick = () => {
    window.open('/xiaomi', '_blank')
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
      <div className='servicos-wrapper'>
        <div className='info-servicos'>
          <div className='circulo'>
            <AiFillApple />
          </div>
          <div className='title-servicos'>
            <h3>Iphone</h3>
            <span onClick={handleAppleClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
        <div className='info-servicos'>
          <div className='circulo'>
            <SiSamsung />
          </div>
          <div className='title-servicos'>
            <h3>Samsung</h3>
            <span onClick={handleSamsungClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
        <div className='info-servicos'>
          <div className='circulo'>
            <SiMotorola />
          </div>
          <div className='title-servicos'>
            <h3>Motorola</h3>
            <span onClick={handleMotorolaClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
        <div className='info-servicos'>
          <div className='circulo'>
            <SiXiaomi />
          </div>
          <div className='title-servicos'>
            <h3>Xiaomi</h3>
            <span onClick={handleXiaomiClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Servicos;