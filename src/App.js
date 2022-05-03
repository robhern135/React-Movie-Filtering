import "./App.css"
import { useEffect, useState } from "react"

import Movie from "./components/Movie"
import Filter from "./components/Filter"

import { motion, AnimatePresence } from "framer-motion"

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const data = await fetch(POPULAR_URL)

    const movies = await data.json()

    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return (
            <AnimatePresence>
              <Movie key={movie.id} movie={movie} />
            </AnimatePresence>
          )
        })}
      </motion.div>
    </div>
  )
}

export default App
