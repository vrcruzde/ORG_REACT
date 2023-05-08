import { useState } from "react"
import "./Formulario.css"

import CampoTexto from "../CampoTexto/Index"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"


const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] =useState("")

    const manejarEvento = (e) =>{
        e.preventDefault()
        console.log("Manejar el envio")

        let datosEviar = {
            nombre:nombre,
            puesto,
            foto,
            equipo        //cualquiera de las dos formas funciona
        }
        console.log(datosEviar)

    }

    return <section className="formulario">
                <form onSubmit={manejarEvento}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresa nombre" 
                    required={true}
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresa puesto" 
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <CampoTexto 
                    titulo="foto" 
                    placeholder="Ingresa foto" 
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    Crear
                </Boton>

                </form>
            </section>
}

export default Formulario