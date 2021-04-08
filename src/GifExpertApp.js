
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import 'bootstrap/dist/css/bootstrap.min.css';

const GifExpertApp = () => {

  // Creando las categorias

  //Creamos un hook useState
  const [categories, setCategories] = useState(['Ranma']);// Se utiliza solo una categoría para no tener duplicidad en lo que se va  a hacer

  return (
    <>
      <h1 className="display-1 animate__animated animate__lightSpeedInLeft"> GifExpertApp</h1>
      {/*Exportamos la función setCategories al archivo AddCategory "setCategories = {setCategories}"  */}
      <AddCategory setCategorias={setCategories} />
      <hr></hr>



      {/* Mostrar las categorias en una lista ordenada */}
      <ol>
        {
          categories.map(category => (

            <GifGrid
              key={category}
              categ={category} /> // Se va a enviar la categ que va a ser igual a category(la categoria que está evaluando en ese momento)

          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
