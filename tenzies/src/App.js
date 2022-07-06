import React, {useState} from "react";
import './App.css'; 
import Die from './components/Die';
import {nanoid} from "nanoid";

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      // newDice.push(Math.floor(Math.random()* 7) + 1)
      newDice.push({
        value : Math.ceil(Math.random() * 6), 
        isHeld : true,
        id: nanoid()
      })
    }
    return newDice
  }
  // console.log(allNewDice())


  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)

  // useState((roll) => {
  //   console.log("clicked")
  // },[])

  function rollDice() {

    setDice(allNewDice())
  }

  

  return (
    <main>
      <div className="dice-wrap">
        {/* <Die value={diceElement} /> */}
        {diceElements}
      </div>
      <button className="btn-roll" onClick={rollDice}>Roll</button>    
    </main>
  );
}

export default App;
