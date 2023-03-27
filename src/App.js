import {useState} from 'react'
import './App.css';

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


  //shuffle cards
  const shuffle = () => {
    const shuffled = [...cardImgs, ...cardImgs]
      .sort(()=> Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    
      setCards(shuffled)
      setTurns(0)

  }

console.log(cards,turns)

return (
    <div className="App">
      <h1>NBA Memory Match</h1>
      <button onClick={shuffle}>New Game</button>

      <div className = "card-grid">
        {cards.map(card =>(
          <div className='card' key={card.id}> 
            <div>
              <img className = "front" src={card.src} alt="card front"/>
              <img className= 'back'   src ="/img/nba.png" alt="card back"/>
            </div>
          </div>
        ))}
      </div>
    </div>
);
}

export default App;
