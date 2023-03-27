import { useEffect } from 'react';
import {useState} from 'react'
import './App.css';
import SingleCard from './components/singleCard';

const cardImgs = [
  {"src": "/img/chibulls.png", matched: false},
  {"src": "/img/clips.png", matched: false},
  {"src": "/img/grizz.png", matched: false},
  {"src": "/img/kings.png", matched: false},
  {"src": "/img/knicks.png", matched: false},
  {"src": "/img/rockets.png", matched: false}
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
useEffect(()=>{
  if (choice1 && choice2){
    if(choice1.src === choice2.src){
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choice1.src){
            return{...card, matched: true}
          }else{
            return card
          }
        })
      })
      resetTurn()
    } else{
      setTimeout(() =>resetTurn(), 1000)}
  }
},[choice1,choice2]

)

console.log(cards)

//reset choice and turn counter
const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevTurns => prevTurns +1)
}


return (
    <div className="App">
      <h1>NBA Memory Match</h1>
      <button onClick={shuffle}>New Game</button>

      <div className = "card-grid">
        {cards.map(card =>(
          <SingleCard key ={card.id} 
          card = {card} 
          handleChoice={handleChoice}
          flipped={card === choice1 || card === choice2 ||card.matched }/>
        ))}
      </div>
    </div>
);
}

export default App;
