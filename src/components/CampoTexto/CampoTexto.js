import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeholderModificado=`${props.placeholder}...`
    return <div className="Campo-Texto">
            <label>{props.titulo}</label>
            <input placeholder={placeholderModificado} />
        </div>
}

export default CampoTexto