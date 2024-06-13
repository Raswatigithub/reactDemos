
import React, { useRef, useState } from 'react'
//using refs to access of connect DOM elements
const Player = () => {
 
  const playerName=useRef()
  const [enteredPlayerName,setEnteredPlayerName]=useState(null);
  
  const handleClick =()=>{
    setEnteredPlayerName(playerName.current.value);
  }
  return (
   <>
    <section id='player'>
      <h2> Welcome {enteredPlayerName ?? 'unkown entity'}</h2>
      <p>
        <input ref={playerName} type='text'/>
        <button onClick={handleClick}>SetName</button>
      </p>
    </section>
   </>
  )
}

export default Player