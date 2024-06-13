// import React, { useRef } from 'react'
// import audio from '../Audio/codeAudio.mp3'


// const UseRefPlayer = () => {
//     const audioRef=useRef();

//     const audiohandlePlay=()=>{
//       audioRef.current.play();

//     }
//     const audiohandlePause=()=>{
//       audioRef.current.pause();
//     }

//   return (
//     <div>
//         <audio width='520' height='240' ref={audioRef} controls>
//         <source src={audio} type='audio/mp3'/>
//         </audio>
//         <br>
//         </br>
//         <button onClick={audiohandlePlay}>Play</button>
//         <button onClick={audiohandlePause}>Pause</button>
            
//     </div>
//   )
// }

// export default UseRefPlayer


import React, { useRef } from 'react'
import video from '../Audio/Video/video.mp4'


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


