import React, { useState } from "react";

import "./App.css";
import DropDownStates from "./components/Form/Form/DropDownStates";
import DropDownCity from "./components/Form/Form/DropDownCity";
import DadosPessoais from "./components/Form/Form/DadosPessoais";

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="select">
      <div>
        <DadosPessoais />
        <DropDownStates id="state" name="state" onChange={handleInputChange} />
        <DropDownCity
          id="city"
          name="city"
          state={formValues.state}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary">Enviar</button>
      </div>
    </form>
  );
}

export default App;
