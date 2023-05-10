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

    return <>
        {
        colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
           
        {
            colaboradores.map((colaborador,index) => <Colaborador 
            datos={colaborador} 
            key={index}
            colorprimario={colorprimario}/>)
        }
            

        </div>
        </section>
        }
        </>
}

export default Equipo