import React, { forwardRef } from 'react'


const ResultModal = forwardRef(function ResultModal({result,targetTime},dialogRef) //component ka function ban raha hai
{
  // const {result,targetTime}=props;
  return (
   <dialog ref={dialogRef} className='result-modal'  >
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