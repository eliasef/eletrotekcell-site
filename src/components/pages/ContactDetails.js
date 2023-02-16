import { useParams, useNavigate } from "react-router-dom"

function ContactDetails() {
    const { id } = useParams();

    // redirect
    const navigate = useNavigate();

    const handleContact = () => {
        console.log('Contato enviado!')
        return navigate("/")
    }

  return (
    <div>
      <h1>Exibindo mais informações de contato: {id}</h1>
      <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetails
