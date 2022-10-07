import { useState } from 'react';

//Cada componente puede tener sus propios Hooks 
export const AddCategory = ({ onNewCategory }) => { //Se llama setCategories desde
    
//Entonces como se manje el estado de un input (elemento html)
//Se implementa useState
const [inputValue, setInputValue] = useState('');

/* const onInputChange = (event) => {
  console.log(event.target.value);
    //setInputValue('Hola mundo');
    setInputValue(event.target.value);
} */

//Lo comitiado anteriormente tambien se realiza desestructurando en "target" para evitar escribir dos veces "event."
const onInputChange = ({ target }) => {
    //console.log(target.value);
    //setInputValue('Hola mundo');
    setInputValue(target.value);
}

const onSubmit = (event) => {
  event.preventDefault(); //Se utiliza para evitar que el navegador web se refresque
  //console.log(event);
  //console.log(inputValue);
  //Se evalua que el input contenga un valor antes de ejecutar la línea siguiente
  if (inputValue.trim().length <= 0) return; 
  //Se actualizan las categorias con el input value y las categorías almacenadas en memoria
  //setCategories(categories => [inputValue, ...categories ]);
  onNewCategory(inputValue.trim()); 
  //Se limpia el "inputValue"
  setInputValue('');
}

return (
//<> **Fragmento es necesario cuando existe + de 1 elemento html. En este caso "form" es el contenedor padre
<form onSubmit={ (event) => onSubmit(event) }>
<input 
    type = "text"
    placeholder = "Buscar Gifs"
    value={ inputValue }
    //onChange={ (event) => onInputChange (event)}
    //Cuando se trabaja directamente con el evento no hay necesidad de escribir y se abrevia (event)
    onChange={ onInputChange } 
/>
</form>
//</>

  )
}
