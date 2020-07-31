
import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categ) => {

    const [state, setstate] = useState({

        data: [],
        loading: true
    });


    useEffect(() => {

        getGifs(categ)
            .then(imgs => {


                setstate({

                    data: imgs,
                    loading: false
                });

            })

    }, [categ]);

    return state;
}
