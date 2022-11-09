import React, { useState, useEffect } from "react";
import { fetchCitysForStates } from "./Ibge";

const DropDownCity = ({ id, name, state, onChange = () => {} }) => {
  //USESTATE
  const [citys, setCitys] = useState([]);

  //USEFFECT
  useEffect(() => {
    fetchCitysForStates(state).then((citys) => {
      setCitys(citys);
    });
  }, [state]);
  return (
    <select
      id={id || name}
      name={name || id}
      className="form-select select"
      onChange={onChange}
    >
      <option value="">Informe sua cidade...</option>
      <option>...</option>
      {citys.map((city) => {
        const { id, nome } = city;
        return (
          <option value={id} key={id}>
            {nome}
          </option>
        );
      })}
    </select>
  );
};
export default DropDownCity;
