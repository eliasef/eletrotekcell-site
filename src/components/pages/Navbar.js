import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
    </nav>
  )
}

export default Navbar
