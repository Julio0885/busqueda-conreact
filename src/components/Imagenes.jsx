import React from 'react'
import { useEffect, useState } from 'react'

export default function Imagenes({ query }) {
    const [images, setImages] = useState([]) // estado que contienen los productos
    
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&format=json&nojsoncallback=1`

    async function getImages() {
        try {
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
            setImages(data.photos.photo) // setea el estado con los productos obtenidos de la API
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => { // evita crear un bucle infinito a causa de re-render que ocasiona el cambio del estado.
        // let url = selectedCategory === "todos" ? base : base + `/category/${selectedCategory}`;
        getImages();
    }, [query]) // se ejecuta cuando cambia el estado de query
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center mx-auto">
        {
            images.map((photo) => {
            const { farm, server, id, secret } = photo; // destructuring para obtener los valores de la API
            return (
              <img
                key={id}
                className="w-50 h-40 md:w-80 md:h-60 object-cover"
                src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
                alt=""
              />
            );
          })

        } 
    
      </div>
    );
  }
