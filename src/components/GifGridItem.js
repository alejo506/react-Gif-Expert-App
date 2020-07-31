
import React from 'react';


export const GifGridItem = ({ cod, title, url }) => { //Recibe las propiedades de las imagenes de GifGrid //El cod si quiere se puede quitar porque no se está usando acá

    console.log(cod, title, url);
    return (
        <div className="card animate__animated animate__flipInX">
            <img src={url} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}


