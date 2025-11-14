import { Link } from "react-router-dom";
import foto from "../assets/coches.jpg"

export default function Inicio() {
  return (
    <>
    
    <h1>Super coches de Segunda Mano</h1>
    <p>Esta es una empresa dedicada a la venta de coches de segunda mano</p>
    <img src={foto} alt="exposición coches" />
    <Link to="/empresas"><button>Ver empresas</button></Link> 

    
    </>
  )
}
