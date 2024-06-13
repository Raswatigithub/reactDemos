import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(({targetTime,remainingTime,onReset},ref)=> //component ka function ban raha hai
{
  const dialog=useRef();
  const userLost=remainingTime <=0;
  const userWin=remainingTime ===0;
  const formattedRemainingTime =(remainingTime /1000).toFixed(2);
  const score=Math.round((1- remainingTime/(targetTime * 1000))*100)
  //now TimerChallenge and ResultModal are de-coupled, if the dialog implementaion of ResultModal
  //changes, then TimerChallenge will not affected by it 
  useImperativeHandle(
    ref,()=>{
      return{ 
        open(){
          dialog.current.showModal();
        }
      }
    }
  );
  return createPortal(
   <dialog ref={dialog} className='result-modal'>
    {userWin && <h2>You Win the Game...</h2> && userLost && <h2>You Lost Game!</h2>} 
    {}
    {!userLost && <h3>Your Score :{score}</h3>}
    
    <p>
        The target time was <strong>{targetTime} second.</strong>
    </p>
    <p>
      You stopped the timer with {' '}
       <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
    <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
       </form>
   </dialog>,
   document.getElementById('modal')
  )
});

export default ResultModal