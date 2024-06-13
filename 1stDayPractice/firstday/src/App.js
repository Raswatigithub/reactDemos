import BookCard from "./BookCard.js";
import "./App.css"
import { useState } from "react";
const App=()=>
{
  let[bno,setBN]=useState();
  let[name,setName]=useState();
  let[price,setPrice]=useState();
  let[qty,setQty]=useState();
  let [books,setBooks]=useState([
    {bid:101,name:"DSA",price:200,qty:80},
{bid:102,name:"EXPRESS",price:200,qty:30},
{bid:103,name:"JS",price:200,qty:90},
{bid:104,name:"NODE JS ",price:200,qty:10},
{bid:105,name:"REACT",price:200,qty:80},
{bid:105,name:"core java",price:200,qty:80},
{bid:105,name:"advance java",price:200,qty:80}])


const handleBno=(e)=>
{
  setBN(e.target.value)
}

const handleName=(e)=>
{
  setName(e.target.value)
}
const handlePrice=(e)=>
{
  setPrice(e.target.value)
}
const handleQty=(e)=>
{
  setQty(e.target.value)
}

const add=()=>
{
console.log("hiiii")
  let nm={bno,name,price,qty}
  setBooks([nm,...books])



}
return(<>
<div className="main"> 
 <input type="text" placeholder="enter ur bid " onChange={handleBno}/> <br/>
 <input type="text" placeholder="enter ur name" onChange={handleName}/>  <br/>

 <input type="text" placeholder="enter ur price " onChange={handlePrice}/> <br/>
 <input type="text" placeholder="enter ur qty " onChange={handleQty}/> <br/>
  

 <br/><br/>
  <button onClick={add}> ADD</button>

</div>

  <h1>{name}</h1>

{

 books.map((temp)=>
   

<BookCard Bid={temp.bno} name={temp.name} price={temp.price} qty={temp.qty}/>  
    
   )


}
  
</>)



}
export default App;