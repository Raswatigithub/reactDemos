import React, { forwardRef, useImperativeHandle, useRef } from 'react'


const ResultModal = forwardRef(({result,targetTime},ref)=> //component ka function ban raha hai
{
  // const {result,targetTime}=props;
  const dialog=useRef();
  //now TimerChallenge and ResultModal are de-coupled, if the dialog implementaion of ResultModal
  //changes, then TimerChallenge will not affected by it 
  useImperativeHandle(
    ref,()=>{
      return{
        hello(){
          alert('swati');
        },
        open(){
          dialog.current.showModal();
        }
      }
    }
  )
  return (
   <dialog ref={dialog} className='result-modal'  >
    <h2>Your{result}</h2>
    <p>
        The target time was <strong>{targetTime} second.</strong>
    </p>
    <p>
      You stopped the timer with <strong>X seconds left.</strong>
      </p>
    <form method='dialog'>
        <button>Close</button>
       </form>
   </dialog>
  )
});

export default ResultModal