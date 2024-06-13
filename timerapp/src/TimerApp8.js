import React from 'react'
import Player from './v8/Player'
import TimerChallenge from './v8/TimerChallenge'

const TimerApp8 = () => {
  return (
    <>
    <Player/>
    <div id='challenges'>
   <TimerChallenge title='Easy' targetTime={1}/>
    <TimerChallenge title='Not Easy' targetTime={5}/>
    <TimerChallenge title='Getting Tough' targetTime={10}/>
    <TimerChallenge title='Pros Only' targetTime={15}/>
    
    </div>
    </>
  )
}

export default TimerApp8