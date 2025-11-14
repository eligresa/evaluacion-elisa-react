import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <>
    
    <h1>Super coches de Segunda Mano</h1>
    <p>Esta es una empresa dedicada a la venta de coches de segunda mano</p>
    <img src="src/coches.jpg" alt="exposición coches" />
    <Link to="/empresas"><button>Ver empresas</button></Link> 

    
    </>
  )
}
