import '../styles/servicos.css'
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { SiSamsung } from 'react-icons/si';
import { SiMotorola } from 'react-icons/si';
import { SiXiaomi } from 'react-icons/si';
import { RiComputerFill } from 'react-icons/ri'
import IphoneLogo from '../img/iphonelogo.png'
import SamsungLogo from '../img/samsunglogo.png'
import MotorolaLogo from '../img/motorolalogo.png'
import XiaomiLogo from '../img/xiaomilogo.png'
import PcLogo from '../img/pclogo.png'

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

  const handlePcClick = () => {
    window.open('/computador', '_blank')
  };

  return (
    <div className='s-container'>
      <div className='text-servicos'>
        <h2><span>Serviços</span> <br></br>
          Serviços
        </h2>
        <p>Fornecemos assistência técnica especializada, utilizando <br></br>
          os melhores componentes disponíveis no mercado para <br>
          </br> seu smartphone e computador.
        </p>
      </div>
      <div className='servicos-wrapper'>
        <div className='info-servicos'>
          <div className='circulo'>
            <img src={IphoneLogo} alt="iphone"/>
          </div>
          <div className='title-servicos'>
            <h3>Iphone</h3>
            <span onClick={handleAppleClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>

        <div className='info-servicos'>
          <div className='circulo'>
            <img src={SamsungLogo} alt="samsung" />
          </div>

          <div className='title-servicos'>
            <h3>Samsung</h3>
            <span onClick={handleSamsungClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
        <div className='info-servicos'>
          <div className='circulo'>
            <img src={MotorolaLogo} alt="motorola" />
          </div>
          <div className='title-servicos'>
            <h3>Motorola</h3>
            <span onClick={handleMotorolaClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
        <div className='info-servicos'>
          <div className='circulo'>
            <img src={XiaomiLogo} alt="xiaomi" />
          </div>
          <div className='title-servicos'>
            <h3>Xiaomi</h3>
            <span onClick={handleXiaomiClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
        <div className='info-servicos'>
          <div className='circulo'>
            <img src={PcLogo} alt="pc" />
          </div>
          <div className='title-servicos'>
            <h3>Computador</h3>
            <span onClick={handlePcClick}>Saiba mais <span>&gt;</span></span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Servicos;