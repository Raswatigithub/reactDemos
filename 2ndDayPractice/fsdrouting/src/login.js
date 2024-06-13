import { useNavigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

const Login=()=>
{
const nav=useNavigate();

let [id,setId]=useState();
let [pass1,setPass]=useState();

const signin=()=>
{
    if(id=="101" && pass1=="201")
    {
        nav("/user",{state:{name:id}})

    }
    else{

        nav("/")
    }
}

return(<div className="cont">

  <h1> Sign in </h1><br/>
  <input type="text" placeholder="enter ur id " onChange={(e)=>setId(e.target.value)}/><br/><br/>

  <input type="text" placeholder="enter ur password " onChange={(e)=>setPass(e.target.value)}/><br/><br/>
  
  <button onClick={signin}> sign in</button>

</div>)


}
export default Login;