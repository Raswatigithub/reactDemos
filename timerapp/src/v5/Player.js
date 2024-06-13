//Manipulating DOM with Refs
import React, { useRef, useState } from 'react'

const Player = () => {
  const [enteredPlayerName,setEnteredPlayerName]=useState(null);
  const playerName=useRef();
  const handleClick =()=>{
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
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