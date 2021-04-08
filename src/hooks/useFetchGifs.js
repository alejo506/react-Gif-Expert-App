
import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categ) => { //categ lo recibo como si fuera una prop desde GifGrid.js

    const [state, setstate] = useState({

        data: [],
        loading: true
    });


    useEffect(() => { // El useEffect(async()=>{}) no puede recibir un async porque esperan algo sincrono

        getGifs(categ)//getGifs hace la petición HTTP
            .then(imgs => { //then es lo que regresa si todo salió bien, en este caso regresa las imagenes


                setstate({ //Cuando tenemos la data llamamos setState para cambiar la información, ya que la data se inicializa en [] y con este setState va a disparar una renderización en el componente GifGrid

                    data: imgs, // imgs son las imagenes, es un arreglo de imagenes
                    loading: false
                });

            })

    }, [categ]); // Se hace el efecto para que solo se dispare cuando cambia la categoria [categ]

    return state;
}
