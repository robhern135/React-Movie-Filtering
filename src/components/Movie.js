import { motion } from "framer-motion"

function Movie({ movie }) {
  const { title, backdrop_path } = movie
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      className="movie-item"
    >
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
    </motion.div>
  )
}
export default Movie
