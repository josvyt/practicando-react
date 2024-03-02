const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    // con async await 
    // async function getRandomFact () {
    //     const rest = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //     const json = await rest.json()
    //     setFact(json.fact)
    // }
    // getRandomFact
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}