
import '../styles/footer.css'
import { AiFillHome } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiVisa } from 'react-icons/si';
import { FaCcMastercard } from 'react-icons/fa';
import { GrAmex } from 'react-icons/gr';
import { MdPix } from 'react-icons/md';
import { FaCcDinersClub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
  return (
    <footer id='contato' className="footer">
      <div className="footer-address">
        <div className='title-adress'>endereço</div>
        <p><AiFillHome />Rua Henrique Jorge, 1058 - Joaquim Távora</p>
        <div className="footer-hours">
          <p>Segunda a sexta - 08:00 às 17:00</p>
          <p>Sábado - 08:00 às 12:00</p>
        </div>
      </div>
      <div className="footer-contact">
        <div className='title-contact'><span>contatos</span></div>
        <div className='contacts'>
          <p><BsFillTelephoneFill />(85) 9 8602-6767</p>

          <p>contato@eletrotekcell.com.br</p>

          <p><a href='https://www.instagram.com/eletrotekcellfortaleza1899/' target="noreffer">
            <BsInstagram />
          </a> <a href='https://wa.me/85986026767' target="noreffer">
            <BsWhatsapp />
          </a></p>
        </div>
      </div>
      <div className="footer-payment">

        <SiVisa />
        <FaCcMastercard />
        <GrAmex />
        <MdPix />
        <FaCcDinersClub />

      </div>
      <div className="footer-copy">
        <p>&copy; 2022 - Eletrotekcell Fortaleza</p>
      </div>
    </footer>
  );
}

export default Footer;