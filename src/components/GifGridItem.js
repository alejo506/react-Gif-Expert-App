
import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ cod, title, url }) => { //Recibe las propiedades de las imagenes de GifGrid //El cod si quiere se puede quitar porque no se está usando acá

    // console.log(cod, title, url);
    return (
        <div className="card animate__animated animate__flipInX">
            <img src={url} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

// TAREA. Seccion# 8, Video 88
// 1. Enzime. (Instalar desde la pagina). npm i --save-dev enzyme enzyme-adapter-react-16
// 2. Enzime to JSON
// 3. Debe mostrar el componente correctamente
//     A)Shallow
//     b)Wrapper
//     c)Wrapper .toMatchSnapshot()

// Seccion#8, video 89
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
