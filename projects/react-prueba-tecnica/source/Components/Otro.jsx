import { useCatImage } from '../hooks/useCatImage.js'

export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'Otro random fact' })
    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}




