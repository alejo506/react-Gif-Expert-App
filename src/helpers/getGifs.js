
    // Se necesita la categoria por eso se manda por argumento
    export const getGifs = async ( categ) => {

        //A la url le agregamos `` y luego cambiamos Rick+adn+Morty por ${ category }, pero ya que la categoría tiene espacios Rick and Morty, entonces hay que escaparlo para que la petición sea correcta , para eso se utiliza. Una vez que hacemos esto aparecen las imagenes de dragon ball ya que estamos mandando la categ al API
        const url = `https://api.giphy.com/v1/gifs/search?api_key=CA4J6lcxJMzqSiSYilHjueQoiPBfJEia&q=${encodeURI(categ)}&limit=10`
        const resp = await fetch(url);
        const { data } = await resp.json();// Como necesito la data que viene dentro de la esa data puedo usar desestructuración { data }. Porque es una información en formato JSON la que me recibe esto 


        const gifs = data.map(img => {
            return { 
                cod: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url 

            }

        })
 
        return gifs;
    }

