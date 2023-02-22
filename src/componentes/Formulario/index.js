import './Formulario.css';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Button from '../Button';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, SetNome] = useState('');
    const [cargo, SetCargo] = useState('');
    const [imagem, SetImagem] = useState('');
    const [time, SetTime] = useState('');
    
    const AoSalvar = (evento) =>{
        evento.preventDefault()
        props.AoCriarCard({
            nome,
            cargo,
            time,
            imagem
        })
        SetNome('');
        SetCargo('');
        SetImagem('');
        SetTime('Programação');
    }

    return (
        <section className="Formulario">
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto valor={nome} aoAlterar={valor => SetNome(valor)} Required={true} label="Nome" placeholder="Informe o seu Nome" />
                <CampoTexto valor={cargo} aoAlterar={valor => SetCargo(valor)} Required={true} label="Cargo" placeholder="Informe o seu Cargo" />
                <CampoTexto valor={imagem} aoAlterar={valor => SetImagem(valor)} Required={false} label="Imagem" placeholder="Selecione uma imagem" />
                <ListaSuspensa valor={time} aoAlterar={valor => SetTime(valor)} label="Grupo" itens={props.Times}/>
                <Button Text="Criar CARD"/>
            </form>
        </section>
    )
}

export default Formulario;