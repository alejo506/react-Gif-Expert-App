import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import { Spinner } from 'react-awesome-spinners';


export const GifGrid = ({ categ }) => {// 1.Recibe la categoría como argumento

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // data: images es para renombrar data, data ahora es images, se puede utlizar data pero es bueno saber que para renombrar en la desestructuración agregamos el nombre quetiene actualmente ":" seguido del nuevo nombre que queremos asignar a esa propiedad, por lo que images es el nuevo nombre de data.
    //Hace el llamado a la función useFetchGifs(categ) por lo que se redirige al archivo useFetchGifs.js
    const { data: images, loading } = useFetchGifs(categ); //El categ lo estoy enviando a useFetchGifs.js, para hacer uso de ella en dicho archivo


    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <h2> {categ} </h2>

            {loading && <Spinner />}  {/*En lugar de utilizar un operador ternario, utilizamos un operador And, por lo que sería como 
            decir si loading===true entonces ponga el Spinner, de lo contrario no ponga nada, pero no debemos especificar que no ponga 
            nada en cambio con el operador ternario si tendriamos que poner null para que no muestre nada, por lo que es una forma más corta utilizar &&*/}
            {/* El Spinner lo agregué por mi cuenta, hice la importación respectiva para utlizarlo*/ }
            
            <div className="card-grid">

                {
                    //Aquí en lugar de "data" ahora utilizamos el nuevo nombre "images"
                    images.map(img => (
                        <GifGridItem
                            key={img.cod}// Siempre se agrega el key para que no presente error
                            {...img}//Envíe un objeto con las propiedades independientes id, title , url
                        />

                    ))
                }
            </div>
        </>
    )
}
