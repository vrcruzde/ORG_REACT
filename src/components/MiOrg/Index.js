import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props) =>{

   /* const [mostrar,actualizarMOstrar] = useState (true)
    const manejarClick = () =>{
        console.log("MOstrar/Ocultar elemento", !mostrar)
        actualizarMOstrar(!mostrar) // forma de hacer un Switch
    }*/

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section> 
    
    
}

export default MiOrg