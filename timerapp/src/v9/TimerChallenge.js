import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

//exposing a component's API to other components
//let timer;
const TimerChallenge = ({title,targetTime}) => {
    
    const timer=useRef();//this at this point is just a normal variiable without any type
    const dialog=useRef();
    const [timerStarted,setTimerStarted]=useState(false);
    const [timerExpired,setTimerExpired]=useState(false);
    
      //a timer object being created here in handleSatrt,
    //but now handleStop want to access this timer so that it can stop it when required 
    function handleStart(){
   
        timer.current=setTimeout(()=>{
            setTimerExpired(true);
            console.log(dialog)
            dialog.current.open();
            dialog.current.hello();
        },targetTime*1000);
        setTimerStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current)
        
    }
  return (
    <>
    <ResultModal  ref={dialog} targetTime={targetTime} result="lost"/>
    <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ?'s':''}
        </p>
       <p>
       <button onClick={timerStarted?handleStop: handleStart}>
            {timerStarted? 'Stop':'Start'}Challenge
        </button>
       </p>
       <p className={timerStarted ? 'active':undefined}>
        {timerStarted ? 'Time is running...' :' Timer inactive'}
       </p>
    </section>
    </>
  )
}

export default TimerChallenge