import { useState } from "react";
import "./CampoTexto.css"


const CampoTexto = (props) => 
{
    //let valor = '';
    const [valor, setValor] = useState('')

    const Alterado = (evento) =>{
        props.aoAlterar(evento.target.value)
        console.log(valor)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={Alterado} required={props.Required} placeholder={props.placeholder}></input>
        </div>
    )
}
export default CampoTexto