import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Empresas() {
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
    return (
        <>
            <ul>

                {empresas.map((item,index)=>(
                    <li key={index}>{item.nombre}</li>
                ))}


            </ul>

        </>
    )
}


