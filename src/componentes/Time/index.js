import Card from "../Card";
import "./Time.css";

const Time = (props) => {
    const Sectioncss = { backgroundColor: props.Secundaria };
    return (
        (props.Cards.length > 0) ? <section className="Time" style={Sectioncss}>
            <h3 style={{ borderColor: props.Primaria }}>{props.Nome}</h3>
            <div className="Cards">
                {props.Cards.map(card => <Card
                    key={card.nome}
                    Primaria={props.Primaria}
                    Source={card.imagem}
                    Cargo={card.cargo}
                    Nome={card.nome} />
                )}
            </div>
        </section> : null
    )
}

export default Time;