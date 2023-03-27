import {useState} from 'react'
import './App.css';
import SingleCard from './components/singleCard';

const cardImgs = [
  {"src": "/img/chibulls.png"},
  {"src": "/img/clips.png"},
  {"src": "/img/grizz.png"},
  {"src": "/img/kings.png"},
  {"src": "/img/knicks.png"},
  {"src": "/img/rockets.png"}
]

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)
const [choice1, setChoice1]=useState(null)
const [choice2, setChoice2]=useState(null)

  //shuffle cards
  const shuffle = () => {
    const shuffled = [...cardImgs, ...cardImgs]
      .sort(()=> Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    
      setCards(shuffled)
      setTurns(0)

  }

const handleChoice = (card) =>{
    choice1 ? setChoice2(card) : setChoice1(card)

}

//compare selected cards 


return (
    <div className="App">
      <h1>NBA Memory Match</h1>
      <button onClick={shuffle}>New Game</button>

      <div className = "card-grid">
        {cards.map(card =>(
          <SingleCard key ={card.id} card = {card} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
);
}

export default App;
