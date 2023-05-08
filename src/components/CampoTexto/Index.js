import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeholderModificado=`${props.placeholder}...`

    const manejarCambio = (e) =>{
       props.actualizarValor(e.target.value)
    }

    return <div className="Campo-Texto">
            <label>{props.titulo}</label>
            <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}// para que tome el cambio al escribir
            />
        </div>
}

export default CampoTexto