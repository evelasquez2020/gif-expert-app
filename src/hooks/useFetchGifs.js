//Hook personalizado
//Un hook no es mas que una función que regresa algo

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//En este caso el retur es solo un objeto
export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); //Segundo Hook

    const getImages = async () => {
        const newImages = await getGifs( category);
        setImages(newImages);
        setIsLoading(false); //Set Segundo Hook
    }
    //useEffect es un hook que sirve para disparar efectos secundarios
    //Efecto secundario: proceso que se quiera ejecutar cuando algo suceda
    //useEffect tiene dos argumentos 1: funcion 2: dependencia(s)
    //useEffect no le gustan los async, es decir, no trabaja con promesas (mala practica)
    
    useEffect( () => {
        getImages();
    },  [ ]); //Segundo argumento: si se define arreglo vacio "[]" sólo se ejecuta una vez.


  return {
    /* images: images,
    isLoading: isLoading **Cuando la referencia es la misma se puede abreviar la llave*/
    images,
    isLoading 
  }
}
