//Tercer componenente
//Se recibe como argumento la category
/* //Se declara función fuera del componente funcional debido a que no se debe crear nunca dentro de este por temas de renderización
//Funcion async wait con argumento
const getGifs = async (category) => {
    //Conectar con la API        
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=oPDAT3y79dbaLW7LdHECQ16EQo8xp7q1&q=valorant`; //Back-tips
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=oPDAT3y79dbaLW7LdHECQ16EQo8xp7q1&q=${ category }&limit=20`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oPDAT3y79dbaLW7LdHECQ16EQo8xp7q1&q=${ category }`;
    //Petición https
    const resp =  await fetch (url); 
    //Destructurar data
    const { data } = await resp.json();
    //Extraer data especifica
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title, 
        url: img.images.downsized_medium.url
    }));
    
    console.log(gifs);
    return gifs;
    
} */

//La función comitiada pasa a archivo getGifs.js en helpers
//Se recibe como property la category
//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs"; //Se llama la funcion desde getGifs.js (helpers)
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem"; //Se llama el componente "GifItem"

export const GifGrid = ({ category }) => {
    //Hook Personalizado
     const {images, isLoading} = useFetchGifs(category);
     //console.log({ images, isLoading });

    return (
        <>
            <h3> { category } </h3>
            {/* <h2>Cargando...</h2> */}
            {
                /* isLoading
                ? ( <h2>Cargando...</h2> )
                : null //el null es REACT NO SE RENDERIZA */

                //Lo anteriomente comitiadi puede hacerse de forma corta:
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        //<li key={ id }>{ title }</li>
                        <GifItem 
                        key={ image.id }
                        //title={image.title}
                        //url={image.url}
                        {...image} //**Exparsir todas las properties
                        />
                    )) 
                }
            </div>

             
        </>
    )
}

    //Ejemplo Inicial
    /* const gifs = [1,2,3,4,5];

    return (
        <>
            <h3> { category } </h3>
            { gifs.map(gif => (
                    <p> { gif } </p>
                ))
            }
        </>
    )
}
 */