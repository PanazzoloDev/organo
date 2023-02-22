import './ListaSuspensa.css';

const ListaSuspensa = (props) =>{

    return(
        <div className='Combobox'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor}>
                <option value=''/>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;