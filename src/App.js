import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
function App() {

  const times = [
    { nome: 'Programação', primaria: '#57C278', secundaria: '#D9F7E9' },
    { nome: 'Front-End', primaria: '#82CFFA', secundaria: '#E8F8FF' },
    { nome: 'Data Science', primaria: '#A6D157', secundaria: '#F0F8E2' },
    { nome: 'DevOps', primaria: '#E06B69', secundaria: '#FDE7E8' },
    { nome: 'UX e Design', primaria: '#D86EBF', secundaria: '#FAE5F5' },
    { nome: 'Mobile', primaria: '#FEBA05', secundaria: '#FFF5D9' },
    { nome: 'Inovação e Gestão', primaria: '#FF8A29', secundaria: '#FFEEDF' }]

  const [cards, SetCard] = useState([]);
  const NovoCardCriado = (card) => {
    SetCard([...cards,card]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario Times={times.map(time => time.nome)} AoCriarCard={card => NovoCardCriado(card)} />
      {times.map(time =>
        <Time
          key={time.nome}
          Nome={time.nome}
          Cards={cards.filter(card => card.time === time.nome)}
          Primaria={time.primaria}
          Secundaria={time.secundaria}
        />)}
        <Rodape/>
    </div>
  );
}

export default App;