import {useState} from 'react';
import'./index.css';
const App = () => { 
  const [ diceNumber,setDiceNumber] = useState(6)
  const [ diceNumber2,setDiceNumber2] = useState(3)
  const refreshDice = () =>{
    const rannumber = Math.floor(Math.random() * 6)+1
    setDiceNumber(rannumber)
    const rannumber2 = Math.floor(Math.random() * 6)+1
    setDiceNumber2(rannumber2)
  }
  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
      <img width={300} height={300} src={require(`./assets/${diceNumber2}.png`)}></img>
      <br/>
      <button onClick={()=> refreshDice()} className='button'>Roll</button>
      </center>
    </div>
  );
}

export default App;
