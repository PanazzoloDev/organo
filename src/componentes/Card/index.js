import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="cabecalho"  style={{background: props.Primaria}}>
                <img src={props.Source} alt="Imagem do card"/>
            </div>
            <div className="rodape">
                <h4>{props.Nome}</h4>
                <h5>{props.Cargo}</h5>
            </div>
        </div>
    )
}

export default Card