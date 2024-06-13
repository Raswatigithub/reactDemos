import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Salary = () => {
  let [sal, setSal] = useState();
  const nav = useNavigate();
  const calculateSalary = () => {
    nav("/totalsalary", { state: { MySalary: sal } });
  };
  return (
    <div className="cont">
      <h1>Salary Payslip</h1>
      <input
        type="text"
        placeholder="enter your salary"
        onChange={(e) => setSal(e.target.value)}
      ></input>

      <button onClick={calculateSalary}>create salary slip</button>
    </div>
  );
};

export default Salary;
