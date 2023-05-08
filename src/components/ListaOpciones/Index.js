import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map ->   arreglo.mpa ((equipo, index) => {
    //    return <option><option />
    //})

  
    const manejarCambio = (e) => {
        console.log("Cambio",e.target.value)
        props.actualizarEquipo (e.target.value)
    }

    return <div className="Lista-Opciones">
        <label>Equipo</label>      
       <select value={props.value} onChange={manejarCambio}>
            <option value="" desable defaultValue="" hidden>seleccionar equipo</option>
            {props.equipos.map ((equipo, index) => {
                return <option key={index}value={equipo}>{equipo}</option>
            })}
            
       </select>
    </div>
}

export default ListaOpciones