import { useParams } from "react-router-dom";

const Emp=()=>{
  let {name}=useParams();

  return(
    <div>
      <h1>{name}</h1></div>
  )
}
export default Emp;