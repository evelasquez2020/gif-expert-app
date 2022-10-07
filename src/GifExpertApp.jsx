//import React from 'react' **Despues de la V17 de REACT no es necesario importar react por todo lado, porque ya se sabe que se está sobre un proyecto de REACT

import { useState } from 'react';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
import {AddCategory, GifGrid} from './components';

// No olvidar el comando rafc para crear un funcional component de REACT
export const GifExpertApp = () => {

//useStateSnippet + Tab
const [categories, setcategories] = useState([ 'One Punch' ]); //Estado inicial

//console.log(categories);

//Agregar una nueva categoria
const onAddCategory = (newCategory) => {
    //console.log('Valorant'); **Probar en consola
    //Forma #1 MAL
    //categories.push('Valorant'); **Olvidarse de usar método "push" ya que muta el objeto.
    //La idea es tratar REACT es nunca mutar el estado.
    //Cuando se quieran cambiar las categorías se llama el "setCategories".
    
    //Forma #2 BIEN
    //[] Crear un nuevo arreglo
    //...categories crear una copia del arreglo (Operador spread)
    //De este modo, al final se añade la nueva categoría
    //setcategories([ ...categories, 'Valorant' ]);
    //La línea anterior tambien se puede agregar al principio del arreglo y después realizar la des-estrunturación
    
    //Validar Nombres Únicos. No se debe usar "i". En cambio se debe usar condicion:
    //Si la categoria existe no hace nada
    if (categories.includes(newCategory)) return;
    //De lo contrario incluye la nueva categoría en el arreglo
    setcategories([ newCategory, ...categories  ]);

    //Forma #3 BIEN
    //setcategories( cat => [ ...cat, 'Valorant' ] );
}

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
      {/* La siguiente línea define una propiedad del componente desde este punto de la app y apunta directamente a la función */}
      < AddCategory 
        //setCategories = { setcategories } 
        //Todos los eventos llevan la palabra "on"
        onNewCategory = { (value) => onAddCategory(value) }
        //currentCategories = { categories }

      />

      {/* listado de Gif */}
      {/* <button onClick={ onAddCategory }> Agregar </button> */}
      {/* En lugar del boton: */}
      
      {/* <ol> */}
      { categories.map( category => (
      <GifGrid key={category} category={category} /> 
          )
      )}

      {/* <li>123</li> */}
      {/* </ol> */}
      {/* Gif Item */}
      
      </>
  )
}