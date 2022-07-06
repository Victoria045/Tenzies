import React, {useState, useEffect} from "react";
import './App.css'; 
import Die from './components/Die';
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {

    const allHeldValues = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if(allHeldValues && allSameValue) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dice])

  function generateNewDice() {
    return {
      value : Math.ceil(Math.random() * 6), 
      isHeld : false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      // newDice.push(Math.floor(Math.random()* 7) + 1)
      newDice.push(generateNewDice())
    }
    return newDice
  }
  // console.log(allNewDice())

  function rollDice() {
    if(!tenzies) {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
          die:
          generateNewDice()
    }))
   } else {
     setTenzies(false)
     setDice(allNewDice())
   }
  }

  function holdDice(id) {
    console.log(id)

    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }
  

  const diceElements = dice.map(die => 
      <Die key={die.id} value={die.value} isHeld={die.isHeld} handleClick={() => holdDice(die.id)} />)

  // useState((roll) => {
  //   console.log("clicked")
  // },[])

  

  return (
    <main>
      {tenzies && <Confetti />}     
      <h1>Tenzies</h1>
      <p className="tenz">Roll untill all dice are the same. Click each die to freeze it as its current value beween rolls.</p>
      <div className="dice-wrap">
        {/* <Die value={diceElement} /> */}
        {diceElements}
      </div>
      <button className="btn-roll" onClick={rollDice}>{ tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
