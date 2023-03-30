import React from 'react'
import Phone from '../img/celulares.png';
import Placa from '../img/placa.png';
import '../styles/banner.css'

function Banner() {
  return (
    <div>
      <section className='banner'>
        <div className='b-container'>
          <div className='info-banner'>
            <p className='bio'>Assistência Técnica Celular e Computadores</p>
            <h1>Meu celular <span className="break">quebrou</span>, <br></br> o que fazer ?</h1>
            <p className='bio2'>Não fique preocupado, o seu problema tem solução <br></br>
              e oferecemos ela como ninguém.</p>
            <a href='https://wa.me/85986026767' target="noreffer" className='button'>Solicite orçamento <span>&gt;</span></a>
          </div>
          <img className='phone' src={Phone} alt="Phone"></img>
          <img className='placa' src={Placa} alt="Placa"></img>
        </div>
      </section>
    </div>
  )
}

export default Banner
