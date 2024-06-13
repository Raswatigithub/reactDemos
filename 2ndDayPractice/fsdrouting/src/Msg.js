// import React from 'react'
// import { Message } from 'semantic-ui-react'

// const Msg = () => (
//   <div>
//     <Message color='olive'>Ur Eligible </Message>
//   </div>
// )

// export default Msg

import { useState } from "react";
import Msg from "./Msg";

const Result=()=>
{


    let[mk,setMk]=useState();
    let[rs,setRe]=useState("wait for Result");
    const handleResult=()=>
    {
      if(mk<50)
      {
        setRe("oops ..next time ..")
      }
      else
      {
        setRe("good")
      }
    }

     return(<>
     
         <input type="text" placeholder="input ur marks" onChange={(e)=>setMk(e.target.value)}/>

         <button onClick={handleResult}>Show Result</button>
       
          <Msg str={rs}/>
     
     </>)




}
export default Result;