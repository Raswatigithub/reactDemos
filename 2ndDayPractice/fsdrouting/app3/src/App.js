import logo from './logo.svg';
import './App.css';
import Rstudent from './Rstudent';
import { Link } from 'react-router-dom';

let users=["asha","pooja","kavita","deepa"]
function App() {
  return (
    <div>

<table border="2" cellpadding="20"  > <tr> 
      <Link to="/">  <td>home </td></Link>
      <Link to="/contact"> <td>contact us </td></Link>
      <Link to="/faq">  <td>faq </td></Link>
      <Link to="/login">  <td> Login</td></Link>
        
        </tr></table>


      <Rstudent/>

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