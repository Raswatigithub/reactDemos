import { useEffect } from "react";
import { useState } from "react";
import Pcard from "./Pcard";
import "./App.css"
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react'



const NewModal=()=>{

  const [open, setOpen] =useState(false)


  let[Products,setProducts]=useState([])
  let[Fproducts,setFproducts]=useState([])
  let[search,setSearch]=useState("")
  let[title,setTitle]=useState("");
  let[id,setID]=useState();
  let[price,setPrice]=useState("");
  let[image,setGetImage]=useState();


  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((temp)=> temp.json())
      .then((res)=>setProducts(res))
      .catch((e)=> console.log(e))


  },[])

  useEffect(()=>{
    let data=Products.filter((temp)=>temp.title.includes(search));
    console.log(data)
    setFproducts(data);
  },[search])

const remove=(id)=>{
  const data=Products.filter((temp)=>temp.id!=id)
  alert(id)
  setProducts(data)

}

const add=()=>{
  const addnew={id,title,price,image};
  setProducts([addnew,...Products])
  setOpen(false)
}


  return(<>

  
  <p>search
  <input type="text" placeholder="Enter the title" onChange={(event)=>setSearch(event.target.value)}/>
  
 </p>
  
  <div>
  <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <ModalHeader>Select a Photo</ModalHeader>
      <ModalContent>
       
        <ModalDescription>
          <Header>Add Data</Header>
          <div>
    id: <input type="number" placeholder="Enter id" onChange={(event)=>setID(event.target.value)}/><br></br>
     title: <input type="text" placeholder="Enter title" onChange={(event)=>setTitle(event.target.value)}/><br></br>
     price: <input type="number" placeholder="Enter price" onChange={(event)=>setPrice(event.target.value)}/><br></br>
     image: <input type="text" placeholder="Enter url" onChange={(event)=>setGetImage(event.target.value)}/>
     
     <br></br>
    

     
    
    </div>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Add"
          labelPosition='right'
          onClick={add}
         
        />
      </ModalActions>
    </Modal>
  </div>
   <div className="main">

    
   {
    search.length?
    Fproducts.map((temp)=><Pcard id={temp.id} title={temp.title} image={temp.image} price={temp.price} remove={remove}/> )
    :
    Products.map((temp)=>  <Pcard id={temp.id} title={temp.title}  image={temp.image} price={temp.price} remove={remove}/>)
    


   }

  
   </div>
  
  
  </>)





}
export default NewModal;