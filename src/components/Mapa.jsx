import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 


export default function Mapa() {
  const [empresas, setEmpresas] = useState([])
      useEffect(() => {
          const cargarEmpresas = async () => {
              try {
                  const respuesta = await fetch("/empresas.json")
                  const data = await respuesta.json()
                  setEmpresas(data)
                  console.log(data)
              } catch (e) {
                  console.error(`Se ha producido un error ${e}`)
              }
          }
          cargarEmpresas();
      },[])
  const estilo = {
    height: "600px"
  }
  const position = [40.4168, -3.7038]
  return (
    <>
      <div>

        <MapContainer style={estilo} center={position} zoom={6} scrollWheelZoom={false}>

          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
          </TileLayer>
          {empresas.map((item, index) => (
            
            <Marker key={index} position={[item.lat,item.lng]}>
              <Popup>
                {item.nombre} 
              </Popup>
            </Marker>
          ))}




        </MapContainer>






      </div>



    </>
  )
}
