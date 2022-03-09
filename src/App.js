import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [number, setNumber] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  function getNumber() {
    setDisableButton(true)
    const interval = setInterval(() => { setNumber(Math.floor(Math.random() * 99999 + 1)) }, 100);
    setTimeout(() => { clearInterval(interval); displayAlert(); setDisableButton(false) }, 3000)
  }

  function displayAlert() {
    if (number >= 1 && number <= 1000) {
      alert("Congratulations! You've won!");
    } else {
      alert("Too bad! You've lost!");
    }
  }


  return (
    <div className='app'>
      <div className='title'>
        <h1>The JavaScript Lottery</h1>
      </div>

      <div className='btn'>
        <h2>Click the button to draw a number.</h2>
        <button
          onClick={() => getNumber()}
          disabled={disableButton}
        >
          Let's Play!
        </button>
        <h3>Your Number: {number}</h3>
      </div>

      <h2>* Any number in the 1 to 1000 range wins!</h2>
    </div>
  )
}
