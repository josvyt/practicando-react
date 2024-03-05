import './App.css'
import { useEffect, useState, useRef, useCallback } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  // Para validación de forma controlada con useEffect
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se pueden buscar películas con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 carácteres')
      return
    }

    setError(null)
  }, [search])


  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    // Validación controlada en el cambio 
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name='query'
            placeholder='Star Wars, Avengers, Justice League' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'rgb(200 50 50', fontWeight: 'bold' }}>{error}</p>}
      </header>

      <main>
        {
          loading
            ? <p>Cargando ...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
