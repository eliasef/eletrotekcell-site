import '../../styles/logo.css'
import Logo from '../../img/logo.png'
import '../../styles/menu.css'
import '../../styles/classes.css'
import '../../styles/elements.css'
import '../../styles/styles.css'
import '../../styles/variables.css'

function Navbar() {
  return (
    <aside class="menu white-bg">
        <div class="main-content menu-content">   
                <img src={ Logo } alt="logo" className='logo' />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre nós</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    </aside>
  )
}

export default Navbar;
