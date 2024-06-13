import React, { useEffect, useState } from 'react'
import './App.css';
import FoodCard from './FoodCard';
const App = () => {
  let [Foods,setFoods]=useState([]);
  let [search,setSearch]=useState("");
  let [name,setName]=useState("");
  let [id,setId]=useState();
  let [price,setPrice]=useState("");
  let [image,setImage]=useState();
  let [Ffoods,setFfoods]=useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((temp)=>temp.json())
    .then((res)=>setFoods(res))
    .catch((event)=>console.log(event))
  },[])

  const remove=(id)=>{
    const data=Foods.filter((temp)=>temp.id!=id)
    alert(id);
    setFoods(data)
  }

  const add=()=>{
    const addnew={id,name,price,image};
    setFoods([addnew,...Foods])
  }
  useEffect(()=>{
    let temp=Foods.filter((data)=>data.title.includes(search));
    console.log(temp);
    setFfoods(temp);
  },[search])
  return (
    <>
    <header className='header-con'><h1>Food App</h1>
    <p className='search'>
    <label>  Search </label>
      <input type='text' placeholder='Enter the name of the food ' onChange={(event)=>setSearch(event.target.value)}/>
    </p>
    </header>
    <div className='input_container'>
      <label className='label-value'>Id:</label><br></br>
      <input type='number' placeholder='Enter the id' onChange={(event)=>setId(event.target.value)}/><br></br>

      <label className='label-name'>Name:</label>
      <input type='text' placeholder='Enter the food name' onChange={(event)=>setFoods(event.target.value)}/><br></br>

      <label className='label-name'>Price:</label>
      <input type='number' placeholder='Enter the food price' onChange={(event)=>setPrice(event.target.value)}/><br></br>

      <label className='label-name'>Images:</label>
      <input type='text' placeholder='Enter the food name' onChange={(event)=>setImage(event.target.value)}/><br></br>

      <button onClick={add} >Add </button>
    </div>

    <div className='conatiner'>
      {
      search.length ?
      Ffoods.map((temp)=><FoodCard
           id={temp.id}
           name={temp.name}
           image={temp.image}
           price={temp.price}
           remove={remove}
      />)
      :
      Foods.map((temp)=><FoodCard
           id={temp.id}
           name={temp.name}
           image={temp.image}
           price={temp.price}
           remove={remove}
      />)
      }
      
    </div>
   
    </>
    
  )
}

export default App