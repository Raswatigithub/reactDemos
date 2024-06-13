import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import Login from "./login";
import Salary from "./Salary";
import User from "./User";
import CalculateSalary from "./CalculateSalary";
import Product from "./Product";
import ProductShow from "./ProductShow";


const Rstudent=()=>
{
  return(<>      
      
        <Routes >

        <Route  path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route path="/salary" element={<Salary/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/totalSalary" element={<CalculateSalary/>}/>
        <Route path="/product/:id/:title/:price" element={<Product/>}/>
        <Route
          path="/product/:id/:title/:price"
          element={<ProductShow />}
        ></Route>
        </Routes>


      </>

      )

}
export default Rstudent;