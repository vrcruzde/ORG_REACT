import "./Formulario.css"

import CampoTexto from "../CampoTexto/CampoTexto"

const Formulario = () => {
    return <section className="formulario">
                <form>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresa nombre"/>
                <CampoTexto titulo="Puesto" placeholder="Ingresa puesto"/>
                <CampoTexto titulo="foto" placeholder="Ingresa foto"/>

                </form>
            </section>
}

export default Formulario