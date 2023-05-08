import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuración
    const {colorprimario,colorsecundario,titulo} = props.datos

    const obj={
        backgroundColor : colorsecundario
    }

    const estiloTitulo= {borderColor:colorprimario}

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />

        </div>
    </section>
}

export default Equipo