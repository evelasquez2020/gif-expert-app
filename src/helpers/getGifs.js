//Se declara función fuera del componente funcional debido a que no se debe crear nunca dentro de este por temas de renderización
//Funcion async wait con argumento
export const getGifs = async (category) => {
    //Conectar con la API        
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=oPDAT3y79dbaLW7LdHECQ16EQo8xp7q1&q=${ category }`;
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=oPDAT3y79dbaLW7LdHECQ16EQo8xp7q1&q=valorant`; //Back-tips
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oPDAT3y79dbaLW7LdHECQ16EQo8xp7q1&q=${ category }&limit=4`;
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
    //console.log(gifs);
    return gifs;   
}