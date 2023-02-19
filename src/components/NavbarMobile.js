import React, { useState } from 'react'
import '../styles/navbar.css'
import '../styles/navbarMobile.css'

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active)
  }

  return (
    <header className='Navbar'>
      <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode} >
        <div className='hamburguer hamburguerIcon'></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <nav className='list'>
          <ul className='listItems'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#sobre'>Sobre</a></li>
            <li><a href='#servicos'>Serviços</a></li>
            <li><a href='#contato'>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
