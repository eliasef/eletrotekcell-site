import React, {useState} from 'react';
import Logo from '../img/logo_branca.png'
import '../styles/navbar.css';

const Header = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="container">
    <img src={Logo} className="logo" width={180} alt='logo' />

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#sobre">Sobre nós</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a className={classOn ? 'show' : 'hide'} href="#contato">Contato</a>
              </li>        
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Header;
