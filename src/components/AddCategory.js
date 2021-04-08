import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {

  const [inputValue, setInputValue] = useState(''); //Si no se pone el string vacio en el use a un error de que el componente está cambiando incontroladamente, este error es debido a que si no se pone nada el valor es undefined por ende el valor del input value es undefined

  //Con esta función lo que se quiere hacer es que se escriba algo en la caja de texto y se presione para que muestre algo
  const handleSubmit = (e) => {

    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategorias((categ) => [inputValue, ...categ]);
      setInputValue("");
    }
    // console.log("Submit hecho");
  };

  // Con esta función ya se puede cambiar el valor dentro del input. 
  const handleInputChance = (e) => {


    setInputValue(e.target.value);
  };
  return (

    (
      <form onSubmit={handleSubmit}>
        <input
          //Atributos
          className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          value={inputValue}
          onChange={handleInputChance}
        />
      </form>
    )
  );

};

AddCategory.propTypes = {


  setCategorias: PropTypes.func.isRequired,
};
