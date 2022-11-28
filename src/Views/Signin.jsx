import React, { useState } from "react";
import { Register } from "../Components/Register";
import { Login } from "../Components/Login"

import "../Assets/Styles/signin.css";

const Signin = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="signin">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Signin;
