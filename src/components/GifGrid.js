import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import { Spinner } from 'react-awesome-spinners';


export const GifGrid = ({ categ }) => {// 1.Recibe la categoría como argumento

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // data: images es para renombrar data, data ahora es images
    const { data: images, loading } = useFetchGifs(categ); //Se almacena en una constante llamada state. Devuelve un objeto {data:[], loading}


    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <h2> {categ} </h2>

            {loading && <Spinner />}

            <div className="card-grid">

                {

                    images.map(img => (
                        <GifGridItem
                            key={img.cod}
                            {...img}
                        />

                    ))
                }
            </div>
        </>
    )
}
