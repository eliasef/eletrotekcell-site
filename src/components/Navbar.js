import { useState } from 'react';
import '../styles/navbar.css'
import Logo from '../img/logo.png'

function Navbar() {
  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

    const navToggle = () => {
      active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

      toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    };

  return (
    <nav className='nav'>
      <a href='#home' className='nav_brand'>
        ELETROTEKCELL
      </a>
      <ul className={active}>
        <li className='nav_item'><a href='#home' className='nav_link'>Home</a></li>
        <li className='nav_item'><a href='#sobre' className='nav_link'>Sobre nós</a></li>
        <li className='nav_item'><a href='#servicos' className='nav_link'>Serviços</a></li>
        <li className='nav_item'><a href='#contato' className='nav_link'>Contato</a></li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}

export default Navbar;
