import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";
import "./App.css";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Modal,
} from 'semantic-ui-react';

const App = () => {
  const [open, setOpen] = useState(false);
  const [Products, setProducts] = useState([]);
  const [Fproducts, setFproducts] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [id, setID] = useState();
  const [price, setPrice] = useState("");
  const [image, setGetImage] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((temp) => temp.json())
      .then((res) => setProducts(res))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    let data = Products.filter((temp) => temp.title.includes(search));
    setFproducts(data);
  }, [search, Products]);

  const remove = (id) => {
    const data = Products.filter((temp) => temp.id !== id);
    setProducts(data);
    setFproducts(data.filter((temp) => temp.title.includes(search))); // Update filtered products
  };

  const add = () => {
    const addnew = { id, title, price, image };
    setProducts([addnew, ...Products]);
    setFproducts([addnew, ...Fproducts]);
    setOpen(false);
  };

  return (
    <>
      <p>
        search
        <input
          type="text"
          placeholder="Enter the title"
          onChange={(event) => setSearch(event.target.value)}
        />
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
                id: <input type="number" placeholder="Enter id" onChange={(event) => setID(event.target.value)} /><br />
                title: <input type="text" placeholder="Enter title" onChange={(event) => setTitle(event.target.value)} /><br />
                price: <input type="number" placeholder="Enter price" onChange={(event) => setPrice(event.target.value)} /><br />
                image: <input type="text" placeholder="Enter url" onChange={(event) => setGetImage(event.target.value)} /><br />
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
          search.length ?
            Fproducts.map((temp) => <Pcard key={temp.id} id={temp.id} title={temp.title} image={temp.image} price={temp.price} remove={remove} />)
            :
            Products.map((temp) => <Pcard key={temp.id} id={temp.id} title={temp.title} image={temp.image} price={temp.price} remove={remove} />)
        }
      </div>
    </>
  );
};

export default App;
