import React, { useRef, useState } from 'react'

//let timer;
const TimerChallenge = ({title,targetTime}) => {
    const timer=useRef();//this at this point is just a normal variiable without any type
    console.log(timer.current);
    timer.a=101;
    timer.b=123;
    console.log(timer.current);
    console.log(timer.a);
    console.log(timer.b);
    const [timerStarted,setTimerStarted]=useState(false);
    const [timerExpired,setTimerExpired]=useState(false);
    
    function handleStart(){
        timer.current=setTimeout(()=>{
            setTimerExpired(true);
        },targetTime*1000);
        setTimerStarted(true);
    }
    function handleShop(){
        clearTimeout(timer.current)
        alert('stop called')
    }
  return (
    <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ?'s':''}
        </p>
       <p>
       <button onClick={timerStarted?handleShop: handleStart}>
            {timerStarted? 'Stop':'Start'}Challenge
        </button>
       </p>
       <p className={timerStarted ? 'active':undefined}>
        {timerStarted ? 'Time is running...' :' Timer inactive'}
       </p>
    </section>
  )
}

export default TimerChallenge