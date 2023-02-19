import React from 'react'
import '../styles/navbar.css'

function Navbar() {
  return (
    <header className='Nav'>
      <nav className='nav-list'>
        <a className='logo' href='#logo'>Eletrotekcell</a>
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