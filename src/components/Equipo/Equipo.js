import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuración
    const {colorprimario,colorsecundario,titulo} = props.datos
    const {colaboradores} = props
    

    const obj={
        backgroundColor : colorsecundario
    }

    const estiloTitulo= {borderColor:colorprimario}

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
           
        {
            colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index}/>)
        }
            

        </div>
    </section>
}

export default Equipo