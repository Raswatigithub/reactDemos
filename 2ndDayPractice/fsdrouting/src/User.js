import { useLocation } from "react-router-dom";

const User=()=>
{

    let data=useLocation();
    let {name}=data.state
    console.log(data)

return(<>
  
  <h1> user Window </h1>
  {name}

</>)


}
export default User;