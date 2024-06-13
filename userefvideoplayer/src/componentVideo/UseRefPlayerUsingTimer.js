import React, { useRef } from 'react'
import video from '../video/video.mp4'


const UseRefPlayer = () => {
    const videoRef=useRef();

    const handlePlay=()=>{
      videoRef.current.play();

    }
    const handlePause=()=>{
      videoRef.current.pause();
    }

  return (
    <div>
        <video width='520' height='240' ref={videoRef} controls>
        <source src={video} type='video/mp4'/>
        
        </video>
        <br>
        </br>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
            
    </div>
  )
}

export default UseRefPlayer