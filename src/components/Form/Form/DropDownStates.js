import React, { useState, useEffect } from "react";
import { fetchStates } from "./Ibge";

const DropDownState = ({ id, name, onChange = () => {} }) => {
  //USESTATE
  const [states, setStates] = useState([]);

  //USEEFFECT
  useEffect(() => {
    fetchStates().then((states) => {
      setStates(states);
    });
  }, []);

  return (
    <div>
      <select
        id={id || name}
        name={name || id}
        className="form-select select"
        onChange={onChange}
      >
        <option value="">Informe seu estado...</option>
        <option>...</option>
        {states.map((state) => {
          const { sigla, nome } = state;
          return (
            <option value={sigla} key={nome}>
              {nome}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default DropDownState;
