import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //Para recuperar la imagen cada vez que se obtiene un nuevo hecho
    useEffect(() => {

        if (!fact) return

        //Se recuperan las tres primeras palabra partiendo la cadena del hecho
        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `${CAT_PREFIX_IMAGE_URL}/cat/${_id}/says/${threeFirstWords}?fontColor=cyan`
                console.log(url)
                setImageUrl(url)
            })
    }
        , [fact])

    return { imageUrl }
}