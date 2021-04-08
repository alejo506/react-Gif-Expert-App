// Con <GifGridItem/>  ya estaríamos utilizando React o JSX por eso importamos React
import React from 'react';
import { shalow, shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
    test('debe mostrar el componente correctamente', () => {
        
        // Seccion 8, video 89
        const title = 'Un título';
        const url = 'htpps://localhost/algo.jpg';

        // <GifGridItem/> es el componente al cual le vamos a hacer pruebas 
        const wrapper = shallow( <GifGridItem title= { title } url= { url }/> )
        
        expect( wrapper ).toMatchSnapshot(); //Creamos un Snapshot
    })
    
    
})
