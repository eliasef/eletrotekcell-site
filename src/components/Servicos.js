import '../styles/servicos.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillApple } from 'react-icons/ai';

function Servicos() {
  
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
          <Link to="/iphone">
          <h3>Iphone</h3>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Servicos;
