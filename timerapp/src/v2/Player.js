import React, { useState } from 'react'

const Player = () => {
  const [enteredPlayerName,setEnteredPlayerName]=useState(null);
  const [submitted,setSubmitted]=useState(false);
  const handleChange=(event)=>{
    setSubmitted(false);
    
    console.log(setEnteredPlayerName(event.target.value))
  }
  const handleClick=()=>{
    setSubmitted(true);
  }
  return (
    <section id='player'>
      <h2>Welcome {submitted? enteredPlayerName:'unkown entity'}</h2>
      <p>
        <input type='text' onChange={handleChange} value={enteredPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}

export default Player