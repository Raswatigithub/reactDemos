import React from 'react'
import { useLocation } from 'react-router-dom'

const CalculateSalary = () => {
    const data=useLocation();
    let {salary}=data.state;
    let bouns=10;
    // console.log(salary)
  return (
   <>
   <h2>Bouns:{bouns}%</h2>
   <h2>Total salary:
    {parseInt(salary) +parseInt((salary * bouns) / 100)}
   </h2>
   </>
  )
}

export default CalculateSalary