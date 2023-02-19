import React from 'react'
import Logo from '../img/logo_preta.png'
import '../styles/navbar.css'

function Navbar() {
  return (
    <header className='Nav'>
      <nav className='nav-list'>
        <img src={Logo} width={180} alt='logo'></img>
        <ul className='nav-list'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#sobre'>Sobre nós</a></li>
            <li><a href='#servicos'>Serviços</a></li>
            <li><a href='#contato'>Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;