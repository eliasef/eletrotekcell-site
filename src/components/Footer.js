
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
import { AiTwotoneMail } from 'react-icons/ai'

function Footer() {
  return (
    <footer id='contato' className="footer">
      <div className="footer-address">
        <div className='title-adress'>endereço</div>
        <p><AiFillHome />R. Alberto Magno, 625 - Montese | Fortaleza - CE</p>
        <div className="footer-hours">
          <p>Segunda a sexta - 08:00 às 17:00</p>
          <p className='second-hours'>Sábado - 08:00 às 12:00</p>
        </div>
      </div>
      <div className="footer-contact">
        <div className='title-contact'><span>contatos</span></div>
        <div className='contacts'>
          <p><BsFillTelephoneFill />(85) 9 8602-6767</p>

          <p><AiTwotoneMail />eletrotekcellfortaleza@gmail.com</p>

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
      </div>
    </footer>
  );
}

export default Footer;