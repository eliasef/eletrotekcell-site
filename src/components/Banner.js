import React from 'react'
import Phone from '../img/break.png'
import '../styles/banner.css'

function Banner() {
  return (
    <div>
      <section className='foco'>
        <div className='b-container'>
          <div className='info-banner'>
            <p className='bio'>Assistência Técnica Celular e Computadores</p>
            <h1>Meu celular quebrou, <br></br> o que fazer ?</h1>
            <p className='bio2'>Não fique preocupado, o seu problema tem solução <br></br>
              e oferecemos ela como ninguém.</p>
            <a href='https://wa.me/85986026767' className='botao'>Solicite orçamento</a>
          </div>
          <img className='phone' src={Phone} alt="Phone"></img>
          <div className='text'>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
