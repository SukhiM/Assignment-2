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
const

  //shuffle cards
  const shuffle = () => {
    const shuffled = [...cardImgs, ...cardImgs]
      .sort(()=> Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    
      setCards(shuffled)

  }
  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
