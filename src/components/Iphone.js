import React from 'react';
import Navbar from './Navbar';
import IphonePhoto from '../img/iphone.png'
import '../styles/iphone.css'
import { BsWhatsapp } from 'react-icons/bs';
import Footer from './Footer';

function Iphone() {

  return (
    <div>
      <Navbar />
      <div class="container-apple">
        <img className='img-phone' width={266} src={IphonePhoto} alt="Iphone" />
        <div className='sobre'>
          A <strong>Apple</strong> nasceu em abril de 1976, construindo e inovando o que entendemos como <br></br> tecnologia. Steve Jobs revolucionou ainda mais a forma de comunicação quando em 2007 <br></br> lançou o primeiro <strong>iPhone</strong>. Esse primeiro modelo apresentava uma tela maior que as <br></br> disponíveis no mercado, além de uma tela totalmente interativa que respondia a um simples <br></br> toque. <br></br><br></br>

          Desde a sua criação, o <strong>iPhone</strong> foi ganhando espaço e se fortalecendo como um modelo que <br></br> veio para ficar no nosso dia-a-dia. Aos que já foram mordidos pela marca, ela não deixa a <br></br> desejar: design elegante, um sistema operacional diferenciado, maior segurança de dados e <br></br> tela com altíssima qualidade.
          <br></br><br></br>
          Uma parcela alta dos usuários <strong>Apple</strong> utilizam seus <strong>iPhones</strong> como ferramenta de trabalho <br></br> pela comodidade que esses smartphones oferecem. Outros utilizam sem fins profissionais, <br></br> no entanto, isso não os tornam menos exigentes.
        </div>
      </div>
      <button className='btn-apple'><a href="https://wa.me/5585988113939" target="noreffer">Conserto de Iphone</a> <BsWhatsapp /> </button>
      <div className='text-iphone'>
        <h2><span>Modelos</span> <br></br>
          Modelos de Iphone
        </h2>
        <p>Veja abaixo qual <strong>iPhone</strong> é o seu e entre em contato conosco. <br></br>
          Temos uma <strong>Assistência Técnica Apple</strong> preparada para ajudar você!</p>
      </div>

      <ul className='iphone-models'>
        <li>Conserto de iPhone SE (1ª geração)</li>
        <li>Conserto de iPhone 6</li>
        <li>Conserto de iPhone 6 Plus</li>
        <li>Conserto de iPhone 6s</li>
        <li>Conserto de iPhone 6s Plus</li>
        <li>Conserto de iPhone 7</li>
        <li>Conserto de iPhone 7 Plus</li>
        <li>Conserto de iPhone 8</li>
        <li>Conserto de iPhone 8 Plus</li>
        <li>Conserto de iPhone X</li>
        <li>Conserto de iPhone XR</li>
        <li>Conserto de iPhone XS</li>
        <li>Conserto de iPhone XS Max</li>
        <li>Conserto de iPhone SE (2ª geração)</li>
        <li>Conserto de iPhone 11</li>
        <li>Conserto de iPhone 11 Pro</li>
        <li>Conserto de iPhone 11 Pro Max</li>
        <li>Conserto de iPhone 12</li>
        <li>Conserto de iPhone 12 mini</li>
        <li>Conserto de iPhone 12 Pro</li>
        <li>Conserto de iPhone 12 Pro Max</li>
        <li>Conserto de iPhone SE (3ª geração)</li>
        <li>Conserto de iPhone 13</li>
        <li>Conserto de iPhone 13 mini</li>
        <li>Conserto de iPhone 13 Pro</li>
        <li>Conserto de iPhone 13 Pro Max</li>
        <li>Conserto de iPhone 14</li>
        <li>Conserto de iPhone 14 Pro</li>
        <li>Conserto de iPhone 14 Pro Max</li>
        <li>Conserto de iPhone 14 Plus</li>
      </ul>

      <div className='manutencoes'>

        <h2>
          Manutenção Iphone
        </h2>
        <p>Com o uso contínuo do aparelho, naturalmente é maior a probabilidade de uma<br></br><strong>manutenção no iPhone</strong>, seja por tempo de uso ou imprevistos. Eles podem ser <br></br>de duas natureza: Hardware (Componentes físicos do aparelho) ou Software (Sistema).</p>

        <h2>
          Troca de Bateria iPhone
        </h2>
        <p>Entre os problemas de hardware mais comuns apontamos a <strong>bateria viciada do Iphone</strong>.<br></br> A própria Apple fornece aos seus usuários o  percentual de vida útil da bateria, para que a <br></br>manutenção iphone seja feita no tempo adequado. Caso o smartphone não tenha uma boa <br></br> durabilidade de carga ou desligue sem motivo, é necessário levar a uma <strong>assistência técnica Apple</strong>.</p>

        <h2>
          Troca de tela Iphone
        </h2>
        <p>
          A <strong>troca de tela Iphone</strong> é outro problema comum, seja por tempo de uso ou outros fatores externos.<br></br> Não importando  o motivo, é um problema de fácil resolução, ao <strong>trocar a tela iphone</strong> o seu <br></br>aparelho estará pronto para uso. Defeitos de placa, sistema de carga, nfc ou flex, também <br></br> são problemas físicos de rápida solução.
          <br></br><br></br>
          Quanto aos problemas de software é perfeitamente possível reparar erros no sistema,<br></br> é necessário apenas verificar qual é a origem do erro.  Defeitos físicos ou de sistema<br></br> necessitam de uma <strong>assistência técnica Apple</strong> de confiança, que atenda e solucione da <br></br>melhor forma os possíveis problemas com o <strong>conserto de iPhone</strong>.
        </p>

        <h1>Entre agora em contato que iremos te ajudar!</h1>
        <p>
        A <strong>Eletrotekcell Fortaleza</strong> está qualificada para oferecer o <strong>conserto de Iphone</strong>, realizando tanto <br></br>reparos básicos como de alta complexidade, oferecendo as  melhores peças disponíveis, <br></br>bem como profissionais competentes e qualificados.
        </p>

        <button className='btn-apple'><a href="https://wa.me/85986026767" target="noreffer">Conserto de Iphone</a> <BsWhatsapp /> </button>

      </div>
      <Footer />
    </div>
  )
}

export default Iphone;
