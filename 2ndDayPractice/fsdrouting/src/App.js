
import './App.css';
import Product from './Product';
import Rstudent from './Rstudent';
import { Link } from 'react-router-dom';

let users=["asha","pooja","kavita","deepa"];
let data;
function App() {
  return (
    <div>

<table border="2" cellpadding="20"  > <tr> 
      <Link to="/">
           <td>home </td>
      </Link>
      <Link to="/contact"> 
          <td>contact us </td>
      </Link>
     
      <Link to="/login"> 
         <td> Login</td>
      </Link>
      <Link to="/emp">
        <td>User</td>
      </Link>
      <Link to="/product">
    <td>Product</td>
        </Link>
        </tr></table>
        <Rstudent/>
        <br>
        </br>
        
      {
        users.map((temp)=>
     <Link to={`/emp/${temp}`}>  <p>{ temp}</p></Link>
        )
      }





<br/>
<br/><br/><br/><br/>





     


    
    </div>
  );
}

export default App;