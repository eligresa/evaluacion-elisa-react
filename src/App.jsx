import './App.css'
import Inicio from "./components/Inicio"
import Mapa from "./components/Mapa"
import Empresas from "./components/Empresas"
import { Routes, Route, Link } from 'react-router-dom'



export default function App() {


  return (

    <>   


      <nav>
        <Link to="/">Inicio</Link> |
        <Link to="/empresas">Empresas</Link> |
        <Link to="/mapa">Mapa</Link> |
        
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/empresas' element={<Empresas />}></Route>
        <Route path='/mapa' element={<Mapa />}></Route>
      </Routes>

    </>
  )
}
